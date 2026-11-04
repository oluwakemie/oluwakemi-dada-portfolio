"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import {
	HiOutlineEnvelope,
	HiOutlinePhone,
	HiOutlineMapPin,
	HiOutlineArrowDownTray,
} from "react-icons/hi2";
import { CONTACT, SOCIALS } from "../../constants";

const CHANNELS = [
	{
		label: "Email",
		value: CONTACT.email,
		href: `mailto:${CONTACT.email}`,
		icon: HiOutlineEnvelope,
	},
	{
		label: "Phone",
		value: CONTACT.phoneNo,
		href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}`,
		icon: HiOutlinePhone,
	},
	{
		label: "WhatsApp",
		value: "Chat with me",
		href: `https://wa.me/${CONTACT.phoneNo.replace(/\D/g, "")}`,
		icon: FaWhatsapp,
	},
	{
		label: "LinkedIn",
		value: "oluwakemiesther",
		href: SOCIALS.linkedin,
		icon: FaLinkedin,
	},
	{
		label: "GitHub",
		value: "oluwakemie",
		href: SOCIALS.github,
		icon: FaGithub,
	},
	{
		label: "Location",
		value: CONTACT.location,
		href: undefined,
		icon: HiOutlineMapPin,
	},
];

const Contact = () => {
	const reduce = useReducedMotion();

	return (
		<section id="contact" className="scroll-mt-16 py-24">
			<div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -30 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="font-sans text-sm uppercase tracking-[0.3em] text-coral">
						Contact
					</span>
					<h2 className="mt-4 text-5xl font-medium leading-tight text-forest sm:text-6xl">
						Let&rsquo;s work{" "}
						<span className="text-coral">together.</span>
					</h2>
					<p className="mt-6 max-w-md text-xl font-light leading-relaxed text-forest-light sm:text-2xl">
						Open to QA Engineer roles (remote, hybrid or on-site,
						anywhere in the world) and freelance QA projects.
					</p>

					<div className="mt-9 flex flex-wrap items-center gap-5">
						<a
							href={`mailto:${CONTACT.email}`}
							className="flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-base font-medium text-cream transition-colors hover:bg-coral-dark"
						>
							<HiOutlineEnvelope className="text-lg" />
							Email me
						</a>
						<a
							href="/Oluwakemi-Dada-QA-Resume.pdf"
							download
							className="flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3 text-base text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
						>
							<HiOutlineArrowDownTray className="text-lg" />
							Download CV
						</a>
					</div>
				</motion.div>

				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 30 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="overflow-hidden rounded-2xl border border-forest/10 bg-forest shadow-xl"
				>
					<div className="flex items-center gap-4 border-b border-cream/10 px-5 py-3.5">
						<div className="flex gap-2">
							<span className="h-3 w-3 rounded-full bg-coral" />
							<span className="h-3 w-3 rounded-full bg-sage-dark" />
							<span className="h-3 w-3 rounded-full bg-cream/30" />
						</div>
						<p className="font-mono text-xs text-cream/50">
							oluwakemi@portfolio: ~/contact
						</p>
					</div>

					<div className="px-6 py-6 font-mono text-sm">
						<p className="text-cream/70">
							<span className="text-coral">$</span> connect --with
							oluwakemi
						</p>
						<p className="mt-1 flex items-center gap-1 text-cream/40">
							# resolving channels
							<motion.span
								className="ml-1 inline-block h-3.5 w-2 bg-cream/50"
								animate={
									reduce
										? undefined
										: { opacity: [1, 1, 0, 0] }
								}
								transition={{
									duration: 1,
									repeat: Infinity,
									ease: "linear",
								}}
							/>
						</p>

						<ul className="mt-6 divide-y divide-cream/10 border-t border-cream/10">
							{CHANNELS.map((channel) => {
								const Row: keyof JSX.IntrinsicElements =
									channel.href ? "a" : "div";
								return (
									<li key={channel.label}>
										<Row
											{...(channel.href
												? {
														href: channel.href,
														target: channel.href.startsWith(
															"http",
														)
															? "_blank"
															: undefined,
														rel: channel.href.startsWith(
															"http",
														)
															? "noopener noreferrer"
															: undefined,
													}
												: {})}
											className={`flex items-center justify-between gap-4 py-4 text-cream transition-colors ${
												channel.href
													? "hover:text-coral"
													: ""
											}`}
										>
											<span className="flex items-center gap-3 text-cream/70">
												<channel.icon className="text-base" />
												{channel.label}
											</span>
											<span className="truncate text-cream">
												{channel.value}
											</span>
										</Row>
									</li>
								);
							})}
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
