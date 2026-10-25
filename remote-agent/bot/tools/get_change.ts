import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";
import {
  changeKey,
  filesKey,
  presentChange,
  requestIdSchema,
  type ChangeView,
} from "../lib/changes.js";

export default defineTool({
  description:
    "Read the stored status of a mobile change request. The phone polls this. Do not call it while applying a change.",
  effect: "read",
  inputSchema: z.object({
    requestId: requestIdSchema,
  }),
  async execute({ requestId }, ctx): Promise<ChangeView> {
    const [statusValue, filesValue] = await Promise.all([
      ctx.host.kv.get(changeKey(requestId)),
      ctx.host.kv.get(filesKey(requestId)),
    ]);
    return presentChange(requestId, statusValue, filesValue);
  },
});
