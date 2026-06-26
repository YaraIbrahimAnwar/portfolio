// Save this as: src/app/page.tsx  (replace everything currently in that file)
//
// TO ADD A PROJECT IMAGE: drop a screenshot into the `public/` folder
// (e.g. public/project1.png), then inside a .project-media below replace
// the <span> placeholder with:   <img src="/project1.png" alt="..." />

export default function Home() {
  return (
    <main className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Pinyon+Script&display=swap');

        /* ============================================================
           COLOR IDENTITY — if you already changed these five lines,
           paste your version back over them.
           ============================================================ */
        .portfolio {
          --bg:     #EDE7DB;  /* Egg Shell — background      */
          --ink:    #4D342D;  /* Mahogany  — primary text    */
          --accent: #6A6A53;  /* Moss      — links & labels  */
          --soft:   #9B9879;  /* Olive     — highlight swipe */
          --line:   #DDCCB7;  /* Linen     — dividers        */
          --muted:  color-mix(in srgb, var(--ink) 58%, var(--bg));
          --card:   color-mix(in srgb, var(--line) 45%, var(--bg));

          background: var(--bg);
          color: var(--ink);
          font-family: "EB Garamond", Georgia, serif;
          font-size: 18px;
          line-height: 1.65;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .wrap { max-width: 820px; margin: 0 auto; padding: 110px 28px 96px; }

        .portfolio h1 {
          font-family: "The Seasons", "Playfair Display", Georgia, serif;
          font-weight: 500;
          font-size: clamp(46px, 9vw, 78px);
          letter-spacing: -0.005em;
          line-height: 1.02;
          margin: 0 0 14px;
        }
        .role {
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 0 0 28px;
        }
        .intro { font-size: 22px; max-width: 50ch; margin: 0 0 34px; }
        .swipe {
          background: linear-gradient(transparent 60%, color-mix(in srgb, var(--soft) 60%, transparent) 60%);
          padding: 0 3px;
        }

        .links { display: flex; flex-wrap: wrap; gap: 24px; }
        .portfolio a {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          padding-bottom: 1px;
          transition: border-color 0.15s ease;
        }
        .portfolio a:hover { border-color: var(--accent); }
        .portfolio a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        /* --- section headers --- */
        .section { margin-top: 80px; }
        .eyebrow {
          font-family: "The Seasons", "Playfair Display", Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 28px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }

        /* --- projects (the centerpiece) --- */
        .project { margin-bottom: 60px; }
        .project-media {
          position: relative;
          aspect-ratio: 16 / 10;
          background:
            radial-gradient(120% 120% at 30% 20%, color-mix(in srgb, var(--soft) 30%, var(--card)), var(--card));
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project.featured .project-media { aspect-ratio: 16 / 9; }
        .project-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .media-label {
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .project-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 6px;
        }
        .project-title {
          font-family: "The Seasons", "Playfair Display", Georgia, serif;
          font-size: 24px;
          font-weight: 500;
        }
        .project.featured .project-title { font-size: 30px; }
        .project-meta { color: var(--muted); font-size: 14px; white-space: nowrap; }
        .project-desc { max-width: 60ch; margin-bottom: 10px; }
        .project-links { display: flex; gap: 18px; font-size: 16px; }

        /* --- about (condensed, no CV list) --- */
        .about p { max-width: 60ch; margin: 0 0 14px; }
        .about .meta-line { color: var(--muted); font-size: 16px; }

        /* --- publications (light, secondary) --- */
        .pub { margin-bottom: 16px; font-size: 17px; }
        .pub .venue { color: var(--muted); font-style: italic; }

        .footer {
          margin-top: 84px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          flex-wrap: wrap;
        }
        .sign { font-family: "Pinyon Script", cursive; font-size: 34px; color: var(--accent); line-height: 1; }

        .portfolio .wrap > * { animation: rise 0.6s ease both; }
        .portfolio .wrap > *:nth-child(2) { animation-delay: 0.05s; }
        @keyframes rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .portfolio .wrap > * { animation: none; } }

        @media (max-width: 600px) {
          .wrap { padding-top: 80px; }
          .project-head { flex-direction: column; gap: 2px; }
          .project-meta { white-space: normal; }
        }
      `}</style>

      <div className="wrap">
        {/* ---------------- HERO ---------------- */}
        <header>
          <h1>Yara</h1>
          <p className="role">Researcher · Engineer · Paris</p>
          <p className="intro">
            I build <span className="swipe">[the kind of systems you build]</span>{" "}
            — [one line on what your work does and who it&apos;s for. Make it concrete.]
          </p>
          <nav className="links">
            <a href="mailto:[you@email.com]">Email</a>
            <a href="https://linkedin.com/in/[handle]">LinkedIn</a>
            <a href="https://github.com/[handle]">GitHub</a>
            <a href="https://scholar.google.com/[id]">Scholar</a>
          </nav>
        </header>

        {/* ---------------- SELECTED WORK ---------------- */}
        <section className="section">
          <p className="eyebrow">Selected Work</p>

          <div className="project featured">
            <div className="project-media">
              <span className="media-label">[ add screenshot ]</span>
            </div>
            <div className="project-head">
              <span className="project-title">[Featured project name]</span>
              <span className="project-meta">[Your role] · 2025 · [Tools]</span>
            </div>
            <p className="project-desc">
              [Two sentences: what it is, the problem it solves, and what you
              actually built. Lead with the outcome, not the tech.]
            </p>
            <div className="project-links">
              <a href="#">Live</a>
              <a href="#">Code</a>
              <a href="#">Paper</a>
            </div>
          </div>

          <div className="project">
            <div className="project-media">
              <span className="media-label">[ add screenshot ]</span>
            </div>
            <div className="project-head">
              <span className="project-title">[Project name]</span>
              <span className="project-meta">[Your role] · 2024 · [Tools]</span>
            </div>
            <p className="project-desc">[One or two lines on what it is and what you did.]</p>
            <div className="project-links">
              <a href="#">Live</a>
              <a href="#">Code</a>
            </div>
          </div>

          <div className="project">
            <div className="project-media">
              <span className="media-label">[ add screenshot ]</span>
            </div>
            <div className="project-head">
              <span className="project-title">[Project name]</span>
              <span className="project-meta">[Your role] · 2023 · [Tools]</span>
            </div>
            <p className="project-desc">[One or two lines on what it is and what you did.]</p>
            <div className="project-links">
              <a href="#">Code</a>
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT (condensed) ---------------- */}
        <section className="section about">
          <p className="eyebrow">About</p>
          <p>
            [Two or three sentences on who you are and what your work sits at the
            intersection of. Plain — what you do and why it matters.]
          </p>
          <p className="meta-line">
            Currently [role] at [Lab / Company]. Previously [one prior thing].
            [BSc / MSc / PhD] — [universities].
          </p>
        </section>

        {/* ---------------- SELECTED PUBLICATIONS ---------------- */}
        <section className="section">
          <p className="eyebrow">Selected Publications</p>
          <div className="pub">
            [Paper title]. <span className="venue">[Venue]</span>, 2025. <a href="#">PDF</a>
          </div>
          <div className="pub">
            [Second paper title]. <span className="venue">[Venue]</span>, 2024. <a href="#">PDF</a>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <span>
            Reach me at <a href="mailto:[you@email.com]">[you@email.com]</a> or on{" "}
            <a href="https://linkedin.com/in/[handle]">LinkedIn</a>.
          </span>
          <span className="sign">Yara</span>
        </footer>
      </div>
    </main>
  );
}
