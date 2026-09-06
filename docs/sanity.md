# Sanity blog setup

The website reads published posts from a public Sanity dataset on the server. Sanity Studio is embedded at `/studio`; Sanity authentication protects editing. No API token, separate CMS server, paid plugin, or database subscription is required for this implementation. Sanity Free usage quotas still apply.

## Create and connect your project

1. Sign in at https://www.sanity.io/manage and create a project named **Veer Windows** on the **Free** plan.
2. Copy the **Project ID** from the project settings.
3. In **Datasets**, create a **public** dataset named `production` if it does not already exist. Only place content intended for public access in this dataset. Drafts require authentication and the website explicitly requests the published perspective.
4. In the project's **API / CORS origins** settings, add `http://localhost:3000` and your exact production website origin (for example, `https://your-domain.com`), with credentials allowed so Studio can authenticate. Add only trusted origins; avoid wildcards. Preview deployments need their own allowed origin if you intend to use Studio there.
5. Copy `.env.example` to `.env.local` and fill in your public identifiers:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

These identifiers are public, not credentials. Do not add an editor token to browser environment variables. A private dataset is not supported by this token-free configuration.

## Run locally

Use Node.js 22.12 or newer within the Node 22 line (or a supported newer Node release).

```sh
npm ci
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`.
Visit `http://localhost:3000/studio`, sign in with your Sanity account, and create authors, categories, and a blog post. Generate its slug, add a cover image with alternative text, write the article, and click **Publish**. Referenced authors and categories must also be published.

## Content model and routes

- `post`: title, unique slug, excerpt, cover image and alt text, publication date, author reference, category references, rich-text body, optional SEO title and description.
- `author`: name.
- `category`: title.
- Sanity manages document IDs, revisions, and creation/update timestamps. References avoid duplicating author/category records.
- `/blog`: newest-first listing, nine posts per page; `?page=2` selects another page.
- `/blog/[slug]`: full article and article metadata; missing/unpublished posts render the not-found view with noindex metadata. Next.js streamed responses can retain HTTP 200 after the loading boundary has been sent.
- `/studio`: authenticated content editor. The shell is publicly reachable and marked noindex; Sanity controls access to content mutations.

Content schemas live in `src/sanity/schemaTypes.ts`, Studio in `src/sanity/Studio.tsx`, and server-only queries and response validation in `src/lib/sanity/posts.ts`. Display components are in `src/components/site/`.

The website uses Next.js fetch caching with a 60-second revalidation interval. After publishing, the first visit following cache expiry can still receive the cached response while it refreshes; reload after the refresh completes. This is not immediate live preview. Future-dated posts stay hidden until their publication date, subject to the same cache behavior. No polling or webhook subscription is needed.

Without a project ID, the blog shows an empty state and Studio shows setup instructions. With a configured but unavailable CMS, the blog shows a retryable error rather than fabricated articles. Existing sample cards are no longer displayed on `/blog`.

## Verification

```sh
npx tsc --noEmit
npm run lint
npm run build
npm run start
```

1. With no environment configuration, verify `/blog` shows the empty state and `/studio` explains configuration.
2. Connect your project, publish an author, category, and complete post; verify its card, image, date, body, and SEO metadata.
3. Save a second post as a draft; verify it is absent from the listing and its URL renders the not-found view with noindex metadata. Test an unknown slug and invalid page number as well.
4. Publish more than nine posts and verify both pagination directions.
5. Edit a published post, wait for cache expiry, and verify the refreshed content. Unpublish it and verify it disappears after cache refresh.
6. Verify links, headings, lists, image alternative text, narrow-screen layout, and keyboard navigation. Unsafe link protocols are not rendered as clickable links.
7. In an incognito browser, verify Studio requires Sanity login to edit. Confirm drafts cannot be read through the website.

## Deployment

Add the two `NEXT_PUBLIC_SANITY_*` variables to the Vercel project's environment settings, then redeploy. Public environment variables are baked into client bundles, so changes require a new build. Set the Node.js version to a supported release matching local development. Configure the production CORS origin before signing into `/studio`.

No deployment or Sanity project creation is performed by these code changes. A working account/project is necessary for end-to-end publishing verification.

## Implementation verification notes

The public `production` dataset for project `mxmbfqnf` was reachable and empty during integration. TypeScript, lint for all changed source files, and the production build passed. HTTP checks confirmed the empty blog, missing-content views, and the configured noindex Studio shell. Publishing and editor login still require your Sanity account; visual browser verification was unavailable in the development environment.

The repository-wide lint command currently reports pre-existing line-ending formatting errors in unchanged files. The dependency audit reports eight moderate findings in the Sanity CLI dependency chain, including `typeid-js` / `uuid` and `@vercel/frameworks` / `smol-toml`. Compatible `js-yaml` and `nanoid` overrides remove the high-severity findings. Do not run `npm audit fix --force` without reviewing its proposed major-version changes.

Sanity Free does not make Vercel hosting free for commercial use: Vercel Hobby is restricted to personal/non-commercial use. For a business site with a strict zero hosting budget, choose and validate an eligible hosting option separately before production deployment. Existing domain renewal costs are also separate.

Official references: [Sanity pricing](https://www.sanity.io/pricing), [Sanity Studio in Next.js](https://www.sanity.io/docs/nextjs/embedding-sanity-studio-in-nextjs), [Vercel Hobby](https://vercel.com/docs/plans/hobby).
