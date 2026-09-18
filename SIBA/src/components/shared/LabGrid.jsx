import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { laboratories } from "./labs.jsx";

export default function LabGrid({ columnsClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" }) {
  return (
    <div className={`grid gap-5 ${columnsClassName}`}>
      {laboratories.map((lab, index) => (
        <motion.article
          key={lab.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.45,
            delay: Math.min(index * 0.035, 0.3),
          }}
          className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0a2a5e]/20 hover:shadow-xl hover:shadow-slate-900/10"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={lab.image}
              alt={lab.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full bg-[#0a2a5e] px-2 text-xs font-bold text-white shadow-lg">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex min-h-[92px] items-center justify-between gap-3 p-4">
            <h3 className="font-serif text-lg font-bold leading-snug text-[#0a2a5e]">{lab.name}</h3>
            <ArrowUpRight size={18} className="shrink-0 text-amber-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </motion.article>
      ))}
    </div>
  );
}
