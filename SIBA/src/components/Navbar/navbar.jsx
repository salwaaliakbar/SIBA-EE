import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Library,
  FlaskConical,
  ExternalLink,
} from "lucide-react";
import logo from "../../assets/logo.png";

const navItems = [
  {
    label: "About",
    dropdown: [
      "About Department",
      "Vision & Mission",
      "PEOs & PLOs",
      "Chairman's Message",
      "Faculty & Staff"
    ],
  },
  {
    label: "Academics",
    dropdown: [
      {
        label: "Undergraduate Program",
        children: [
          {
            label: "B.E. Electrical Engineering",
            children: [
              {
                label: "Course Schema",
                to: "/academics/undergraduate/be-electrical-engineering/course-schema",
              },
            ],
          },
          { label: "Lab Infrastructure", to: "/academics/lab-infrastructure" },
        ],
      },
      {
        label: "Postgraduate Program",
        children: [
          {
            label: "M.E. Electrical Engineering",
            children: [
              { label: "For Batch 2024", to: "/academics/postgraduate/me-electrical-engineering/batch-2024" },
              { label: "For Batch 2025", to: "/academics/postgraduate/me-electrical-engineering/batch-2025" },
              { label: "For Batch 2026 and onwards", to: "/academics/postgraduate/me-electrical-engineering/batch-2026" },
            ],
          },
          {
            label: "M.E. Electronic and Communication",
            children: [
              { label: "Up to Batch 2025", to: "/academics/postgraduate/me-electronic-communication/upto-2025" },
              { label: "From Batch 2025 and onwards", to: "/academics/postgraduate/me-electronic-communication/from-2025" },
            ],
          },
          {
            label: "PhD. Electrical Engineering",
            children: [
              { label: "Up to Batch 2024", to: "/academics/postgraduate/phd-electrical-engineering/upto-2024" },
              { label: "For Batch 2025", to: "/academics/postgraduate/phd-electrical-engineering/batch-2025" },
              { label: "For Batch 2026 and onwards", to: "/academics/postgraduate/phd-electrical-engineering/batch-2026-and-onwards" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    dropdown: [
      {
        label: "Admission Policy (PDF)",
        to: "https://ee.iba-suk.edu.pk/downloads/SIBAU_Admispolicy-July%2014%20%202023.pdf",
        external: true,
      },
    ],
  },
  {
    label: "Research",
    dropdown: [
      "Final Year Projects",
      {
        label: "SIBA Journal of Technologies",
        to: "https://journal.iba-suk.edu.pk:8089/index.php/sjet/submissions",
        external: true,
      },
    ],
  },
  {
    label: "Resources",
    to: "https://iba-suk.edu.pk/student-resources",
    external: true,
  },
  {
    label: "Students",
    dropdown: [
      { label: "Internships", to: "/students/internships" },
      "Alumni",
      "Students Achievements",
    ],
  },
   {
    label: "Contact",
  },
];

const utilityLinks = [
  { label: "CMS", icon: GraduationCap, to: "https://pscs.iba-suk.edu.pk/psp/HRCS9/?cmd=login", external: true },
  { label: "LMS", icon: BookOpen, to: "https://elearning.iba-suk.edu.pk/login/index.php", external: true },
  { label: "Library", icon: Library, to: "https://library.iba-suk.edu.pk/", external: true },
  { label: "FAB LAB", icon: FlaskConical, to: "https://www.fablabs.io/labs/fablabsukkur", external: true },
];

const aboutSectionLinks = {
  "About Department": "/about/about-department",
  "Vision & Mission": "/about/vision-mission",
  "PEOs & PLOs": "/about/peos-plos",
  "Chairman's Message": "/about/chairman-message",
  "Faculty & Staff": "/about/faculty-staff",
};

const researchSectionLinks = {
  "Final Year Projects": "/research/final-year-projects",
};

const getItemLabel = (item) => (typeof item === "string" ? item : item.label);

const getItemPath = (item) => {
  if (typeof item !== "string") return item.to;

  return aboutSectionLinks[item] || researchSectionLinks[item] || "/";
};

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenus, setActiveSubmenus] = useState([]);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleDropdown = (label) => {
    setActiveSubmenus([]);
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const toggleDesktopSubmenu = (itemKey, isOpen) => {
    setActiveSubmenus((current) => {
      if (isOpen) {
        return current.filter((key) => key !== itemKey && !key.startsWith(`${itemKey}/`));
      }

      const ancestors = current.filter((key) => itemKey.startsWith(`${key}/`));
      return [...ancestors, itemKey];
    });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setActiveSubmenus([]);
    setActiveSubmenu(null);
  };

  const openDesktopDropdown = (label) => {
    setActiveDropdown(label);
    setActiveSubmenus([]);
  };

  const closeDesktopDropdown = () => {
    setActiveDropdown(null);
    setActiveSubmenus([]);
  };

  const renderDesktopItems = (items, parentKey = "") => items.map((item) => {
    const label = getItemLabel(item);
    const itemKey = `${parentKey}${label}`;
    const hasChildren = Boolean(item.children?.length);
    const isOpen = activeSubmenus.includes(itemKey);

    if (hasChildren) {
      return (
        <div
          key={itemKey}
          className="relative"
        >
          <button
            type="button"
            onClick={() => toggleDesktopSubmenu(itemKey, isOpen)}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] text-slate-600 transition hover:bg-slate-50 hover:text-[#0a2a5e]"
          >
            <span>{label}</span>
            <ChevronDown size={14} className={`-rotate-90 transition-transform ${isOpen ? "rotate-0" : ""}`} />
          </button>
          {isOpen && (
            <div className="absolute left-full top-0 z-10 w-64 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/20">
              {renderDesktopItems(item.children, `${itemKey}/`)}
            </div>
          )}
        </div>
      );
    }

    const linkProps = {
      key: itemKey,
      className: "group flex items-center rounded-lg px-3 py-2.5 text-[13px] normal-case tracking-normal text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:pl-4 hover:text-[#0a2a5e]",
      onClick: closeMobileMenu,
    };

    return item.external ? (
      <a {...linkProps} href={item.to} target="_blank" rel="noreferrer">
        <span>{label}</span>
        <ExternalLink size={13} aria-hidden="true" className="ml-auto shrink-0 opacity-70" />
      </a>
    ) : (
      <Link {...linkProps} to={getItemPath(item)}>
        <span>{label}</span>
      </Link>
    );
  });

  const renderMobileItems = (items, parentKey = "") => items.map((item) => {
    const label = getItemLabel(item);
    const itemKey = `${parentKey}/${label}`;
    const hasChildren = Boolean(item.children?.length);
    const isOpen = activeSubmenu === itemKey;

    if (hasChildren) {
      return (
        <div key={itemKey}>
          <button
            type="button"
            onClick={() => setActiveSubmenu((current) => current === itemKey ? null : itemKey)}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-blue-100/80 transition hover:bg-white/10 hover:text-white"
          >
            <span>{label}</span>
            <ChevronDown size={15} className={`-rotate-90 transition-transform ${isOpen ? "rotate-0" : ""}`} />
          </button>
          {isOpen && (
            <div className="ml-3 border-l border-white/15 pl-3">
              {renderMobileItems(item.children, itemKey)}
            </div>
          )}
        </div>
      );
    }

    const linkProps = {
      key: itemKey,
      className: "block rounded-lg px-3 py-2.5 text-sm normal-case tracking-normal text-blue-100/70 transition hover:bg-white/10 hover:text-white",
      onClick: closeMobileMenu,
    };

    return item.external ? (
      <a {...linkProps} href={item.to} target="_blank" rel="noreferrer">
        {label}
        <ExternalLink size={14} aria-hidden="true" className="ml-2 inline-block align-[-2px] opacity-70" />
      </a>
    ) : (
      <Link {...linkProps} to={getItemPath(item)}>
        {label}
      </Link>
    );
  });

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-[#0a2a5e]"
    >

      {/* Decorative circuit-board texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-360">

        {/* =====================================================
            TOP UTILITY BAR
        ====================================================== */}

        <div className="flex items-center justify-between px-5 py-3 sm:px-6 lg:px-10">

          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="Sukkur IBA University" className="h-11 w-auto" />

            <div className="border-l border-white/20 pl-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-200/80">
                Department of
              </p>
              <p className="mt-0.5 font-serif text-base font-bold tracking-tight text-white sm:text-lg">
                Electrical Engineering
              </p>
            </div>
          </Link>

          {/* Utility links - desktop */}
          <div className="hidden items-center divide-x divide-white/15 lg:flex">
            {utilityLinks.map((link) => {
              const Icon = link.icon;
              const className = "flex items-center gap-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/75 transition-colors hover:text-white";
              const content = (
                <>
                  <Icon size={13} strokeWidth={2} />
                  {link.label}
                  {link.external && <ExternalLink size={11} aria-hidden="true" className="opacity-70" />}
                </>
              );

              return link.external ? (
                <a key={link.label} href={link.to} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <Link key={link.label} to={link.to} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((current) => !current);
              setActiveDropdown(null);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>

        {/* =====================================================
            MAIN NAVIGATION - desktop
        ====================================================== */}

        <nav
          className="hidden items-center justify-center gap-3 px-5 py-2.5 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const hasDropdown = Boolean(item.dropdown);

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && openDesktopDropdown(item.label)}
                onMouseLeave={() => hasDropdown && closeDesktopDropdown()}
              >
                {item.external ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1 rounded-md px-4 py-2 text-[13px] font-semibold uppercase tracking-widest text-white/90 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ExternalLink size={13} aria-hidden="true" className="opacity-80" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => hasDropdown ? toggleDropdown(item.label) : navigate(item.label === "Contact" ? "/contact" : "/")}
                    aria-haspopup={hasDropdown}
                    aria-expanded={hasDropdown && activeDropdown === item.label}
                    className="group flex items-center gap-1 rounded-md px-4 py-2 text-[13px] font-semibold uppercase tracking-widest text-white/90 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                  >
                    <span>{item.label}</span>

                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                )}

                {hasDropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    {item.label === "Academics" ? (
                      <div className="w-205 max-w-[calc(100vw-40px)] rounded-xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/20">
                        <div className="mb-4 h-0.5 w-10 rounded-full bg-[#0a2a5e]" />
                        <div className="grid gap-6 md:grid-cols-3">
                          <div>
                            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0a2a5e]">
                              <GraduationCap size={16} />
                              Undergraduate
                            </div>
                            <p className="text-sm font-semibold text-slate-700">B.E. Electrical Engineering</p>
                            <Link to="/academics/undergraduate/be-electrical-engineering/course-schema" onClick={closeMobileMenu} className="mt-2 block rounded-lg px-3 py-2 text-[13px] text-slate-600 transition hover:bg-slate-50 hover:text-[#0a2a5e]">
                              Course Schema
                            </Link>
                          </div>

                          <div className="md:col-span-2">
                            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0a2a5e]">
                              <BookOpen size={16} />
                              Postgraduate
                            </div>
                            <div className="grid gap-5 sm:grid-cols-3">
                              <div>
                                <p className="text-sm font-semibold text-slate-700">M.E. Electrical Engineering</p>
                                <div className="mt-1 space-y-0.5">
                                  {[
                                    ["Batch 2024", "/academics/postgraduate/me-electrical-engineering/batch-2024"],
                                    ["Batch 2025", "/academics/postgraduate/me-electrical-engineering/batch-2025"],
                                    ["Batch 2026 onwards", "/academics/postgraduate/me-electrical-engineering/batch-2026"],
                                  ].map(([label, to]) => (
                                    <Link key={to} to={to} onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 transition hover:bg-slate-50 hover:text-[#0a2a5e]">
                                      {label}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-slate-700">M.E. Electronics and Communication</p>
                                <div className="mt-1 space-y-0.5">
                                  <Link to="/academics/postgraduate/me-electronic-communication/upto-2025" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 transition hover:bg-slate-50 hover:text-[#0a2a5e]">
                                    Up to Batch 2025
                                  </Link>
                                  <Link to="/academics/postgraduate/me-electronic-communication/from-2025" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 transition hover:bg-slate-50 hover:text-[#0a2a5e]">
                                    From Batch 2025 onwards
                                  </Link>
                                </div>
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-slate-700">PhD. Electrical Engineering</p>
                                <div className="mt-1 space-y-0.5">
                                  {[
                                    ["Up to Batch 2024", "/academics/postgraduate/phd-electrical-engineering/upto-2024"],
                                    ["Up to Batch 2025", "/academics/postgraduate/phd-electrical-engineering/batch-2025"],
                                    ["From Batch 2026 onwards", "/academics/postgraduate/phd-electrical-engineering/batch-2026-and-onwards"],
                                  ].map(([label, to]) => (
                                    <Link key={label} to={to} onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 transition hover:bg-slate-50 hover:text-[#0a2a5e]">
                                      {label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="/academics/lab-infrastructure"
                          onClick={closeMobileMenu}
                          className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-[13px] font-semibold text-[#0a2a5e] transition hover:text-amber-600"
                        >
                          <FlaskConical size={16} />
                          Lab Infrastructure
                        </Link>
                      </div>
                    ) : (
                      <div className="w-64 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/20">
                        <div className="mb-1 h-0.5 w-8 rounded-full bg-[#0a2a5e]" />
                        {renderDesktopItems(item.dropdown)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`relative overflow-hidden bg-[#0a2a5e] transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 px-5 py-3">

          <div>
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const isOpen = activeDropdown === item.label;

              return (
                <div key={item.label} className="border-b border-white/10 last:border-none">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold uppercase tracking-widest text-white"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={17}
                        strokeWidth={1.8}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : item.external ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMobileMenu}
                      className="block py-4 text-sm font-semibold uppercase tracking-widest text-white"
                    >
                      {item.label}
                      <ExternalLink size={15} aria-hidden="true" className="ml-2 inline-block align-[-2px] opacity-80" />
                    </a>
                  ) : (
                    <Link
                      to={item.label === "Contact" ? "/contact" : "/"}
                      onClick={closeMobileMenu}
                      className="block py-4 text-sm font-semibold uppercase tracking-widest text-white"
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasDropdown && isOpen && (
                    <div className="mb-3 ml-2 border-l-2 border-white/15 pl-3">
                      {renderMobileItems(item.dropdown, item.label)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70">
              University Links
            </p>

            <div className="grid grid-cols-2 gap-2">
              {utilityLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 px-2 py-3 text-xs font-medium text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    <Icon size={16} strokeWidth={1.7} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="h-4" />
        </div>
      </div>
    </motion.header>
  );
}
