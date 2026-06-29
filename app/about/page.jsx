// ABOUT PAGE — save as: app/about/page.jsx
export const metadata = { title: "About — Yara Ibrahim" };

export default function About() {
  return (
    <main className="portfolio">
      <div className="wrap">
        <p className="eyebrow">About</p>
        <h1>Yara Ibrahim Anwar Ahmed</h1>
        <p className="lead">
          PhD researcher and engineer working where machine learning meets healthcare —
          speech, audio, and medical imaging.
        </p>

        <div className="prose">
          <p>
            I started in robotics engineering at Polytech Sorbonne and moved into machine
            learning through a Master&apos;s in Robotics and Intelligent Systems at Sorbonne
            University, which I completed with honors. Today I&apos;m a PhD researcher at ISIR
            (Sorbonne University), focused on speech and audio machine learning for healthcare.
          </p>
          <p>
            My research asks whether the way people speak can reveal disease — specifically,
            detecting minimal hepatic encephalopathy in patients with cirrhosis from voice alone.
            Alongside the modeling, I build the practical scaffolding that real clinical data
            needs: pipelines for cleaning and feature extraction, and tools that put results in
            clinicians&apos; hands.
          </p>
          <p>
            Before the PhD, I worked on medical image segmentation — training deep models for
            bile-duct MRI and building a 3D Slicer extension that streamlined the annotation
            workflow. I&apos;m also co-founder and CTO of Plunia, where I lead the technical side.
            [Add a line about what Plunia does.]
          </p>
          <p>
            [Optional: a sentence or two in your own voice — what draws you to this work, or
            something more personal. Delete this if you&apos;d rather keep it strictly professional.]
          </p>

          <h2 className="h2">Education</h2>
          <ul className="cv-list">
            <li><span>PhD, AI for Health — Sorbonne University / ISIR</span><span className="cv-year">2024 — present</span></li>
            <li><span>MSc, Robotics &amp; Intelligent Systems (with honors) — Sorbonne University</span><span className="cv-year">2024</span></li>
            <li><span>Engineering, Robotics — Polytech Sorbonne</span><span className="cv-year">2021</span></li>
          </ul>

          <h2 className="h2">Training</h2>
          <ul className="cv-list">
            <li><span>OxML — University of Oxford</span><span className="cv-year">2025</span></li>
            <li><span>NLP &amp; AI Summer School — Rabat</span><span className="cv-year">2025</span></li>
          </ul>

          <h2 className="h2">Skills</h2>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">PyTorch</span>
            <span className="tag">TensorFlow</span>
            <span className="tag">OpenCV</span>
            <span className="tag">wav2vec / HuBERT</span>
            <span className="tag">Audio signal processing</span>
            <span className="tag">Medical image segmentation</span>
            <span className="tag">3D Slicer</span>
            <span className="tag">Git</span>
          </div>

          <h2 className="h2">Languages</h2>
          <p className="meta-line">[French · English · add your languages here]</p>
        </div>

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
