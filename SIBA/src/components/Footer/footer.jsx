import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../shared/reveal.jsx";
import logo from "../../assets/logo.png";

const quickLinks = [
  { label: "Vision & Mission", to: "/about/vision-mission" },
  { label: "About Department", to: "/about#about-department" },
  { label: "PEOs & PLOs", to: "/about/peos-plos" },
  { label: "HoD Message", to: "/about/chairman-message" },
];

const universityLinks = [
  { label: "CMS", to: "/" },
  { label: "LMS", to: "/" },
  { label: "Library", to: "/" },
  { label: "FAB LAB", to: "/" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ee.sibau/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.6v8h3.4z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/Sukkur_IBA?s=08",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.9 3H21l-6.7 7.6L22.2 21h-6.5l-5-6.5-5.8 6.5H2.9l7.2-8.1L2 3h6.7l4.6 6 5.6-6zm-1.1 16.2h1.2L7.2 4.7H5.9l11.9 14.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sukkuriba.uni",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/electrical-engineering-sukkur-iba-university-1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a2 2 0 100 4 2 2 0 000-4zM21 21v-6.9c0-3.7-2-5.4-4.6-5.4a4 4 0 00-3.6 2v-1.7H9.4c.04.9 0 12 0 12h3.38v-6.7c0-.36.02-.71.13-.97.28-.71.93-1.44 2-1.44 1.42 0 2 1.08 2 2.67V21H21z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC_wia8rRfRyrbqnFRvpc9Ew",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M21.6 7.2s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.1c-.4.1-1.3.1-2.1.9-.6.7-.8 2.2-.8 2.2S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.7.2 7.4.2 7.4.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-amber-400/60 bg-[#071f47]">
      {/* Circuit-board texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10">
        <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sukkur IBA University" className="h-11 w-auto" />
              <div className="border-l border-white/20 pl-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-200/80">
                  Department of
                </p>
                <p className="mt-0.5 font-serif text-sm font-bold text-white">
                  Electrical Engineering
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-blue-100/70">
              Producing quality electrical engineers through research,
              industry-aligned curriculum, and hands-on learning.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-blue-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* University links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              University Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {universityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-blue-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-blue-100/75">
                <MapPin size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-white" />
                ETO Office, AB-3, Sukkur IBA University, Sukkur, Sindh, Pakistan
              </li>
              <li className="flex items-center gap-2.5 text-sm text-blue-100/75">
                <Phone size={16} strokeWidth={1.8} className="shrink-0 text-white" />
                <a href="tel:+92715644059" className="transition-colors hover:text-white">
                  +92 71 5644059
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-blue-100/75">
                <Mail size={16} strokeWidth={1.8} className="shrink-0 text-white" />
                <a href="mailto:eto@iba-suk.edu.pk" className="transition-colors hover:text-white">
                  eto@iba-suk.edu.pk
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-blue-200/60">
          Copyright © {new Date().getFullYear()} Department of Electrical Engineering, Sukkur IBA University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
