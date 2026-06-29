// ROOT LAYOUT — save as: app/layout.tsx (replace everything)
// The header here appears on every page automatically.
import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Yara Ibrahim Anwar Ahmed",
  description: "PhD researcher and engineer building machine-learning systems for healthcare.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand">Yara</Link>
            <nav className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
