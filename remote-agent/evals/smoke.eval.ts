import { defineEval } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description: "A mobile change request is recorded after the site edit.",
  async test(t) {
    await t.send(
      [
        "Request id: smoke0001",
        "",
        "Apply this change to the site workspace:",
        "",
        "Set the page title to Hello from mobile.",
      ].join("\n"),
    );
    t.succeeded();
    t.calledTool("record_change", {
      input: { requestId: "smoke0001" },
    });
    t.notCalledTool("get_change");
  },
});
