import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { allowAll, defineChannel, GET } from "@grok/agent-sdk/channels";
import * as z from "zod/v4";

const pagePath = fileURLToPath(new URL("../../mobile/index.html", import.meta.url));

export default defineChannel({
  auth: [allowAll()],
  routes: [
    GET("/", {
      description: "Phone page for sending a site change.",
      querySchema: z.object({}),
      handler: () => {
        const html = readFileSync(pagePath, "utf8");
        return new Response(html, {
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "no-store",
          },
        });
      },
    }),
  ],
});
