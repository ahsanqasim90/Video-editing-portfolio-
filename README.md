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

This project includes a custom admin page:

```text
/admin
/admin-login
/admin-dashboard
```

Deploy the GitHub repo to Vercel and add these environment variables in
`Project Settings > Environment Variables`:

```text
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/video_editing_portfolio
MONGODB_DB=video_editing_portfolio
ADMIN_EMAIL=sanqasim205@gmail.com
ADMIN_PASSWORD=your-secure-admin-password
ADMIN_SECRET=your-random-secret-for-login-tokens
```

After that, redeploy Vercel and open:

```text
https://your-site.vercel.app/admin
```

You can edit profile details, portfolio items, reviews, stats, skills, video links,
and thumbnail images from the website UI. The dashboard saves portfolio content to
MongoDB. Small uploaded thumbnails are stored as data URLs inside the saved content;
for larger media, paste Google Drive, YouTube, Vimeo, or image URLs.

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
