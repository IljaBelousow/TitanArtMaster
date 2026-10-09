# TitanArtMaster — deployment notes

This is the source project for TitanArtMaster.

## Important
The current Vite build is tailored to Higgsfield's Cloudflare Workers runtime (`vite.config.ts` sets the SSR target to `webworker`, and `wrangler.jsonc` describes Cloudflare assets). It is **not yet a drop-in Vercel deployment**. Do not simply import and deploy unchanged; adapt the server build for Vercel's runtime first, then test the deployed URL in an incognito window.

## Vercel setup after adapter/configuration is completed
1. Upload this project to a Git repository you own (GitHub is easiest).
2. In Vercel, choose **Add New → Project** and import that repository.
3. Set the Root Directory to `app` (include the `packages/` workspace folder).
4. Use the package manager indicated by `bun.lock`; configure the framework/build output according to the Vercel-compatible TanStack Start adapter.
5. Deploy, then test the `*.vercel.app` URL in a private/incognito browser window before sharing it.
6. Add `TitanArtMaster.pro` in Vercel project settings and follow the DNS records Vercel provides. Do not guess DNS values.
