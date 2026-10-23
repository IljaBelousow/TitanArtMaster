# TitanArtMaster — Cloudflare deployment

The production site is deployed to Cloudflare Workers from the `main_v2` branch.

## Build and deploy
1. In Cloudflare, open the `titanartmaster` Worker and confirm the connected repository is `IljaBelousow/TitanArtMaster`, branch `main_v2`.
2. Install dependencies with `bun install --frozen-lockfile`.
3. Build with `bun run build`.
4. Deploy with `npx wrangler deploy`.
5. After deployment, verify the home page and each route: `/about`, `/services`, `/ceilings`, `/contacts`, `/legal`, and `/privacy`.
6. Check the responsive navigation on desktop and mobile, and verify that local images and the phone link work.

## Important
Do not treat a GitHub commit or a successful build as proof that production was deployed. Confirm that Cloudflare reports a successful deployment for the latest `main_v2` commit.
