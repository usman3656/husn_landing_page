# Deploying husn.io to GitHub Pages

Every push to `main` triggers `.github/workflows/deploy.yml` → builds Next.js as a static export → publishes to GitHub Pages → serves at https://husn.io.

## One-time setup (do these in order)

### 1. Push this repo to GitHub
```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Turn on GitHub Pages (repo settings)
1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**: select **GitHub Actions**
3. (No branch to pick — the workflow handles it)

### 3. Add the form endpoint as a secret
1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a new form → copy its endpoint (looks like `https://formspree.io/f/abcd1234`)
3. In the repo: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
4. Name: `NEXT_PUBLIC_FORM_ENDPOINT`, value: the Formspree URL
5. (If you skip this, the demo form falls back to a `mailto:hello@husn.io` link — still works.)

### 4. Point husn.io DNS at GitHub Pages
At your domain registrar (where you bought husn.io), set the following records on the **root** domain (`@`):

| Type | Host | Value |
|------|------|-------|
| A    | @    | `185.199.108.153` |
| A    | @    | `185.199.109.153` |
| A    | @    | `185.199.110.153` |
| A    | @    | `185.199.111.153` |
| AAAA | @    | `2606:50c0:8000::153` |
| AAAA | @    | `2606:50c0:8001::153` |
| AAAA | @    | `2606:50c0:8002::153` |
| AAAA | @    | `2606:50c0:8003::153` |

If you want `www.husn.io` to also work, add:

| Type  | Host | Value |
|-------|------|-------|
| CNAME | www  | `<your-username>.github.io.` |

(Replace `<your-username>` with your GitHub username. Note the trailing dot if your registrar requires it.)

DNS can take 10 min – 24 h to propagate.

### 5. Verify the custom domain in GitHub
After the first deploy succeeds:
1. **Settings** → **Pages**
2. The `Custom domain` field should already say `husn.io` (because `public/CNAME` is in the repo).
3. Once DNS resolves, check **Enforce HTTPS**. GitHub will provision a free Let's Encrypt cert automatically.

## Local development

```bash
cp .env.example .env.local      # then edit NEXT_PUBLIC_FORM_ENDPOINT
npm install
npm run dev                     # http://localhost:3000
```

## Day-to-day usage

```bash
git add -A
git commit -m "your message"
git push                        # triggers the Actions workflow
```

Watch the run under the repo's **Actions** tab. Green check = live on husn.io within ~1 minute.

You can also trigger a deploy manually: **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

## What's in the pipeline

| File | Purpose |
|------|---------|
| `next.config.ts` | `output: "export"` makes Next emit a static `out/` directory |
| `public/CNAME` | Tells GitHub Pages to serve at `husn.io` |
| `public/.nojekyll` | Stops GitHub from running Jekyll on the output |
| `.github/workflows/deploy.yml` | Build + publish on every push to `main` |
| `lib/waitlist-action.ts` | Form submits to Formspree (or falls back to mailto) |
