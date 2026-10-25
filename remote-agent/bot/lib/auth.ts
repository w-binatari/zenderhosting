import { localDevStrict, sharedSecretAuth } from "@grok/agent-sdk/channels";
import { MOBILE_AGENT_SECRET } from "./changes.js";

/** Loopback on this machine, or a bearer token for every other client. */
export function mobileAuth() {
  return [
    localDevStrict(),
    sharedSecretAuth({
      header: "authorization",
      secret: MOBILE_AGENT_SECRET,
    }),
  ];
}
