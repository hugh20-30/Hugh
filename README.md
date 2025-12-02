# Hugh — Game Prototypes

This repository contains a small website that hosts two prototype games:

- Cookie Clicker (incremental / idle) — React + TypeScript MVP using localStorage.
- FPS Demo — a minimal Three.js scene as a starting point for a browser FPS prototype.

Getting started (node + npm/yarn/pnpm required):

```bash
# install deps
npm install

# run dev server
npm run dev
```

Open http://localhost:5173 in your browser after starting the dev server.

Next steps (what I implemented for you):

- Polished the Cookie Clicker MVP (adds shops, prestige/ascend mechanism, achievements and click sound).
- Expanded the FPS demo with pointer-lock WASD movement, shooting with raycasting, simple targets and multiplayer wiring.

Running the multiplayer server (optional):

```bash
# start the local websocket relay server
npm run start:server
```

Publishing the server as a container image

I added a Dockerfile for the server at `server/Dockerfile` and a GitHub Actions workflow `.github/workflows/publish-server-image.yml`.
On pushes to `main` that modify anything under `server/` the workflow will build and publish a Docker image to GitHub Container Registry under your account at:

	ghcr.io/<your-org-or-user>/hugh-ws-server:latest

Deploying the server to Render (one option)

If you want automated deploys to Render, create a Render service configured to use the GHCR image, then add these repository secrets in GitHub:

- RENDER_API_KEY — A Render service API key
- RENDER_SERVICE_ID — The service ID you get from Render

I added an example workflow `.github/workflows/deploy-server-render.yml` that will trigger a Render deploy if those secrets are present.

If you prefer to host elsewhere I can add a deploy workflow for Fly.io, Railway, or another provider — tell me which and I'll add a ready-to-run workflow.
I added example workflows to automatically trigger deploys for several hosts when the repository contains the correct secrets:

- Fly.io: .github/workflows/deploy-server-fly.yml — requires repo secrets FLY_API_TOKEN and FLY_APP_NAME. This deploys the latest GHCR image (ghcr.io/your-user/hugh-ws-server:latest).
- Railway: .github/workflows/deploy-server-railway.yml — requires repo secrets RAILWAY_TOKEN and RAILWAY_PROJECT_ID. The workflow triggers a Railway deployment via API for your project.

How to add repository secrets on GitHub
1) Open your repository on GitHub → Settings → Secrets → Actions
2) Add the secret names and values (e.g. FLY_API_TOKEN, FLY_APP_NAME, RENDER_API_KEY, RENDER_SERVICE_ID, RAILWAY_TOKEN, RAILWAY_PROJECT_ID)
3) Push to main (or open the workflow manually via the Actions tab) and the deployment workflow will run automatically when `server/**` changes are detected.

If you want I can also add scripts/commands to produce versioned tags for the image, or configure auto-rollback triggers. What host should I focus on finalizing for you now (Render, Fly, Railway or something else)?

This will start a lightweight WebSocket server on ws://localhost:4001 which the FPS demo can connect to for a simple peer-relay multiplayer spin-up.

Deployment / CI
- A GitHub Actions workflow was added to build and publish the `dist/` folder to GitHub Pages on pushes to `main` (.github/workflows/deploy.yml). The site will be served as a static website from the generated `dist` build.

Netlify (netlify.app)
- I added a GitHub Actions workflow at `.github/workflows/deploy-frontend-netlify.yml` so you can publish to Netlify automatically.
- To enable automatic deployment to Netlify you need two repository secrets:
	- `NETLIFY_AUTH_TOKEN` — a Netlify personal access token. Create one in Netlify under User settings → Applications → Personal access tokens.
	- `NETLIFY_SITE_ID` — your Netlify site ID (from Site settings → General -> Site details).

After you add those two secrets to GitHub (Repository → Settings → Secrets → Actions) pushes to `main` will trigger the Netlify deploy job which will upload the build in `dist/` to your Netlify site.

If you want to host the backend (websocket server) you'll need a separate hosting target (Railway, Fly, Fly.io, Render or similar) — I can add a deploy workflow for that if you want.

