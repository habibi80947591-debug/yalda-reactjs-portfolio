import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projectGroups } from "../data/projects";

export default function ProjectDetails() {
  const { groupId, projectIndex } = useParams();
  const group = projectGroups.find((item) => item.id === groupId);
  const project = group?.projects[Number(projectIndex)];

  if (!group || !project) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-3 text-[#64748b]">This project link may have changed.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/#projects" className="inline-flex rounded-full bg-[#10264a] px-5 py-3 text-sm font-semibold text-white">Back to all projects</Link>
          <Link to="/" className="inline-flex rounded-full border border-sky-200 px-5 py-3 text-sm font-semibold text-sky-800">Portfolio home</Link>
        </div>
      </section>
    );
  }

  return (
    <main className="mx-auto min-h-[75vh] max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="sticky top-3 z-30 mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sky-200/80 bg-white/95 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/95">
          <Link to="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#10264a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"><ArrowLeft size={16} /> Back to all projects</Link>
          <Link to="/#home" className="inline-flex min-h-11 items-center rounded-full border border-sky-200 px-4 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-600 dark:text-sky-200 dark:hover:bg-slate-800">Return to portfolio</Link>
        </div>
        <div className="mt-8 grid items-center gap-9 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="overflow-hidden rounded-[1.75rem] border border-[#e5e8df] bg-white shadow-xl shadow-[#263528]/10">
            <img src={project.image} alt={`${project.name} preview`} className="aspect-[16/11] w-full object-cover" />
          </motion.div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#839348]">Category {group.number} · {project.type}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{project.name}</h1>
            <p className="mt-5 text-base leading-8 text-[#707b72]">{project.description}</p>
            <p className="mt-4 text-sm leading-7 text-[#899289]">This page opens instantly inside the portfolio. Use the button below to visit the live project or design in its original website.</p>
            <motion.a href={project.url} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label={`Open ${project.name} in a new tab`} whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#10264a] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#10264a]/15 transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Open live project in new tab <ArrowUpRight size={17} /><ExternalLink size={14} /></motion.a>
            <p className="mt-3 text-xs leading-5 text-[#64748b]">Your portfolio stays open in its original tab. When you finish exploring the live site, return to this tab to continue browsing projects.</p>
            <div className="mt-8 border-t border-sky-100 pt-5 dark:border-slate-700">
              <Link to="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sky-200 px-5 py-3 text-sm font-semibold text-sky-800 transition hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-600 dark:text-sky-200 dark:hover:bg-slate-800"><ArrowLeft size={16} /> Back to all projects</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
