import type { Metadata, Viewport } from "next";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oluwakemi | QA Engineer Portfolio",
  description:
    "Oluwakemi is a QA Engineer specializing in Web, Mobile, API and Security Testing. View portfolio, projects and testing experience.",
  openGraph: {
    title: "Oluwakemi | QA Engineer Portfolio",
    description: "QA Engineer specializing in Web, Mobile, API and Security Testing.",
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
  name: "Oluwakemi",
  url: "https://kemmiy-portfolio.vercel.app",
  jobTitle: "QA Engineer",
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
        <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>{" "}
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
