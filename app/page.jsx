// Save this as: src/app/page.tsx  (replace everything currently in that file)
// Fonts load automatically from Google Fonts. The Seasons is used if you've
// activated it via Adobe Fonts; otherwise it falls back to Playfair Display.

export default function Home() {
  return (
    <main className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Pinyon+Script&display=swap');

        /* ============================================================
           COLOR IDENTITY — your palette. Edit these to reskin.
           ============================================================ */
        .portfolio {
          --bg:     #4D342D;  /* mahogany brown    */
          --ink:    #EDE7DB;  /* egg shell text    */
          --accent: #9B9879;  /* olive green links */
          --soft:   #6A6A53;  /* moss highlight    */
          --line:   #6B4F45;  /* warm brown rule   */
          --muted:  color-mix(in srgb, var(--ink) 58%, var(--bg)); /* soft text */

          background: var(--bg);
          color: var(--ink);
          font-family: "EB Garamond", Georgia, serif;
          font-size: 18px;
          line-height: 1.65;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .wrap { max-width: 660px; margin: 0 auto; padding: 120px 28px 96px; }

        /* --- display type: The Seasons, falling back to Playfair Display --- */
        .portfolio h1 {
          font-family: "The Seasons", "Playfair Display", Georgia, serif;
          font-weight: 500;
          font-size: clamp(46px, 9vw, 76px);
          letter-spacing: -0.005em;
          line-height: 1.02;
          margin: 0 0 14px;
        }
        .role {
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 0 0 30px;
        }
        .intro { font-size: 21px; max-width: 50ch; margin: 0 0 36px; }
        .swipe {
          background: linear-gradient(transparent 60%, color-mix(in srgb, var(--soft) 60%, transparent) 60%);
          padding: 0 3px;
        }

        /* --- links --- */
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

        /* --- sections --- */
        .section { margin-top: 74px; }
        .eyebrow {
          font-family: "The Seasons", "Playfair Display", Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 22px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .about p { margin: 0 0 16px; max-width: 56ch; }

        .entry { margin-bottom: 22px; }
        .entry-top { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
        .entry-title { font-weight: 500; }
        .entry-year { color: var(--muted); font-size: 15px; white-space: nowrap; }
        .entry-sub { color: var(--muted); }

        .pub { margin-bottom: 20px; }
        .pub .venue { color: var(--muted); font-style: italic; }

        .proj { margin-bottom: 24px; }
        .proj-name { font-weight: 500; margin-bottom: 2px; }
        .proj-desc { color: var(--muted); font-size: 17px; max-width: 54ch; }

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
        .sign {
          font-family: "Pinyon Script", cursive;
          font-size: 34px;
          color: var(--accent);
          line-height: 1;
        }

        /* --- entrance --- */
        .portfolio .wrap > * { animation: rise 0.6s ease both; }
        .portfolio .wrap > *:nth-child(2) { animation-delay: 0.05s; }
        .portfolio .wrap > *:nth-child(3) { animation-delay: 0.1s; }
        @keyframes rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .portfolio .wrap > * { animation: none; } }

        @media (max-width: 480px) { .wrap { padding-top: 84px; } }
      `}</style>

      <div className="wrap">
        {/* ---------------- HERO ---------------- */}
        <header>
          <h1>Yara</h1>
          <p className="role">Researcher · Engineer · Paris</p>
          <p className="intro">
            I&apos;m a researcher and engineer working on{" "}
            <span className="swipe">[your research area]</span> — building [the
            kind of systems you build] and turning them into things people can
            actually use.
          </p>
          <nav className="links">
            <a href="mailto:[you@email.com]">Email</a>
            <a href="https://linkedin.com/in/[handle]">LinkedIn</a>
            <a href="https://github.com/[handle]">GitHub</a>
            <a href="https://scholar.google.com/[id]">Scholar</a>
          </nav>
        </header>

        {/* ---------------- BACKGROUND ---------------- */}
        <section className="section about">
          <p className="eyebrow">Background</p>
          <p>
            [Two or three sentences on who you are and what your work sits at
            the intersection of. Plain — what you do, where, and why it matters.]
          </p>
          <div style={{ marginTop: 28 }}>
            <div className="entry">
              <div className="entry-top">
                <span className="entry-title">[PhD candidate / your role]</span>
                <span className="entry-year">2023 — present</span>
              </div>
              <div className="entry-sub">[Lab / University]</div>
            </div>
            <div className="entry">
              <div className="entry-top">
                <span className="entry-title">[MSc — Subject]</span>
                <span className="entry-year">2022</span>
              </div>
              <div className="entry-sub">[University]</div>
            </div>
            <div className="entry">
              <div className="entry-top">
                <span className="entry-title">[BSc — Subject]</span>
                <span className="entry-year">2020</span>
              </div>
              <div className="entry-sub">[University]</div>
            </div>
          </div>
        </section>

        {/* ---------------- RESEARCH & PUBLICATIONS ---------------- */}
        <section className="section">
          <p className="eyebrow">Research &amp; Publications</p>
          <div className="pub">
            [Paper title goes here]. <span className="venue">[Venue / Journal]</span>, 2025.{" "}
            <a href="#">PDF</a>
          </div>
          <div className="pub">
            [Second paper title]. <span className="venue">[Venue / Workshop]</span>, 2024.{" "}
            <a href="#">PDF</a>
          </div>
        </section>

        {/* ---------------- PROJECTS ---------------- */}
        <section className="section">
          <p className="eyebrow">Projects</p>
          <div className="proj">
            <div className="proj-name">[Project name] · <a href="#">view</a></div>
            <div className="proj-desc">[One line on what it is and what you did. Specific beats clever.]</div>
          </div>
          <div className="proj">
            <div className="proj-name">[Project name] · <a href="#">view</a></div>
            <div className="proj-desc">[One line on what it is and what you did.]</div>
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
