import { defineAgent } from "@grok/agent-sdk";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MOBILE_AGENT_SECRET } from "./lib/changes.js";

const siteDir = path.resolve(fileURLToPath(new URL("../site", import.meta.url)));

export default defineAgent({
  name: "Remote change agent",
  description:
    "Applies site changes requested from a mobile app to the shared site workspace.",
  model: {
    id: "grok-4.5",
    params: [
      { id: "effort", value: "high" },
      { id: "fast", value: "true" },
    ],
  },
  local: {
    workspaceDir: siteDir,
    sandbox: true,
  },
  tools: ["read", "edit", "delete", "grep", "glob", "ls"],
  hosting: {
    secretNames: [MOBILE_AGENT_SECRET],
  },
});
