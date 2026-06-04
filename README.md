# AI Ads Creator Portfolio

Premium animated React portfolio for a freelance AI Ads Creator and Short-Form Video Editor.

## Run

```bash
npm install
npm run dev
```

Build for deployment:

```bash
npm run build
```

## Update Content

Most editable portfolio content lives in:

```text
src/data/portfolioData.js
```

Update this file to replace:

- name, email, phone, Upwork URL
- service/category cards
- portfolio projects
- testimonials
- tools
- work process steps
- selling points

Main reusable components live in:

```text
src/components/Button.jsx
src/components/Card.jsx
src/components/Section.jsx
```

The contact links and page layout live in:

```text
src/App.jsx
```

## Add Real Portfolio Videos

Put your thumbnail images and short video files in:

```text
public/portfolio/
```

Example files:

```text
public/portfolio/cash-next-thumbnail.jpg
public/portfolio/cash-next-video.mp4
```

Then open:

```text
src/data/portfolioData.js
```

Add or update a project like this:

```js
{
  title: "Cash Next Product Videos",
  category: "Product Ads",
  niche: "Product Video Ads",
  description: "Short description of the project.",
  tools: ["CapCut", "Premiere Pro"],
  result: "What the video was made to achieve.",
  thumbnailUrl: "/portfolio/cash-next-thumbnail.jpg",
  videoUrl: "/portfolio/cash-next-video.mp4"
}
```

If your video is on Google Drive, YouTube, Vimeo, or Upwork, use that link in `videoUrl` instead.

## Edit From Website Admin

This project includes a CMS admin page:

```text
/admin
```

For real online editing, deploy the GitHub repo to Netlify, then enable:

- Netlify Identity
- Git Gateway

After that, open:

```text
https://your-site-name.netlify.app/admin
```

You can edit profile details, portfolio items, reviews, stats, skills, and upload thumbnail files from the website UI. The CMS saves changes back to GitHub automatically.

## Custom Supabase Admin

This project also supports a custom admin dashboard:

```text
/admin-login
/admin-dashboard
```

Supabase setup:

1. Open Supabase project.
2. Go to `SQL Editor`.
3. Paste and run the contents of `supabase-setup.sql`.
4. Go to `Project Settings > API`.
5. Copy `Project URL` and `anon public` key.
6. Add these variables in Netlify `Site configuration > Environment variables`:

```text
VITE_SUPABASE_URL=https://lheuyymjpykkwwmulmwn.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

7. Go to Supabase `Authentication > Users`.
8. Create your admin user email/password.
9. Redeploy Netlify.
10. Open `/admin-login`.

The admin dashboard saves portfolio content to Supabase and uploads thumbnails to Supabase Storage.

## Push To GitHub

After creating an empty GitHub repository, use:

```bash
git init
git add .
git commit -m "Create AI ads portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```
