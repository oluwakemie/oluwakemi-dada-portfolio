import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.oluwakemidada.com"),
	title: "Oluwakemi Dada | QA Engineer - Playwright, Automation & API Testing",
	description:
		"Oluwakemi Dada is a QA Engineer with 4+ years delivering end-to-end product quality across web, mobile, and API layers, specializing in Playwright automation, API testing, and regression strategy. Based in Lagos, Nigeria, open to remote and global opportunities.",
	openGraph: {
		title: "Oluwakemi Dada | QA Engineer - Playwright, Automation & API Testing",
		description:
			"QA Engineer with 4+ years delivering end-to-end product quality across web, mobile, and API layers. Open to remote and global opportunities.",
		type: "website",
		url: "https://www.oluwakemidada.com/",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Oluwakemi Dada, QA Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oluwakemi Dada | QA Engineer",
		images: ["/og-image.jpg"],
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
	themeColor: "#f7f9f2",
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Oluwakemi Dada",
	url: "https://www.oluwakemidada.com",
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
				<div className="overflow-x-clip text-forest antialiased selection:bg-coral/25 selection:text-forest">
					<div className="fixed top-0 -z-10 h-full w-full bg-cream">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_0%,rgba(228,234,217,0.9),rgba(247,249,242,0)),radial-gradient(ellipse_60%_50%_at_100%_20%,rgba(221,90,53,0.08),rgba(247,249,242,0))]" />
					</div>
					<div className="container mx-auto px-8 md:px-16">
						<Navbar />
						{children}
						<footer className="flex flex-wrap items-center justify-between gap-4 border-t border-forest/10 py-10 font-sans text-sm text-forest-muted">
							<p>
								&copy; {new Date().getFullYear()} Oluwakemi Dada
							</p>
							<p>Built with inspiration from Ladybug 🐞</p>
						</footer>
					</div>
				</div>
			</body>
		</html>
	);
}
