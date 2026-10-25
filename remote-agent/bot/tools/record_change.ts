import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";
import { filesKey, requestIdSchema, siteRelativePaths } from "../lib/changes.js";

type ChangeRecord = {
  requestId: string;
  summary: string;
  files: string[];
};

export default defineTool({
  description:
    "Record the site files changed for one mobile request. Call once, after the edits, with the request id from the user message.",
  effect: "idempotent",
  inputSchema: z.object({
    requestId: requestIdSchema,
    summary: z.string().min(1).max(500),
    files: z.array(z.string().min(1).max(200)).max(20),
  }),
  dryRunResult: ({ requestId, summary, files }): ChangeRecord => ({
    requestId,
    summary,
    files,
  }),
  async execute({ requestId, summary, files }, ctx): Promise<ChangeRecord> {
    const relative = siteRelativePaths(files);
    if (relative === null) {
      throw new Error("files must be relative paths inside the site workspace");
    }
    const record: ChangeRecord = { requestId, summary, files: relative };
    await ctx.host.kv.put(filesKey(requestId), record);
    return record;
  },
});
