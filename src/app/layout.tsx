import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Oluwakemi Dada | QA Engineer — Playwright, Automation & API Testing",
  description:
    "Oluwakemi Dada is a QA Engineer with 4+ years delivering end-to-end product quality across web, mobile, and API layers — specializing in Playwright automation, API testing, and regression strategy. Based in Lagos, Nigeria, open to remote and global opportunities.",
  openGraph: {
    title: "Oluwakemi Dada | QA Engineer — Playwright, Automation & API Testing",
    description:
      "QA Engineer with 4+ years delivering end-to-end product quality across web, mobile, and API layers. Open to remote and global opportunities.",
    type: "website",
    url: "https://kemmiy-portfolio.vercel.app/",
    images: ["https://kemmiy-portfolio.vercel.app/kemi.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oluwakemi Dada",
  url: "https://kemmiy-portfolio.vercel.app",
  jobTitle: "QA Engineer",
  knowsAbout: [
    "Playwright",
    "Cypress",
    "API Testing",
    "Postman",
    "Manual Testing",
    "Regression Testing",
    "CI/CD Testing",
    "Agile / Scrum",
  ],
  sameAs: [
    "https://www.linkedin.com/in/oluwakemiesther/",
    "https://github.com/oluwakemie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-gold/40 selection:text-white">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(201,168,105,0.16),rgba(255,255,255,0))]"></div>{" "}
          </div>{" "}
          <div className="container mx-auto px-8">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
