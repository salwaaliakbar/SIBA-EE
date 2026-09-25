import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Globe, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import Reveal from "../components/shared/reveal.jsx";

const contactSchema = Yup.object({
	fullName: Yup.string().trim().min(2, "Please enter your full name.").required("Full name is required."),
	email: Yup.string().email("Enter a valid email address.").required("Email address is required."),
	subject: Yup.string().trim().min(3, "Subject is too short.").required("Subject is required."),
	message: Yup.string().trim().min(10, "Message must be at least 10 characters.").required("Message is required."),
});

const initialValues = { fullName: "", email: "", subject: "", message: "" };

function FieldError({ name }) {
	return <ErrorMessage name={name} component="p" className="mt-1.5 text-xs font-medium text-red-600" />;
}

export default function ContactUs() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
				<div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
					<Reveal className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Department of Electrical Engineering</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Contact us</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">Have a question about our programs, department, or admissions? Send us a message and our team will get back to you.</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
				<div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
					<Reveal className="relative overflow-hidden bg-[#071f47] p-7 text-white sm:p-9">
						<div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />
						<div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full border border-amber-300/10" />
						<div className="relative">
							<div className="flex h-12 w-12 items-center justify-center bg-amber-400 text-[#071f47]"><MessageSquare size={24} strokeWidth={1.8} /></div>
							<p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Get in touch</p>
							<h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Let&apos;s start a conversation.</h2>
							<p className="mt-5 text-sm leading-7 text-blue-100/75">Visit, call, or email the department office. We are here to help you find the right information.</p>
							<div className="mt-10 space-y-6 text-sm text-blue-100/80">
								<div className="flex gap-4"><MapPin className="mt-0.5 shrink-0 text-amber-300" size={20} strokeWidth={1.8} /><p>ETO Office, AB-3, Sukkur IBA University, Sukkur, Sindh, Pakistan</p></div>
								<div className="flex items-center gap-4"><Phone className="shrink-0 text-amber-300" size={20} strokeWidth={1.8} /><Link className="transition hover:text-white" to="tel:+92715644059">+ 92 71 5644059</Link></div>
								<div className="flex items-center gap-4"><Mail className="shrink-0 text-amber-300" size={20} strokeWidth={1.8} /><Link className="break-all transition hover:text-white" to="mailto:eto@iba-suk.edu.pk">eto@iba-suk.edu.pk</Link></div>
								<div className="flex items-center gap-4"><Globe className="shrink-0 text-amber-300" size={20} strokeWidth={1.8} /><Link className="transition hover:text-white" to="https://ee.iba-suk.edu.pk/contact/contactus.html#" target="_blank" rel="noreferrer">ee.iba-suk.edu.pk</Link></div>
							</div>
						</div>
					</Reveal>

					<Reveal className="bg-white p-7 shadow-sm sm:p-9" delay={0.08}>
						<div className="border-b border-slate-200 pb-6"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Send a message</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">How can we help?</h2></div>
						<Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={(_, { setStatus, resetForm }) => { setStatus("Your message has been prepared. We will get back to you soon."); resetForm(); }}>
							{({ status, isSubmitting }) => (
								<Form className="mt-7 space-y-5" noValidate>
									<div className="grid gap-5 sm:grid-cols-2">
										<label className="block text-sm font-semibold text-[#071f47]" htmlFor="fullName">Full Name<Field id="fullName" name="fullName" type="text" placeholder="Your full name" className="mt-2 w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0a2a5e] focus:ring-2 focus:ring-[#0a2a5e]/10" /><FieldError name="fullName" /></label>
										<label className="block text-sm font-semibold text-[#071f47]" htmlFor="email">Email Address<Field id="email" name="email" type="email" placeholder="you@example.com" className="mt-2 w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0a2a5e] focus:ring-2 focus:ring-[#0a2a5e]/10" /><FieldError name="email" /></label>
									</div>
									<label className="block text-sm font-semibold text-[#071f47]" htmlFor="subject">Subject<Field id="subject" name="subject" type="text" placeholder="What would you like to know?" className="mt-2 w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0a2a5e] focus:ring-2 focus:ring-[#0a2a5e]/10" /><FieldError name="subject" /></label>
									<label className="block text-sm font-semibold text-[#071f47]" htmlFor="message">Message<Field id="message" name="message" as="textarea" rows="6" placeholder="Write your message here..." className="mt-2 w-full resize-y border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0a2a5e] focus:ring-2 focus:ring-[#0a2a5e]/10" /><FieldError name="message" /></label>
									<div className="flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between"><button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 bg-[#071f47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a2a5e] disabled:cursor-not-allowed disabled:opacity-60"><Send size={17} strokeWidth={1.8} />Send message</button>{status && <p className="text-sm font-medium text-emerald-700" role="status">{status}</p>}</div>
								</Form>
							)}
						</Formik>
					</Reveal>
				</div>
			</section>
		</main>
	);
}
