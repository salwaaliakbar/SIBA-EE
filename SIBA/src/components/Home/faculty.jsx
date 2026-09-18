import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, FlaskConical, Wrench } from "lucide-react";
import Reveal from "../shared/reveal.jsx";
import saeedImg from "../../assets/faculty/saeed.jpg";
import sharjeelImg from "../../assets/faculty/sharjeel.jpg";
import abdulQadirImg from "../../assets/faculty/abdul-qadir.jpg";
import madadImg from "../../assets/faculty/madad.jpg";
import fareedImg from "../../assets/faculty/fareed.jpg";
import yameenImg from "../../assets/faculty/yameen.jpg";
import unnamedStaffImg from "../../assets/staff/unnamed.png";
import nadirImg from "../../assets/staff/nadir.jpg";
import aizazImg from "../../assets/staff/aizaz.png";
import veerBhanImg from "../../assets/staff/veer-bhan.jpg";
import abdulMajeedImg from "../../assets/staff/abdul-majeed.jpg";

const faculty = [
  {
    name: "Dr. Saeed Ahmed Khan",
    title: "Associate Professor",
    subtitle: "Dean, Faculty of Engineering & Technology",
    image: saeedImg,
  },
  {
    name: "Dr. Sharjeel Afridi",
    title: "Associate Professor",
    subtitle: "Chairman, Electrical Engineering Department",
    image: sharjeelImg,
  },
  {
    name: "Dr. Abdul Qadir",
    title: "Professor",
    subtitle: "PVC, Kandhkot Campus",
    image: abdulQadirImg,
  },
  {
    name: "Engr. Prof. Dr. Madad Ali Shah",
    title: "Professor",
    subtitle: "",
    image: madadImg,
  },
  {
    name: "Dr. Fareed Ahmed Mangi",
    title: "Professor",
    subtitle: "",
    image: fareedImg,
  },
  {
    name: "Dr. Muhammad Yameen Sindhu",
    title: "Associate Professor",
    subtitle: "",
    image: yameenImg,
  },
];

const staff = [
  { name: "Tufail Ahmed Soomro", role: "Assistant to Chairman", icon: BriefcaseBusiness, image: unnamedStaffImg },
  { name: "Kainat Soomro", role: "OBE Coordinator", icon: BriefcaseBusiness, image: unnamedStaffImg },
  { name: "Engr. Nadir Ali", role: "Fab Lab Engineer & Incharge Fab Lab", icon: FlaskConical, image: nadirImg },
  { name: "Engr. Aizaz Larik", role: "Lab Engineer", icon: Wrench, image: aizazImg },
  { name: "Engr. Veer Bhan", role: "Lab Engineer", icon: Wrench, image: veerBhanImg },
  { name: "Engr. Muhammad Fawad", role: "Lab Engineer · On Leave", icon: Wrench, image: unnamedStaffImg },
  { name: "Engr. Abdul Majeed", role: "Lab Assistant", icon: Wrench, image: abdulMajeedImg },
  { name: "Engr. Danyal", role: "Lab Assistant", icon: Wrench, image: unnamedStaffImg },
];

export default function Faculty() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f5f7fb] py-16 sm:py-20">
      {/* Soft decorative color blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#0a2a5e]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-amber-400/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0a2a5e]/15 bg-[#0a2a5e]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#0a2a5e]">
            Faculty
          </span>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0a2a5e] sm:text-4xl">
            Meet Our Faculty
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Led by experienced educators and researchers dedicated to shaping
            the next generation of electrical engineers.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {faculty.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md sm:h-28 sm:w-28"
              />
              <p className="mt-4 text-sm font-semibold leading-snug text-[#0a2a5e]">
                {person.name}
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-500">
                {person.title}
              </p>
              {person.subtitle && (
                <p className="mt-0.5 text-xs leading-snug text-slate-400">
                  {person.subtitle}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href="#"
            className="group mt-12 inline-flex items-center gap-2 rounded-lg border-2 border-[#0a2a5e] px-5 py-2.5 text-sm font-semibold text-[#0a2a5e] transition-colors hover:bg-[#0a2a5e] hover:text-white"
          >
            View All Faculty
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        <div className="mx-auto mt-20 max-w-6xl border-t border-slate-200 bg-[#e9eff5] pt-16 sm:mt-24 sm:pt-20">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0a2a5e]/15 bg-[#0a2a5e]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#0a2a5e]">
              Staff
            </span>

            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0a2a5e] sm:text-4xl">
              Meet Our Staff
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The people who keep our department, laboratories, and student
              experience running every day.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {staff.slice(0, 6).map((person, index) => {
              const Icon = person.icon;
              return (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative h-24 w-24 rounded-full border-4 border-white bg-slate-100 shadow-md transition-transform duration-200 group-hover:-translate-y-1 sm:h-28 sm:w-28">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-[#0a2a5e]">
                      <Icon size={13} strokeWidth={2.2} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold leading-snug text-[#0a2a5e]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-slate-500">
                    {person.role}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <a
              href="#"
              className="group mt-12 inline-flex items-center gap-2 rounded-lg border-2 border-[#0a2a5e] px-5 py-2.5 text-sm font-semibold text-[#0a2a5e] transition-colors hover:bg-[#0a2a5e] hover:text-white"
            >
              View All Staff
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
