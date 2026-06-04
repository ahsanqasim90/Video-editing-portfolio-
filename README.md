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
