import { defineChannel, GET, POST } from "@grok/agent-sdk/channels";
import * as z from "zod/v4";
import { mobileAuth } from "../lib/auth.js";
import {
  changeKey,
  continuationKey,
  filesKey,
  presentChange,
  requestIdSchema,
  type ChangeView,
} from "../lib/changes.js";

type MobileState = {
  requestId: string;
};

export default defineChannel<MobileState>({
  auth: mobileAuth(),
  state: { requestId: "" },
  routes: [
    POST("/change", {
      description: "Start or continue a site change from the mobile app.",
      bodySchema: z.object({
        requestId: requestIdSchema,
        instruction: z.string().min(1).max(4000),
      }),
      handler: async (_request, { send, waitUntil, body, host }) => {
        const requestId = body.requestId;
        waitUntil(
          (async () => {
            await host.kv.put(changeKey(requestId), {
              status: "accepted",
              requestId,
              updatedAt: new Date().toISOString(),
            });
            await send(changeMessage(requestId, body.instruction), {
              continuationToken: continuationKey(requestId),
              title: `Change ${requestId}`,
              state: { requestId },
            });
          })(),
        );
        return new Response(null, { status: 202 });
      },
    }),
    GET("/change", {
      description: "Read the stored result for a mobile change request.",
      querySchema: z.object({
        requestId: requestIdSchema,
      }),
      handler: async (_request, { query, host }): Promise<Response> => {
        const [statusValue, filesValue] = await Promise.all([
          host.kv.get(changeKey(query.requestId)),
          host.kv.get(filesKey(query.requestId)),
        ]);
        const change: ChangeView = presentChange(
          query.requestId,
          statusValue,
          filesValue,
        );
        return Response.json({ ok: true, change });
      },
    }),
  ],
  events: {
    async "message.completed"(event, channel, ctx) {
      if (event.data.finishReason !== "stop" || event.data.text === "") return;
      const requestId = channel.state.requestId;
      if (requestId === "") return;
      await ctx.host.kv.put(changeKey(requestId), {
        status: "done",
        requestId,
        reply: event.data.text,
        updatedAt: new Date().toISOString(),
      });
    },
    async "turn.failed"(event, channel, ctx) {
      const requestId = channel.state.requestId;
      if (requestId === "") return;
      const message = event.data.message.trim().slice(0, 500);
      await ctx.host.kv.put(changeKey(requestId), {
        status: "failed",
        requestId,
        reply: message || "The agent could not finish this change.",
        updatedAt: new Date().toISOString(),
      });
    },
  },
});

function changeMessage(requestId: string, instruction: string): string {
  return [
    `Request id: ${requestId}`,
    "",
    "Apply this change to the site workspace:",
    "",
    instruction,
  ].join("\n");
}
