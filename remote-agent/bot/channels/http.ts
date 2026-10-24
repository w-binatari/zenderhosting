import { httpChannel } from "@grok/agent-sdk/channels";
import { mobileAuth } from "../lib/auth.js";

export default httpChannel({
  auth: mobileAuth(),
});
