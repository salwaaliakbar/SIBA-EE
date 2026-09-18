import { Mail, MessageCircle, Smartphone } from "lucide-react";
import sharjeelImage from "../../assets/faculty/sharjeel.jpg";
import Reveal from "../shared/reveal.jsx";

const message =
	"Explore the dynamic realm of Electrical Engineering at Sukkur IBA University. Join our meticulously crafted Bachelor's program, which seamlessly integrates theoretical knowledge with hands-on practical experience using cutting-edge technologies. Our dedicated faculty is committed to guiding you through immersive learning experiences, ensuring you're fully prepared to tackle real-world challenges with confidence. By enrolling in our Electrical Engineering program, you'll not only earn a degree but also become part of a thriving community driven by innovation and academic excellence. Whether your interests lie in renewable energy, telecommunications, electronics, or power systems, Sukkur IBA University offers the perfect platform to turn your aspirations into reality. Enter a world of endless possibilities where personal and professional growth opportunities abound. Illuminate your future with Sukkur IBA University and embark on a fulfilling journey towards a successful career in Electrical Engineering.";

export default function ChairmanMessage() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
						backgroundSize: "24px 24px",
					}}
				/>
				<div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
					<Reveal className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
							Department of Electrical Engineering
						</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Chairman&apos;s Message
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
							A message from the Head of the Department of Electrical Engineering at Sukkur IBA University.
						</p>
					</Reveal>
				</div>
			</section>

			<section id="hod-message" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
				<Reveal className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
					<div>
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-[#071f47]">
							<MessageCircle size={25} strokeWidth={1.8} />
						</div>
						<p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">
							From the department
						</p>
						<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">
							Meet our Head of Department
						</h2>
					</div>

					<div className="border-t-4 border-amber-400 bg-white p-6 shadow-sm sm:p-8">
						<div className="grid gap-7 sm:grid-cols-[140px_1fr] sm:gap-6">
							<img
								src={sharjeelImage}
								alt="Dr. Sharjeel Afridi"
								className="h-[148px] w-[140px] object-cover object-top"
							/>
							<div>
								<h3 className="font-serif text-2xl text-[#0a2a5e] sm:text-3xl">
									Dr. Sharjeel Afridi
								</h3>
								<p className="mt-5 text-base leading-8 text-slate-600">
									{message}
								</p>
								<div className="mt-6 space-y-3 text-sm font-semibold text-[#2878bd]">
									<a className="flex items-center gap-3 hover:text-[#071f47]" href="tel:4192">
										<Smartphone size={18} className="text-[#0a2a5e]" />
										<span>Ext : 4192</span>
									</a>
									<a className="flex items-center gap-3 break-all hover:text-[#071f47]" href="mailto:Sharjeel.afridi@iba-suk.edu.pk">
										<Mail size={18} className="shrink-0 text-[#0a2a5e]" />
										<span>Sharjeel.afridi@iba-suk.edu.pk</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</section>
		</main>
	);
}
