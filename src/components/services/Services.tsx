"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineCheck, HiOutlineEnvelope } from "react-icons/hi2";
import { CONTACT, SERVICES } from "../../constants";

const Services = () => {
	const enquiry = (title: string) =>
		`mailto:${CONTACT.email}?subject=${encodeURIComponent(
			`Enquiry: ${title}`
		)}&body=${encodeURIComponent(
			"Hi Oluwakemi,\n\nI'd like to talk about QA for my product.\n\nProduct / link:\nWhat we need:\nTimeline:\n"
		)}`;

	return (
		<section id="services" className="scroll-mt-16 py-24">
			<motion.span
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="font-sans text-sm uppercase tracking-[0.3em] text-coral"
			>
				Services
			</motion.span>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -20 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mt-4 text-5xl font-medium text-forest sm:text-6xl"
			>
				Hire me for your <span className="text-coral">product.</span>
			</motion.h2>
			<p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-forest-light">
				I help startups and product teams ship software that works the
				first time. Every engagement is fixed-price and agreed upfront
				after a free 15-minute call.
			</p>

			<div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
				{SERVICES.map((service, index) => (
					<motion.article
						key={service.title}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 30 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						className="flex flex-col rounded-3xl border border-forest/10 bg-forest p-8 text-cream"
					>
						<span className="font-sans text-sm text-cream/40">
							{String(index + 1).padStart(2, "0")}
						</span>
						<h3 className="mt-3 text-3xl leading-tight">{service.title}</h3>
						<p className="mt-4 font-sans text-base leading-relaxed text-cream/70">
							{service.summary}
						</p>

						<ul className="mt-6 space-y-3 font-sans text-sm text-cream/85">
							{service.includes.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<HiOutlineCheck className="mt-0.5 flex-shrink-0 text-coral" />
									<span>{item}</span>
								</li>
							))}
						</ul>

						<div className="mt-auto pt-8">
						<dl className="space-y-4 border-t border-cream/10 pt-6">
							<div>
								<dt className="font-sans text-xs uppercase tracking-[0.2em] text-cream/40">
									Delivery
								</dt>
								<dd className="mt-1 text-lg text-coral">{service.delivery}</dd>
							</div>
							<div>
								<dt className="font-sans text-xs uppercase tracking-[0.2em] text-cream/40">
									Best for
								</dt>
								<dd className="mt-1 font-sans text-sm text-cream/80">
									{service.bestFor}
								</dd>
							</div>
						</dl>

						<a
							href={enquiry(service.title)}
							className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-coral px-5 py-2.5 font-sans text-sm text-cream transition-colors hover:bg-coral-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
						>
							<HiOutlineEnvelope className="text-base" />
							Get a quote
						</a>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
};

export default Services;
