# Remote change agent

A phone sends a change. This agent edits `site/` and stores a result the phone can read.

On this computer, loopback clients are admitted with no token. Every other client, including a phone, must send `Authorization: Bearer <MOBILE_AGENT_TOKEN>`.

## Run

```bash
cd remote-agent
export MOBILE_AGENT_TOKEN="$(openssl rand -hex 24)"
npx @grok/agent-sdk serve --dir . --mode single --host 0.0.0.0 --port 3000
```

Open `http://<this-machine>:3000/v1/channels/phone/` on the phone, paste the token, and describe the edit.

`serve` binds loopback unless you pass `--host`. Use a long token before binding `0.0.0.0`.

## Mobile API

`POST /v1/channels/mobile/change`

```json
{ "requestId": "mobabc123xyz", "instruction": "Make the headline say Welcome home" }
```

`requestId` is 8–64 characters from `[A-Za-z0-9_-]`. The same id continues one conversation. Send `X-BDK-Session-Key: change:<requestId>` so a hosted deployment keeps that conversation too. The route answers `202` and then does the work.

`GET /v1/channels/mobile/change?requestId=mobabc123xyz`

```json
{
  "ok": true,
  "change": {
    "requestId": "mobabc123xyz",
    "status": "done",
    "reply": "Updated the headline.",
    "summary": "Set the headline to Welcome home.",
    "files": ["index.html"],
    "updatedAt": "2026-10-24T09:00:00.000Z"
  }
}
```

`status` is `missing`, `accepted`, `done`, or `failed`. Poll until `done` or `failed`.

On Cursor-managed hosting, custom routes answer `202` with an empty body, so poll with the built-in tool route instead:

```bash
curl -X POST "$AGENT_ALIAS_URL/v1/tools/get_change" \
  -H "X-Agent-Alias-Token: $AGENT_ALIAS_TOKEN" \
  -H "content-type: application/json" \
  -d '{"input":{"requestId":"mobabc123xyz"}}'
```

Set the deployment secret `MOBILE_AGENT_TOKEN` before deploy. This project is not deployed yet.

The agent can read, edit, and delete files in `site/` only. It has no shell.
