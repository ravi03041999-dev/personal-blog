# ~/ravin.dev

A developer‑style portfolio + blog. Plain HTML, CSS and vanilla JS — no build step, no dependencies.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .        # or: python3 -m http.server
```

## Make it yours

Everything lives in **`js/data.js`**:

- `SITE` — name, role, tagline, about text, skills, experience, education, FAQ, hero client names, email, phone and social links
- `PROJECTS` — portfolio entries (name, type, screenshot in `assets/projects/`, live link, tags, description)
- `POSTS` — blog posts written in a small Markdown subset (`##`, lists, `>` quotes, ``` code fences, `inline`, **bold**, links)

Add a post by adding an object to `POSTS`; it appears on the home page, the blog index and at `post.html?slug=<slug>`.

## Structure

```
index.html   home: hero, intro, client list, work grid, skills, experience, about, FAQ, latest posts, contact
blog.html    all posts with search ("/" to focus) and tag filters
post.html    single post: syntax highlighting, copy buttons, reading progress
css/style.css
js/data.js   your content
js/main.js   rendering, theme toggle, animations
```

## Deploy

It's static, so drag the folder onto Netlify, or push to GitHub Pages, Vercel or Cloudflare Pages.
