# shaneainsworth.com

Personal portfolio site for Shane Ainsworth, Cinematographer.
Built with Next.js 14, deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding / Editing Projects

All project data lives in one place:

```
app/data/projects.js
```

Each project has:
- `title`, `subtitle`, `category`, `director`, `productionCo`, `year`
- `vimeoId` or `youtubeId` — the ID from the video URL
- `thumbnail` — place images in `/public/thumbnails/` and reference by filename

## Adding Your Portrait (About Page)

Replace the placeholder `<div className={styles.portrait} />` in `app/about/page.js`
with a Next.js `<Image>` component:

```jsx
import Image from 'next/image';
// ...
<Image src="/portrait.jpg" alt="Shane Ainsworth" fill className={styles.portraitImg} />
```

Place the image in `/public/portrait.jpg`.

## Deploying

Push to GitHub → Vercel auto-deploys on every commit.

To connect your domain `shaneainsworth.com`:
1. Go to your Vercel project → Settings → Domains
2. Add `shaneainsworth.com`
3. Update your DNS records as instructed by Vercel
