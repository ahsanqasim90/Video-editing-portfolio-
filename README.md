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
