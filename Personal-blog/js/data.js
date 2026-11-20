/* ==========================================================================
   Site content — edit this file to make the site yours.
   Posts are written in a small Markdown subset:
   ## headings, paragraphs, - lists, > quotes, ```lang code fences```,
   `inline code`, **bold**, *italic* and [links](https://example.com).
   ========================================================================== */

const SITE = {
  name: "Ravin",
  fullName: "Ravindran Genesan",
  handle: "ravin.dev",
  role: "Senior WordPress / Web Developer",
  tagline: "A Senior WordPress / Web Developer specialized in building clean, responsive, and user-friendly websites, web applications, and digital experiences.",
  roles: ["WordPress websites.", "headless Next.js sites.", "responsive web apps.", "clean UI/UX.", "digital experiences."],
  location: "Malaysia",
  email: "ravi03041999@gmail.com",
  phone: "+6018 986 4035",
  cv: "assets/Resume.pdf",
  photo: "assets/profile.jpg",
  socials: {
    github: "",
    linkedin: "https://www.linkedin.com/in/ravindran-genesan-06180a255",
    whatsapp: "https://api.whatsapp.com/send/?phone=60189864035",
    x: "",
  },
  about: [
    "I'm a self-motivated and detail-oriented web developer with a strong foundation in <strong>HTML, CSS, JavaScript and WordPress</strong>. I have hands-on experience in designing and developing websites that are not only visually appealing but also <strong>optimized for performance and accessibility</strong>.",
    "My goal is to continuously grow as a developer while helping clients bring their visions to life through modern web solutions.",
  ],
  stats: [
    { value: "3+", label: "years in web dev" },
    { value: "30++", label: "sites delivered" },
    { value: "BSc", label: "UTeM graduate" },
  ],
  skills: {
    web: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "PHP", "Laravel (basic)", "Responsive design"],
    cms: ["WordPress development", "Headless WordPress", "Plugin customization", "Woocommerce", "Theme Customization", "Page builders", "Drupal (basic)", "Magento (basic)"],
    design: ["UI/UX", "Figma", "Photoshop", "Canva"],
    ops: ["cPanel", "Domain & DNS", "Hosting", "Git & GitHub", "Vercel", "Cloudflare", "Cloudways"],
    growth: ["On-page & technical SEO", "Search Console", "Google Analytics", "Google Tag Manager"],
    quality: ["Bug fixing", "Testing", "Debugging"],
  },
  services: [
    { title: "WordPress development", text: "Custom themes, page builds, plugin customization and full redesigns — sites clients can actually manage.", icon: "wp", big: true },
    { title: "Headless WordPress", text: "Next.js and React front-ends powered by the WordPress REST API — much faster pages, same familiar dashboard for editors.", icon: "code" },
    { title: "UI/UX design", text: "Layouts and prototypes in Figma, Photoshop and Canva, designed mobile-first.", icon: "pen" },
    { title: "SEO & analytics", text: "On-page and technical SEO with Search Console and Google Analytics.", icon: "chart" },
    { title: "Domains, hosting & email", text: "cPanel, DNS setup, hosting support and business email configuration.", icon: "cloud" },
    { title: "Care & maintenance", text: "Monthly updates, backups, bug fixing and testing to keep sites healthy.", icon: "shield" },
    { title: "PHP & Laravel", text: "Custom features and small web apps — like a Laravel + MySQL academic system.", icon: "code" },
  ],
  // Big statement in the hero — the client names are pulled from PROJECTS below.
  heroClients: ["KWAP", "CUCKOO Singapore", "Sincere Healthcare Group", "Austin Consulting Suites", "Makan Time"],
  faq: [
    ["Who is Ravin?",
      "Ravindran Genesan (Ravin) is a Malaysian Senior WordPress / Web Developer. He builds clean, responsive and user-friendly websites, web applications and digital experiences, with a strong foundation in HTML, CSS, JavaScript and WordPress."],
    ["Where is Ravin based?",
      "Ravin is based in Malaysia and works with clients locally and abroad. Austin Consulting Suites in Heidelberg, Australia is one example."],
    ["What kind of web work does Ravin do?",
      "WordPress design and development, plugin customization, domain/DNS setup, hosting support, email configuration, on-page and technical SEO, and monthly maintenance to keep client sites running smoothly."],
    ["Where has Ravin worked?",
      "Ravin is a Senior WordPress / Web Developer at Orangesoft Sdn Bhd (since Mar 2026). Before that he was a Senior WordPress / Web Developer at Textstation Design Sdn Bhd (Feb 2024 – Jan 2026), and interned as a Web Developer at MHNexus Sdn Bhd, working on responsive healthcare pages and medical portals."],
    ["What technologies does Ravin use?",
      "HTML5, CSS3, JavaScript, React, Next.js, PHP, WordPress (including headless WordPress) and basic Laravel, with Figma, Photoshop and Canva for UI/UX. He also uses cPanel, Git & GitHub, Google Search Console and Google Analytics."],
    ["What is Ravin's education?",
      "A Bachelor of Computer Science (Software Development) from Universiti Teknikal Malaysia Melaka (UTeM), and a Diploma in Information Technology and Communication from Politeknik Balik Pulau, Penang."],
    ["Can Ravin take on freelance projects?",
      "Yes. Ravin is open to freelance work, full-time roles and collaboration. Enquiries go to ravi03041999@gmail.com or WhatsApp +60 18 986 4035."],
  ],
  experience: [
    {
      title: "Senior WordPress / Web Developer",
      org: "Orangesoft Sdn Bhd",
      period: "Mar 2026 – Present",
      points: [
        "Developing and maintaining WordPress websites for Orangesoft's clients.",
        "Building headless WordPress sites with Next.js and React, deployed on Vercel — including a headless rebuild of CUCKOO Singapore.",
      ],
    },
    {
      title: "Senior WordPress / Web Developer",
      org: "Textstation Design Sdn Bhd",
      period: "Feb 2024 – Jan 2026",
      points: [
        "Designed and managed WordPress-based websites, including domain/DNS setup, SEO, and email configuration.",
        "Customized plugins, provided hosting support, and performed monthly maintenance updates to ensure smooth client website operations.",
      ],
    },
    {
      title: "Internship – Web Developer",
      org: "MHNexus Sdn Bhd",
      period: "Mar 2023 – Sept 2023",
      points: [
        "Assisted in developing responsive healthcare web pages and translating medical content.",
        "Contributed to bug fixing, testing, and ensuring quality assurance for new features and medical portals.",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Science (Software Development)",
      org: "Universiti Teknikal Malaysia Melaka (UTeM)",
      period: "Oct 2020 – Nov 2023",
      points: [
        "Specialized in software engineering, web development, project management, and application security.",
        "Final Year Project: developed an Academic System using Laravel and MySQL.",
      ],
    },
    {
      title: "Diploma in Information Technology and Communication",
      org: "Politeknik Balik Pulau, Penang",
      period: "Dec 2017 – Nov 2019",
      points: [
        "Recognized on the Dean's List for one semester, demonstrating academic excellence.",
        "Developed strong foundations in programming, networking, and multimedia systems.",
      ],
    },
  ],
};

const PROJECTS = [
  ["CUCKOO Singapore (Headless)", "Headless WordPress", "cuckoo-headless", "https://cuckoosg-headless.okie.my/", ["Next.js", "React", "Headless WP"],
    "A headless rebuild of the CUCKOO Singapore site: WordPress stays as the CMS while a Next.js + React front-end, deployed on Vercel, renders the product catalogue, promotions, services and store locator for much faster page loads."],
  ["Orangesoft Headless WordPress", "Headless WordPress", "headless-wp", "https://headlesswordpress.os.my/", ["Next.js", "React", "Landing page"],
    "The landing page for Orangesoft's headless WordPress service — \u201cSame WordPress. 10\u00d7 Faster.\u201d Built in Next.js, it compares traditional vs. headless WordPress on speed, security and scalability, with a live demo and a free site-audit form."],
  ["KWAP", "Website", "kwap", "https://www.kwap.gov.my/", ["Government", "Pension fund"],
    "The official website of KWAP (Kumpulan Wang Persaraan), Malaysia's public-sector pension fund. A large bilingual (BM/EN) corporate site covering governance, investments, retirement services for pensioners, contributions and media releases."],
  ["CUCKOO Singapore", "Website", "cuckoo", "https://cuckoo.sg/", ["E-commerce", "Consumer brand"],
    "The Singapore site for CUCKOO, South Korea's No. 1 home appliance brand. A product-heavy catalogue of water purifiers, multicookers, air purifiers and mattresses, with promotions, services and a store locator."],
  ["Sincere Healthcare Group", "Website", "sincere", "https://sincerehealthcaregroup.com/", ["Healthcare", "Singapore"],
    "A Singapore specialist healthcare group covering O&G, fertility, andrology, general and colorectal surgery. Features specialist services, doctor profiles, health screening and IVF packages, and appointment booking."],
  ["Austin Consulting Suites", "Website", "austin", "https://austinconsultingsuites.com.au/", ["WordPress", "Healthcare"],
    "A modern, medical-focused site presenting a multidisciplinary private practice opposite Austin Hospital (Heidelberg VIC), including endocrinology, nephrology, women's health, colorectal surgery, and diabetes education. Clean layout with professional team profiles and appointment information."],
  ["Kapvin Constructions Sdn Bhd", "Website", "kapvin", "https://www.kapvin.com.my/", ["Corporate", "Construction"],
    "A corporate online presence for Kapvin Constructions, highlighting civil construction services, past projects, capabilities, and engineer credentials with modern aesthetics."],
  ["Learning Object 1", "Web App", "LO1", "https://tsdesign.com.my/LO1-Draft-2/", ["E-learning", "SCORM"],
    "An educational interactive web app using reusable learning modules (\u201clearning objects\u201d) based on IEEE SCORM principles. Includes structured metadata, assessments, and modular content delivery."],
  ["Makan Time", "Website", "makantime", "https://www.makan-time.com/", ["F&B", "Catering"],
    "A vibrant site for Makan Time, a KL-based food outsourcing and central kitchen service. Features ready-to-eat blast-frozen meals, corporate catering, tailored menu options, and halal-certified kitchen operations."],
  ["Petscorner", "Website", "PC", "https://petscorner.com.my/", ["WooCommerce", "E-commerce"],
    "The WordPress + WooCommerce site for Pets Corner, a Malaysian pet food and products distributor since 1978. Customers can browse pet treats, foods, supplements, litter, hygiene and bedding by species, with brand pages, training and wellness programmes, an academy, insights and an online shop."],
  ["KOPRIMAS", "Website", "koprimas", "https://koprimas.com.my/", ["WordPress", "Cooperative"],
    "The official site for KOPRIMAS (Koperasi Perdana Nasional Malaysia Berhad), a national cooperative founded by young Malaysians to improve members' socio-economic standing. A bilingual (BM/EN) WordPress site covering the cooperative's background, how cooperatives work, its services, FAQs and contact details."],
  ["Primus Wellness", "Website", "primus", "https://primuswellness.com.my/", ["WordPress", "Social enterprise"],
    "A WordPress site for Primus Wellness, a Malaysian social enterprise that launched natural herbal products and a micro-entrepreneurship programme during the 2020 lockdown. Covers its social mission, moringa-based products, business opportunities and wellness resources, and links to its online store."],
  ["Demo Wedding Invitation", "Web App", "wedding", "https://tsdesign.com.my/wedding-demo/", ["RSVP", "Microsite"],
    "A digital wedding invitation platform demo with RSVP features, event details, photo gallery, and responsive layout suitable for hosting and sharing wedding microsites."],
  ["Kuchai Sentral – QR Code System", "Web App", "kuchai-sentral", "https://tsdesign.com.my/demo-qr2/", ["PHP", "MySQL", "QR system"],
    "A database-driven QR web app for Kuchai Sentral. A resident enters their block number, and the app generates a unique QR code that opens menu.php?unique_id=… — that page reads the ID from the URL and pulls the matching record from the MySQL database. Each code locks to the first device that scans it; any other device is redirected to an \u201cunavailable\u201d page."],
].map(([name, type, img, demo, tags, description]) => ({
  name, type, description, demo, tags,
  image: `assets/projects/${img}.jpg`,
}));

const POSTS = [
  {
    slug: "zero-build-blog",
    title: "Why I built my blog with zero build step",
    date: "2026-10-02",
    tags: ["web", "simplicity"],
    excerpt: "Frameworks are great, but sometimes the fastest, most durable stack is plain HTML, CSS and a sprinkle of JavaScript.",
    body: `
Every couple of years I rewrite my personal site in whatever framework I'm excited about. This time I tried something different: **no build step at all**.

## The constraints

I gave myself three rules:

- It must open by double‑clicking \`index.html\`.
- No dependencies, no \`node_modules\`.
- Writing a post should take one edit to one file.

## Rendering posts without a bundler

Posts live in a plain JavaScript array. A tiny Markdown renderer turns them into HTML on the client:

\`\`\`js
function render(md) {
  return md
    .split(/\\n{2,}/)
    .map((block) => block.startsWith("## ")
      ? \`<h2>\${block.slice(3)}</h2>\`
      : \`<p>\${block}</p>\`)
    .join("");
}
\`\`\`

> The best code is the code you never have to upgrade.

## What I'd change

If the post count grows into the hundreds I'll move to static generation. Until then, this setup is fast, portable, and genuinely fun to maintain.
`,
  },
  {
    slug: "typescript-narrowing",
    title: "TypeScript narrowing patterns I use every day",
    date: "2026-09-18",
    tags: ["typescript", "patterns"],
    excerpt: "Discriminated unions, assertion functions and the `satisfies` operator — a practical tour with real examples.",
    body: `
Type narrowing is how TypeScript turns a broad type into a specific one inside a block of code. Mastering it removes most of the \`as\` casts from a codebase.

## Discriminated unions

Give every variant a literal \`kind\` field and let the compiler do the rest:

\`\`\`ts
type Result =
  | { kind: "ok"; data: string }
  | { kind: "error"; message: string };

function handle(r: Result) {
  if (r.kind === "ok") {
    return r.data.toUpperCase(); // r is narrowed here
  }
  return console.error(r.message);
}
\`\`\`

## Assertion functions

When validation lives in a helper, an assertion signature carries the narrowing back to the caller:

\`\`\`ts
function assertDefined<T>(v: T): asserts v is NonNullable<T> {
  if (v == null) throw new Error("Expected value");
}
\`\`\`

## The satisfies operator

\`satisfies\` checks a value against a type **without widening it**, so you keep the precise literal types for later narrowing.
`,
  },
  {
    slug: "postgres-indexes",
    title: "A practical guide to Postgres indexes",
    date: "2026-08-27",
    tags: ["databases", "performance"],
    excerpt: "B‑tree, GIN, partial and covering indexes — when to reach for each, and how to prove they help with EXPLAIN.",
    body: `
Most slow queries I've debugged came down to a missing or misused index. Here's the mental model I use.

## Start with EXPLAIN ANALYZE

Never guess. Measure first:

\`\`\`sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 42
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

If you see a **Seq Scan** on a large table, that's your cue.

## Composite indexes follow your query

Column order matters. Put equality filters first, then the sort column:

\`\`\`sql
CREATE INDEX orders_customer_created_idx
  ON orders (customer_id, created_at DESC);
\`\`\`

## Partial indexes

If you only ever query active rows, only index active rows. Smaller index, faster writes.

- Use \`WHERE deleted_at IS NULL\` for soft‑deleted tables.
- Use \`INCLUDE\` columns for index‑only scans.
`,
  },
  {
    slug: "shipping-side-projects",
    title: "How I actually finish side projects",
    date: "2026-07-30",
    tags: ["career", "productivity"],
    excerpt: "Scope ruthlessly, ship ugly, and write the README first. A short field guide to getting things out the door.",
    body: `
I have a graveyard of half‑finished repos. Over time I found a few habits that changed my completion rate dramatically.

## Write the README first

If you can't describe the project in three sentences and one code sample, it's not ready to build. The README becomes your spec.

## Cut scope until it hurts

List every feature, then delete half. Then delete half again. **Version one should be embarrassing.**

## Ship on a fixed date

Pick a date two weeks out and publish whatever exists. A shipped small thing beats a perfect unshipped thing every time.

> Done is a feature.
`,
  },
  {
    slug: "git-tricks",
    title: "Git commands that saved my week",
    date: "2026-06-11",
    tags: ["git", "tooling"],
    excerpt: "From `git bisect` to `git worktree`, the less‑known commands I now reach for constantly.",
    body: `
Git has a huge surface area. These are the commands that earn their keep in my day‑to‑day.

## git bisect

Binary‑search your history to find the commit that introduced a bug:

\`\`\`bash
git bisect start
git bisect bad            # current commit is broken
git bisect good v1.4.0    # this tag was fine
# test, then mark good/bad until git finds the culprit
git bisect reset
\`\`\`

## git worktree

Check out another branch in a separate folder without stashing:

\`\`\`bash
git worktree add ../hotfix main
\`\`\`

## git commit --fixup

Pair it with \`git rebase --autosquash\` to keep a clean history while still committing small fixes as you go.
`,
  },
];
