// HOME PAGE — save as: app/page.jsx (replace everything)
import Link from "next/link";

export const metadata = {
  title: "Yara Ibrahim Anwar Ahmed",
  description: "PhD researcher and engineer building machine-learning systems for healthcare.",
};

export default function Home() {
  return (
    <main className="portfolio">
      <div className="wrap">
        {/* ---------------- HERO ---------------- */}
        <header>
          <h1>Yara</h1>
          <p className="role">PhD Researcher · Co-founder &amp; CTO · Paris</p>
          <p className="intro">
            I build machine-learning systems for healthcare — from{" "}
            <span className="swipe">voice biomarkers that detect disease</span> to
            medical-imaging tools clinicians can actually use.
          </p>
          <nav className="links">
            <a href="mailto:yara.ibrahim_anwar_ahmed@sorbonne-universite.fr">Email</a>
            <a href="https://www.linkedin.com/in/yara-ibrahim-anwar-ahmed/">LinkedIn</a>
            <a href="https://github.com/YaraIbrahimAnwar">GitHub</a>
          </nav>
        </header>

        {/* ---------------- SELECTED WORK ---------------- */}
        <section className="section">
          <p className="eyebrow">Selected Work</p>

          {/* PhD */}
          <div className="project featured">
            <Link href="/phd" className="media-link">
              <div className="project-media"><span className="media-label">[ spectrogram / pipeline ]</span></div>
            </Link>
            <div className="project-head">
              <Link href="/phd" className="project-title-link">Voice biomarkers for liver disease</Link>
              <span className="project-meta">PhD research · 2024–present</span>
            </div>
            <p className="project-desc">
              Detecting minimal hepatic encephalopathy in cirrhotic patients from voice alone.
              I built the full audio pipeline and an ML baseline reaching 80% accuracy on real clinical recordings.
            </p>
            <div className="project-links"><Link href="/phd">View project →</Link></div>
          </div>

          {/* Computer Vision internship */}
          <div className="project">
            <Link href="/vision" className="media-link">
              <div className="project-media"><span className="media-label">[ add screenshot ]</span></div>
            </Link>
            <div className="project-head">
              <Link href="/vision" className="project-title-link">Bile-duct MRI segmentation</Link>
              <span className="project-meta">Research internship · 2024</span>
            </div>
            <p className="project-desc">
              A hybrid Residual U-Net reaching 0.98 Dice on MRI. I built a 689-image annotated dataset
              and a 3D Slicer extension that cut out manual contour validation.
            </p>
            <div className="project-links"><Link href="/vision">View project →</Link></div>
          </div>

          {/* Plunia */}
          <div className="project">
            <Link href="/plunia" className="media-link">
              <div className="project-media"><span className="media-label">[ add screenshot ]</span></div>
            </Link>
            <div className="project-head">
              <Link href="/plunia" className="project-title-link">Plunia</Link>
              <span className="project-meta">Co-founder &amp; CTO · 2024–present</span>
            </div>
            <p className="project-desc">
              [One line on what Plunia builds — fill this in.] I lead the technical side as co-founder and CTO.
            </p>
            <div className="project-links"><Link href="/plunia">View project →</Link></div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section className="section about">
          <p className="eyebrow">About</p>
          <p>
            I&apos;m a PhD researcher at Sorbonne University (ISIR) working on speech and audio
            machine learning for healthcare, with a background in robotics engineering. I move
            between research and building — from clinical ML pipelines to a deeptech startup.
          </p>
          <p className="meta-line">
            Currently PhD in AI for Health, Sorbonne / ISIR. Previously MSc Robotics &amp; Intelligent
            Systems (Sorbonne, with honors) and Robotics Engineering at Polytech Sorbonne.
            Training: OxML 2025 (Oxford), NLP &amp; AI Summer School (Rabat).
          </p>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <span>
            Reach me at{" "}
            <a href="mailto:yara.ibrahim_anwar_ahmed@sorbonne-universite.fr">email</a> or on{" "}
            <a href="https://www.linkedin.com/in/yara-ibrahim-anwar-ahmed/">LinkedIn</a>.
          </span>
          <span className="sign">Yara</span>
        </footer>
      </div>
    </main>
  );
}
