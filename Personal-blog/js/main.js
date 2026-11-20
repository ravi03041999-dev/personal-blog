/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const escapeHTML = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const formatDate = (iso, opts = { year: "numeric", month: "short", day: "numeric" }) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", opts);

const readTime = (text) => Math.max(1, Math.round(text.split(/\s+/).length / 200)) + " min read";

const sortedPosts = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.2h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.3H4.3l13.3 17.3z"/></svg>',
  wp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM3.5 12c0-1.2.3-2.4.7-3.5l4 11A8.5 8.5 0 0 1 3.5 12zm8.5 8.5c-.8 0-1.6-.1-2.4-.3l2.6-7.4 2.6 7.2h.1c-.9.3-1.9.5-2.9.5zm1.2-12.5.9-.1c.4 0 .4-.7 0-.7 0 0-1.3.1-2.1.1l-2.1-.1c-.5 0-.5.7 0 .7l.8.1 1.2 3.4-1.7 5.2-2.9-8.6.9-.1c.4 0 .4-.7 0-.7l-2.3.1h-.4A8.5 8.5 0 0 1 18 5.9h-.1c-.8 0-1.4.7-1.4 1.5 0 .7.4 1.3.8 2 .3.6.7 1.3.7 2.4 0 .7-.3 1.6-.7 2.8l-.9 3-3.2-9.6zm3.4 11.4 2.6-7.5c.5-1.2.6-2.2.6-3.1l-.1-.9a8.5 8.5 0 0 1-3.1 11.5z"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 20.5 3.5z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 17 6-6-6-6M12 19h8"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M7 16l4-4 4 4 5-6"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A7 7 0 1 0 6 18.3"/><path d="M6 19h11.5"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
};

/* ==========================================================================
   Syntax highlighting (tiny, dependency-free)
   ========================================================================== */
const KEYWORDS = {
  js: "const let var function return if else for while of in new class extends import export from default async await try catch throw typeof",
  ts: "const let var function return if else for while of in new class extends import export from default async await try catch throw typeof type interface asserts is satisfies keyof",
  sql: "SELECT FROM WHERE ORDER BY DESC ASC LIMIT CREATE INDEX ON INSERT INTO VALUES UPDATE SET DELETE JOIN LEFT INNER AND OR NOT NULL IS EXPLAIN ANALYZE INCLUDE TABLE",
  bash: "git cd ls echo export sudo npm npx",
};

function highlight(code, lang) {
  const kw = new Set((KEYWORDS[lang] || KEYWORDS.js).split(" "));
  const comment = lang === "sql" ? "--[^\\n]*" : lang === "bash" ? "#[^\\n]*" : "\\/\\/[^\\n]*";
  const re = new RegExp(`(${comment})|("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\`(?:\\\\.|[^\`\\\\])*\`)|(\\b\\d+(?:\\.\\d+)?\\b)|([A-Za-z_$][\\w$]*)(?=\\s*\\()|([A-Za-z_$][\\w$]*)`, "g");
  let out = "", last = 0, m;
  while ((m = re.exec(code))) {
    out += escapeHTML(code.slice(last, m.index));
    const [tok, com, str, num, fn, word] = m;
    const e = escapeHTML(tok);
    if (com) out += `<span class="t-com">${e}</span>`;
    else if (str) out += `<span class="t-str">${e}</span>`;
    else if (num) out += `<span class="t-key">${e}</span>`;
    else if (fn) out += kw.has(fn) ? `<span class="t-kw">${e}</span>` : `<span class="t-fn">${e}</span>`;
    else if (word && kw.has(word)) out += `<span class="t-kw">${e}</span>`;
    else out += e;
    last = re.lastIndex;
  }
  return out + escapeHTML(code.slice(last));
}

/* ==========================================================================
   Minimal Markdown renderer
   ========================================================================== */
function inline(s) {
  return escapeHTML(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function renderMarkdown(md) {
  const codes = [];
  md = md.trim().replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    codes.push({ lang: lang || "text", code: code.replace(/\n$/, "") });
    return `\u0000${codes.length - 1}\u0000`;
  });

  return md
    .split(/\n{2,}/)
    .map((block) => {
      block = block.trim();
      const code = block.match(/^\u0000(\d+)\u0000$/);
      if (code) {
        const { lang, code: src } = codes[+code[1]];
        return `<div class="code-block"><div class="code-head"><span>${escapeHTML(lang)}</span><button class="copy-btn" type="button">copy</button></div><pre><code>${highlight(src, lang)}</code></pre></div>`;
      }
      if (block.startsWith("## ")) return `<h2>${inline(block.slice(3))}</h2>`;
      if (block.startsWith("> ")) return `<blockquote><p>${inline(block.replace(/^> ?/gm, ""))}</p></blockquote>`;
      if (/^- /.test(block)) {
        return `<ul>${block.split("\n").map((l) => `<li>${inline(l.replace(/^- /, ""))}</li>`).join("")}</ul>`;
      }
      return `<p>${inline(block.replace(/\n/g, " "))}</p>`;
    })
    .join("\n");
}

/* ==========================================================================
   Shared UI
   ========================================================================== */
function initTheme() {
  const btn = $("#theme-toggle");
  const apply = (t) => {
    document.documentElement.dataset.theme = t;
    if (btn) btn.innerHTML = t === "dark" ? ICONS.sun : ICONS.moon;
  };
  apply(document.documentElement.dataset.theme || "light");
  btn?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try { sessionStorage.setItem("theme", next); } catch {}
  });
}

function initNav() {
  const menu = $("#menu-btn");
  const links = $("#nav-links");
  if (menu && links) {
    menu.innerHTML = ICONS.menu;
    menu.addEventListener("click", () => links.classList.toggle("open"));
    $$("a", links).forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
  }
  // Hide the floating nav while scrolling down, bring it back on scroll up.
  const nav = $("#topbar");
  if (!nav) return;
  let last = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY;
    nav.classList.toggle("hide", y > last && y > 200 && !links?.classList.contains("open"));
    last = y;
  }, { passive: true });
}

function renderSocials() {
  $$("[data-socials]").forEach((el) => {
    const items = [
      [SITE.socials.linkedin, "LinkedIn"],
      [SITE.socials.github, "GitHub"],
      [SITE.socials.whatsapp, "WhatsApp"],
      [SITE.socials.x, "X"],
      [SITE.cv, "Résumé"],
      [`mailto:${SITE.email}`, "Email"],
    ];
    el.innerHTML = items
      .filter(([href]) => href)
      .map(([href, label]) => `<a href="${href}" target="_blank" rel="noopener">${label} ↗</a>`)
      .join("");
  });
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  $$("[data-name]").forEach((el) => (el.textContent = SITE.name));
  $$("[data-fullname]").forEach((el) => (el.textContent = SITE.fullName || SITE.name));
  $$("[data-role]").forEach((el) => (el.textContent = SITE.role));
  $$("[data-email-text]").forEach((el) => (el.textContent = SITE.email));
  const fab = $("#whatsapp-fab");
  if (fab) {
    if (SITE.socials.whatsapp) { fab.href = SITE.socials.whatsapp; fab.innerHTML = ICONS.whatsapp; }
    else fab.remove();
  }
}

function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("visible"));
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    }),
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((e) => io.observe(e));
}

/* Round custom cursor: a dot that tracks the pointer and a ring that eases after it.
   The ring grows over links and turns into a solid labelled bubble over [data-cursor]. */
function initCursor() {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  ring.setAttribute("aria-hidden", "true");
  ring.innerHTML = '<span class="cursor-label"></span>';
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  dot.setAttribute("aria-hidden", "true");
  document.body.append(ring, dot);
  const label = $(".cursor-label", ring);
  document.documentElement.classList.add("has-cursor");

  let mx = -100, my = -100, rx = -100, ry = -100;
  const place = (el, x, y) => (el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`);

  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    place(dot, mx, my);
    document.body.classList.add("cursor-on");
  }, { passive: true });
  document.addEventListener("pointerleave", () => document.body.classList.remove("cursor-on"));
  addEventListener("pointerdown", () => ring.classList.add("is-down"));
  addEventListener("pointerup", () => ring.classList.remove("is-down"));

  document.addEventListener("pointerover", (e) => {
    const view = e.target.closest("[data-cursor]");
    const link = e.target.closest("a, button, input, label");
    ring.classList.toggle("is-view", !!view);
    ring.classList.toggle("is-link", !view && !!link);
    dot.classList.toggle("is-hidden", !!view);
    label.textContent = view ? view.dataset.cursor : "";
  });

  const loop = () => {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    place(ring, rx, ry);
    requestAnimationFrame(loop);
  };
  loop();
}

function initClock() {
  const els = [$("#clock"), $("#hero-local")].filter(Boolean);
  if (!els.length) return;
  const tick = () => {
    const t = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kuala_Lumpur" });
    if ($("#clock")) $("#clock").textContent = t;
    if ($("#hero-local")) $("#hero-local").textContent = `${SITE.location} · ${t} MYT`;
  };
  tick();
  setInterval(tick, 15000);
}

function postItemHTML(p) {
  return `
    <a class="row" href="post.html?slug=${encodeURIComponent(p.slug)}">
      <span class="row-title">${escapeHTML(p.title)}</span>
      <span class="row-mid">${p.tags.map((t) => `#${escapeHTML(t)}`).join(" ")} · ${readTime(p.body)}</span>
      <span class="row-end">${formatDate(p.date)} ↗</span>
    </a>`;
}

function postCardHTML(p, i) {
  return `
    <a class="post-card reveal" style="--d:${i * 0.08}s" href="post.html?slug=${encodeURIComponent(p.slug)}">
      <span class="mono">${formatDate(p.date)} · ${readTime(p.body)}</span>
      <h3>${escapeHTML(p.title)}</h3>
      <p>${inline(p.excerpt)}</p>
      <span class="more"><span>${p.tags.map((t) => `#${escapeHTML(t)}`).join(" ")}</span><span>↗</span></span>
    </a>`;
}

const host = (url) => { try { return new URL(url).host.replace(/^www\./, ""); } catch { return url; } };

/* ==========================================================================
   Splash screen — progress follows real image/font loading, with a short minimum
   so it never just flashes. Resolves `splashDone` once the screen has lifted.
   ========================================================================== */
const splashDone = new Promise((resolve) => {
  const splash = document.getElementById("splash");
  if (!splash) return resolve();
  const fill = document.getElementById("splash-fill");
  const pct = document.getElementById("splash-pct");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MIN_MS = reduce ? 300 : 3000;
  const MAX_MS = 7000;
  const start = performance.now();

  let target = 0, shown = 0, loaded = false, typed = false, typedPct = 0;

  // Type out a little code snippet that "declares" me, with syntax colours.
  const code = document.getElementById("splash-code");
  const lines = [
    [["k", "const "], ["v", "developer"], ["p", " = {"]],
    [["p", "  name: "], ["s", '"Ravindran Genesan"'], ["p", ","]],
    [["p", "  role: "], ["s", '"Senior WordPress / Web Developer"'], ["p", ","]],
    [["p", "};"]],
  ];
  const total = lines.flat().reduce((n, [, t]) => n + t.length, 0) + lines.length - 1;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const renderCode = (count) => {
    let left = count, html = "";
    lines.forEach((line, i) => {
      if (i > 0) { if (left <= 0) return; left--; html += "\n"; }
      html += `<span class="ln">${i + 1}</span>`;
      for (const [cls, text] of line) {
        if (left <= 0) break;
        html += `<span class="${cls}">${esc(text.slice(0, left))}</span>`;
        left -= text.length;
      }
    });
    code.innerHTML = html + '<span class="splash-caret"></span>';
  };
  if (code) {
    if (reduce) { renderCode(total); typed = true; typedPct = 100; }
    else {
      let n = 0;
      renderCode(0);
      setTimeout(function typeNext() {
        n++;
        renderCode(n);
        typedPct = (n / total) * 100;
        if (n < total) setTimeout(typeNext, 22 + Math.random() * 26);
        else typed = true;
      }, 350);
    }
  } else { typed = true; typedPct = 100; }
  const track = () => {
    const imgs = [...document.images];
    const done = imgs.filter((i) => i.complete).length;
    target = Math.max(target, imgs.length ? (done / imgs.length) * 90 : 90);
  };
  document.addEventListener("DOMContentLoaded", track);
  addEventListener("load", () => { loaded = true; target = 100; });
  document.fonts?.ready.then(track);

  const tick = (now) => {
    const elapsed = now - start;
    track();
    // Fill smoothly over MIN_MS (ease-out), but never ahead of what has actually loaded.
    const t = Math.min(1, elapsed / MIN_MS);
    const timeCap = (1 - Math.pow(1 - t, 2.2)) * 100;
    const goal = Math.min(loaded ? 100 : target, timeCap, typedPct);
    shown += (goal - shown) * 0.12;
    if (loaded && t === 1 && shown > 99.5) shown = 100;
    if (elapsed > MAX_MS) shown = 100;
    fill.style.width = `${shown}%`;
    pct.textContent = `${Math.round(shown)}%`;
    if (shown < 100 || !typed) return requestAnimationFrame(tick);

    setTimeout(() => {
      splash.classList.add("done");
      document.body.classList.remove("is-loading");
      setTimeout(resolve, reduce ? 0 : 450);
      splash.addEventListener("transitionend", () => splash.classList.add("gone"), { once: true });
      setTimeout(() => splash.classList.add("gone"), 1200);
    }, 250);
  };
  requestAnimationFrame(tick);
});

/* ==========================================================================
   Home page
   ========================================================================== */
const FEATURED_COUNT = 6;

function initHome() {
  // Hero
  $("#hero-photo").src = SITE.photo;
  $("#tagline").textContent = SITE.tagline;
  $("#stats").innerHTML = SITE.stats.map((s) => `<div><strong>${s.value}</strong><span>${s.label}</span></div>`).join("");
  splashDone.then(() => $(".hero-title").classList.add("in"));

  // Ticker (duplicated for a seamless loop)
  const names = PROJECTS.map((p) => p.name.replace(/ (Sdn Bhd|Staging)$/, ""));
  const tick = names.map((n) => `<span class="ticker-item">${escapeHTML(n)}</span>`).join("");
  $("#ticker").innerHTML = tick + tick;
  const skills = Object.values(SITE.skills).flat().map((n) => `<span class="ticker-item">${escapeHTML(n)}</span>`).join("");
  $("#skills-ticker").innerHTML = skills + skills;

  // Featured — stacking cards
  const featured = PROJECTS.slice(0, FEATURED_COUNT);
  $("#stack").innerHTML = featured.map((p, i) => `
    <article class="stack-card" style="--i:${i}">
      <div class="stack-info">
        <div class="stack-meta"><span>${String(i + 1).padStart(2, "0")} / ${String(featured.length).padStart(2, "0")}</span><span>${escapeHTML(p.type)}</span></div>
        <h3 class="stack-name">${escapeHTML(p.name)}</h3>
        <p class="stack-desc">${escapeHTML(p.description)}</p>
        <div class="pills">${p.tags.map((t) => `<span class="pill">${escapeHTML(t)}</span>`).join("")}</div>
        <a class="btn btn-outline" href="${p.demo}" target="_blank" rel="noopener">Visit site ↗</a>
      </div>
      <a class="browser" href="${p.demo}" target="_blank" rel="noopener" data-cursor="View">
        <div class="browser-bar"><i></i><i></i><i></i><span>${escapeHTML(host(p.demo))}</span></div>
        <img src="${p.image}" alt="${escapeHTML(p.name)} website" loading="lazy" />
      </a>
    </article>`).join("");

  // More projects — list + floating preview
  const rest = PROJECTS.slice(FEATURED_COUNT);
  $("#more-count").textContent = `${rest.length} more`;
  $("#more-list").innerHTML = rest.map((p, i) => `
    <a class="list-row" href="${p.demo}" target="_blank" rel="noopener" data-img="${p.image}">
      <span class="idx">${String(FEATURED_COUNT + i + 1).padStart(2, "0")}</span>
      <span class="name">${escapeHTML(p.name)}</span>
      <span class="meta">${escapeHTML(p.type)} · ${escapeHTML(p.tags.join(", "))}</span>
      <span class="go">↗</span>
    </a>`).join("");
  initHoverPreview();

  // Services bento
  const chips = Object.values(SITE.skills).flat().slice(0, 8);
  const cards = SITE.services.map((s, i) => `
    <div class="bento-card reveal${s.big ? " bento-card--big" : ""}" style="--d:${i * 0.06}s">
      <span class="ico">${ICONS[s.icon] || ICONS.code}</span>
      <h3>${escapeHTML(s.title)}</h3>
      <p>${escapeHTML(s.text)}</p>
      ${s.big ? `<div class="chips">${chips.map((c) => `<span class="chip">${escapeHTML(c)}</span>`).join("")}</div>` : ""}
    </div>`);
  const stat = `
    <div class="bento-card bento-card--stat reveal">
      <strong>${PROJECTS.length}<span>+</span></strong>
      <p>websites &amp; web apps delivered for clients in Malaysia, Singapore and Australia.</p>
    </div>`;
  cards.splice(3, 0, stat);
  $("#bento").innerHTML = cards.join("");

  // Experience + education timeline
  const items = [
    ...SITE.experience.map((j) => ({ ...j, edu: false })),
    ...SITE.education.map((j) => ({ ...j, edu: true })),
  ];
  $("#timeline").innerHTML = items.map((j) => `
    <div class="t-item reveal${j.edu ? " edu" : ""}">
      <div class="t-head"><h3>${escapeHTML(j.title)}</h3><span class="t-when">${escapeHTML(j.period)}</span></div>
      <p class="t-org">${escapeHTML(j.org)}</p>
      <ul>${j.points.map((pt) => `<li>${escapeHTML(pt)}</li>`).join("")}</ul>
    </div>`).join("");
  $("#cv-link").href = SITE.cv;
  initTimelineFill();

  // About
  $("#about-photo").src = SITE.photo;
  $("#about-photo").alt = SITE.fullName;
  $("#about-text").innerHTML = SITE.about.map((p) => `<p>${p}</p>`).join("");
  $("#skill-chips").innerHTML = Object.values(SITE.skills).flat().map((s) => `<span class="chip">${escapeHTML(s)}</span>`).join("");

  // FAQ accordion
  $("#faq-list").innerHTML = SITE.faq.map(([q, a], i) => `
    <div class="faq${i === 0 ? " open" : ""}">
      <button class="faq-q" type="button" aria-expanded="${i === 0}"><span>${escapeHTML(q)}</span><span class="plus">+</span></button>
      <div class="faq-a"><div><p>${escapeHTML(a)}</p></div></div>
    </div>`).join("");
  $("#faq-list").addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const open = btn.parentElement.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });

  // Blog
  $("#latest-posts").innerHTML = sortedPosts().slice(0, 3).map(postCardHTML).join("");

  // Contact
  $("#cta-whatsapp").href = SITE.socials.whatsapp;
  $("#cta-linkedin").href = SITE.socials.linkedin;
  const copy = $("#copy-email");
  copy.addEventListener("click", async () => {
    const tag = $("small", copy);
    try { await navigator.clipboard.writeText(SITE.email); tag.textContent = "copied!"; }
    catch { location.href = `mailto:${SITE.email}`; }
    setTimeout(() => (tag.textContent = "copy"), 1600);
  });
}

function initHoverPreview() {
  const box = $("#hover-preview");
  const img = $("img", box);
  if (!box || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
  const loop = () => {
    cx += (x - cx) * 0.14;
    cy += (y - cy) * 0.14;
    box.style.transform = `translate(${cx + 28}px, ${cy - 100}px) rotate(${(x - cx) * 0.04}deg)`;
    raf = requestAnimationFrame(loop);
  };
  $$("#more-list .list-row").forEach((row) => {
    row.addEventListener("pointerenter", (e) => {
      img.src = row.dataset.img;
      if (!box.classList.contains("on")) { cx = x = e.clientX; cy = y = e.clientY; }
      box.classList.add("on");
      if (!raf) loop();
    });
    row.addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; });
    row.addEventListener("pointerleave", () => {
      box.classList.remove("on");
      setTimeout(() => { if (!box.classList.contains("on")) { cancelAnimationFrame(raf); raf = 0; } }, 300);
    });
  });
}

function initTimelineFill() {
  const tl = $("#timeline");
  const update = () => {
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
    tl.style.setProperty("--fill", `${p * 100}%`);
  };
  addEventListener("scroll", update, { passive: true });
  update();
}

/* ==========================================================================
   Blog index
   ========================================================================== */
function initBlog() {
  const list = $("#post-list");
  const input = $("#search");
  const tagWrap = $("#tag-filter");
  const allTags = [...new Set(POSTS.flatMap((p) => p.tags))].sort();
  let activeTag = new URLSearchParams(location.search).get("tag") || "";

  tagWrap.innerHTML = ["all", ...allTags]
    .map((t) => `<button class="tag" type="button" data-tag="${t === "all" ? "" : t}">${t === "all" ? "all" : "#" + t}</button>`)
    .join("");

  const render = () => {
    const q = input.value.trim().toLowerCase();
    const posts = sortedPosts().filter((p) =>
      (!activeTag || p.tags.includes(activeTag)) &&
      (!q || [p.title, p.excerpt, p.tags.join(" ")].join(" ").toLowerCase().includes(q))
    );
    $$("button", tagWrap).forEach((b) => b.classList.toggle("active", b.dataset.tag === activeTag));
    $("#post-count").textContent = `${posts.length} post${posts.length === 1 ? "" : "s"}`;
    list.innerHTML = posts.length
      ? posts.map(postItemHTML).join("")
      : `<div class="empty">grep: no posts match "${escapeHTML(q || activeTag)}"</div>`;
  };

  tagWrap.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    activeTag = b.dataset.tag;
    render();
  });
  input.addEventListener("input", render);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); }
  });
  render();
}

/* ==========================================================================
   Single post
   ========================================================================== */
function initPost() {
  const posts = sortedPosts();
  const slug = new URLSearchParams(location.search).get("slug");
  const idx = posts.findIndex((p) => p.slug === slug);
  const post = posts[idx];

  if (!post) {
    $("#post-title").textContent = "404: post not found";
    $("#post-body").innerHTML = `<p>That post doesn't exist (yet). <a href="blog.html">Browse all posts →</a></p>`;
    return;
  }

  document.title = `${post.title} — ${SITE.name}`;
  $("#post-title").textContent = post.title;
  $("#post-meta").innerHTML = `
    <span>${formatDate(post.date, { year: "numeric", month: "long", day: "numeric" })}</span>
    <span>·</span>
    <span>${readTime(post.body)}</span>
    <span class="tags" style="margin:0">${post.tags.map((t) => `<a class="tag" href="blog.html?tag=${encodeURIComponent(t)}">#${escapeHTML(t)}</a>`).join("")}</span>`;
  $("#post-body").innerHTML = renderMarkdown(post.body);

  const newer = posts[idx - 1], older = posts[idx + 1];
  $("#article-nav").innerHTML =
    (older ? `<a class="prev" href="post.html?slug=${older.slug}"><small>← older</small>${escapeHTML(older.title)}</a>` : "") +
    (newer ? `<a class="next" href="post.html?slug=${newer.slug}"><small>newer →</small>${escapeHTML(newer.title)}</a>` : "");

  $("#post-body").addEventListener("click", async (e) => {
    const btn = e.target.closest(".copy-btn");
    if (!btn) return;
    const text = btn.closest(".code-block").querySelector("code").innerText;
    try { await navigator.clipboard.writeText(text); btn.textContent = "copied!"; }
    catch { btn.textContent = "failed"; }
    setTimeout(() => (btn.textContent = "copy"), 1500);
  });

  const bar = $(".progress");
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 || 0}%`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   Extra motion — scroll progress, word-by-word titles, count-up numbers,
   magnetic buttons and a cursor spotlight on cards. All skipped for reduced motion.
   ========================================================================== */
function initMotion() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Scroll progress bar along the top edge
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.append(bar);
  let ticking = false;
  const progress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(progress); } }, { passive: true });
  progress();

  // Section titles: wrap each word so it can slide up out of a mask, like the hero
  $$(".sec-title, .cta-title").forEach((title) => {
    let n = 0;
    const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.append(part);
        const w = document.createElement("span");
        w.className = "w";
        w.innerHTML = `<span style="--wd:${n++ * 0.07}s">${escapeHTML(part)}</span>`;
        frag.append(w);
      });
      node.replaceWith(frag);
    });
    title.classList.add("split-words");
  });
  const titleIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("words-in"); titleIO.unobserve(e.target); }
  }), { threshold: 0.3 });
  $$(".split-words").forEach((t) => titleIO.observe(t));

  // Count-up numbers: "30++" counts to 30 and keeps its suffix; non-numeric values are left alone
  const countUp = (el) => {
    const node = [...el.childNodes].find((c) => c.nodeType === 3 && /^\d+/.test(c.textContent.trim()));
    if (!node) return;
    const [, num, suffix] = node.textContent.trim().match(/^(\d+)(.*)$/);
    const end = +num, start = performance.now(), dur = 1400;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      node.textContent = Math.round(end * (1 - Math.pow(1 - t, 3))) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    node.textContent = "0" + suffix;
    requestAnimationFrame(step);
  };
  const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { countIO.unobserve(e.target); splashDone.then(() => countUp(e.target)); }
  }), { threshold: 0.6 });
  $$(".hero-stats strong, .bento-card--stat strong").forEach((el) => countIO.observe(el));

  // Marquee bands: drift on their own, speed up while scrolling, flip direction on scroll up
  const tracks = $$(".ticker-track").map((el) => {
    el.classList.add("js-marquee");
    const t = { el, x: 0, dir: el.closest(".ticker--alt") ? 1 : -1, paused: false };
    el.parentElement.addEventListener("pointerenter", () => (t.paused = true));
    el.parentElement.addEventListener("pointerleave", () => (t.paused = false));
    return t;
  });
  if (tracks.length) {
    let lastY = scrollY, lastT = performance.now(), boost = 0, sign = 1;
    const run = (now) => {
      const dt = Math.min(3, (now - lastT) / 16.7);
      const dy = scrollY - lastY;
      lastT = now; lastY = scrollY;
      if (dy) sign = dy < 0 ? -1 : 1;
      boost += (Math.min(60, Math.abs(dy)) * 0.3 - boost) * 0.08;
      tracks.forEach((t) => {
        const half = t.el.scrollWidth / 2;
        if (!half || t.paused) return;
        t.x += (0.6 + boost) * t.dir * sign * dt;
        if (t.x <= -half) t.x += half;
        if (t.x > 0) t.x -= half;
        t.el.style.transform = `translate3d(${t.x}px, 0, 0)`;
      });
      requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }

  // Floating shapes: each bobs on its own loop, and drifts with the mouse and scroll by its depth.
  // [content, class, top, left %, depth, bob duration s, delay s, start rotation deg]
  const FLOATERS = {
    ".hero": [
      ["&lt;/&gt;", "chip", "20%", 74, 26, 6.5, 0, -8],
      [ICONS.wp, "wp", "44%", 88, 40, 8, 0.6, 0],
      ["{ }", "chip", "76%", 58, 18, 7.2, 1.2, 6],
      ["", "ring", "13%", 52, 12, 9, 0.3, 0],
      ["", "ring ring--dash", "62%", 89, 30, 10, 0.9, 0],
      ["+", "glyph", "58%", 44, 22, 5.5, 0.4, 0],
      ["✦", "glyph glyph--star", "32%", 64, 34, 6, 1.6, 0],
      ["", "dot", "17%", 36, 14, 5, 0.8, 0],
      ["#", "chip chip--sm", "9%", 90, 20, 7.8, 2, 10],
    ],
    "#work": [
      ["&lt;div&gt;", "chip", "100px", 82, 28, 7, 0, 6],
      ["", "ring ring--dash", "90px", 66, 18, 9.5, 1, 0],
      ["✦", "glyph glyph--star", "250px", 92, 34, 6, 0.5, 0],
      ["+", "glyph", "60px", 94, 16, 5.8, 1.4, 0],
    ],
    "#services": [
      ["&lt;?php", "chip", "120px", 82, 30, 7.4, 0.3, -6],
      [ICONS.wp, "wp", "40px", 64, 22, 8.5, 1.1, 0],
      ["", "ring", "250px", 93, 16, 9, 0.6, 0],
      ["", "dot", "210px", 70, 12, 5, 0, 0],
    ],
    "#experience": [
      ["", "ring ring--dash", "48%", 6, 26, 10, 0, 0],
      ["✦", "glyph glyph--star", "62%", 26, 34, 6.4, 1.2, 0],
      ["+", "glyph", "78%", 10, 20, 5.6, 0.4, 0],
      ["", "dot", "88%", 30, 14, 5, 2, 0],
    ],
    "#about": [
      ["npm run dev", "chip chip--sm", "6%", 30, 24, 7, 0.4, -5],
      ["", "ring ring--dash", "82%", 2, 30, 10, 1.2, 0],
      ["✦", "glyph glyph--star", "4%", 2, 36, 6, 0, 0],
      ["", "dot", "94%", 40, 14, 5.2, 0.8, 0],
    ],
    "#faq": [
      ["?", "glyph glyph--big", "58%", 14, 30, 6.8, 0, -10],
      ["", "ring", "64%", 28, 18, 9, 0.7, 0],
      ["✦", "glyph glyph--star", "80%", 6, 34, 6, 1.5, 0],
    ],
    "#writing": [
      ["/* blog */", "chip chip--sm", "30px", 52, 22, 7.2, 0.2, 4],
      ["", "ring ring--dash", "0px", 74, 30, 10, 1, 0],
      ["+", "glyph", "90px", 40, 16, 5.6, 0.6, 0],
    ],
  };
  const layers = [];
  Object.entries(FLOATERS).forEach(([sel, shapes]) => {
    const host = $(sel);
    if (!host) return;
    const layer = document.createElement("div");
    layer.className = "floaters";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = shapes.map(([html, cls, top, left, depth, dur, delay, rot], i) => `
      <span class="floater" style="top:${top};left:${left}%;--depth:${depth};--i:${i}">
        <span class="floater-${cls.split(" ")[0]} ${cls.split(" ").slice(1).join(" ")}" style="--dur:${dur}s;--delay:${-delay}s;--r0:${rot}deg">${html}</span>
      </span>`).join("");
    host.classList.add("has-floaters");
    host.prepend(layer);
    layers.push({ layer, host, hero: sel === ".hero" });
  });
  // Hero shapes appear after the splash; the rest pop in as their section scrolls into view
  const floatIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); floatIO.unobserve(e.target); }
  }), { threshold: 0.15 });
  layers.forEach(({ layer, hero }) => (hero ? splashDone.then(() => layer.classList.add("in")) : floatIO.observe(layer)));

  // Rising sparkles inside the contact card
  const cta = $(".cta");
  if (cta) {
    const sparks = document.createElement("div");
    sparks.className = "sparks";
    sparks.setAttribute("aria-hidden", "true");
    sparks.innerHTML = Array.from({ length: 16 }, (_, i) => {
      const size = 3 + Math.random() * 6;
      return `<i style="left:${(i / 16) * 100 + Math.random() * 5}%;width:${size}px;height:${size}px;--dur:${7 + Math.random() * 7}s;--delay:${-Math.random() * 14}s;--drift:${(Math.random() - 0.5) * 120}px"></i>`;
    }).join("");
    ($(".cta-orb", cta) || cta.firstChild).after(sparks);
  }

  if (layers.length) {
    let px = 0, py = 0, cx = 0, cy = 0;
    if (finePointer) addEventListener("pointermove", (e) => {
      px = e.clientX / innerWidth - 0.5;
      py = e.clientY / innerHeight - 0.5;
    }, { passive: true });
    const root = document.documentElement;
    const drift = () => {
      cx += (px - cx) * 0.06;
      cy += (py - cy) * 0.06;
      root.style.setProperty("--px", cx.toFixed(4));
      root.style.setProperty("--py", cy.toFixed(4));
      layers.forEach(({ layer, host, hero }) => {
        const r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) return;
        // Hero: offset from the top of the page. Sections: offset from the middle of the screen.
        const sy = hero ? -r.top : innerHeight / 2 - (r.top + r.height / 2);
        layer.style.setProperty("--sy", sy.toFixed(0));
      });
      requestAnimationFrame(drift);
    };
    drift();
  }

  if (!finePointer) return;

  // Magnetic buttons: lean toward the cursor, spring back on leave
  $$(".btn, .icon-btn, .spin-badge").forEach((el) => {
    el.classList.add("magnetic");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.translate = `${x}px ${y}px`;
    });
    el.addEventListener("pointerleave", () => (el.style.translate = ""));
  });

  // Cursor spotlight on cards
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".bento-card, .post-card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });
}

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  renderSocials();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "blog") initBlog();
  if (page === "post") initPost();
  initReveal();
  initMotion();
  initCursor();
  initClock();
});
