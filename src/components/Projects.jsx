import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Search } from "lucide-react";
import { projectGroups, categoryImages } from "../data/projects";

const easing = [0.22, 1, 0.36, 1];
const cardEntrance = { hidden: { opacity: 0, y: 34, scale: 0.96, filter: "blur(6px)" }, show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } };

function ProjectCard({ project, index, groupId, projectIndex }) {
  return (
    <Link to={`/projects/${groupId}/${projectIndex}`} className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]" aria-label={`View details for ${project.name}`}>
    <motion.div
      layout
      variants={cardEntrance}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ type: "spring", stiffness: 105, damping: 17, mass: 0.8, delay: Math.min(index * 0.07, 0.28), layout: { duration: 0.32 } }}
      whileHover={{ y: -10, rotateZ: index % 2 === 0 ? 0.35 : -0.35, transition: { type: "spring", stiffness: 260, damping: 16 } }}
      whileTap={{ scale: 0.985 }}
      className="project-card group flex min-h-[370px] flex-col overflow-hidden rounded-2xl border border-[#dbeafe] bg-white shadow-sm transition-colors hover:border-[#38bdf8] hover:shadow-2xl hover:shadow-[#10264a]/[.10]"
    >
      <div className="project-image-wrap relative h-44 overflow-hidden bg-[#e0f2fe] sm:h-48">
        <motion.img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: easing }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-transparent to-black/5 opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
        <span className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-[#10264a] backdrop-blur-md">{project.type}</span>
        <motion.span
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-white/90 text-[#10264a] shadow-sm backdrop-blur"
          whileHover={{ rotate: 45, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 320, damping: 16 }}
        ><ArrowUpRight size={18} /></motion.span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-[11px] font-bold tracking-[.16em] text-[#0284c7]">{String(index + 1).padStart(2, "0")}</span>
          <div><h4 className="text-lg font-semibold tracking-tight group-hover:text-[#0369a1]">{project.name}</h4>
          <p className="mt-2 text-sm leading-6 text-[#64748b]">{project.description}</p></div>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="text-[11px] font-medium text-[#64748b]">Portfolio project</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284c7]">View project <ExternalLink size={13} /></span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const groups = useMemo(() => projectGroups.map(group => ({
    ...group,
    projects: group.projects.filter(p => `${p.name} ${p.description} ${p.type}`.toLowerCase().includes(query.toLowerCase().trim()))
  })).filter(group => (filter === "all" || group.id === filter) && group.projects.length), [filter, query]);

  return (
    <section id="projects" aria-label="Projects and portfolio work" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: easing }}
        >
          <div>
            <p className="section-kicker"><span className="h-2 w-2 rounded-full bg-[#38bdf8]" /> SELECTED WORK & PRACTICE</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">A collection of <span className="text-[#0369a1]">my work.</span></h2>
          </div>
          <p className="max-w-md leading-7 text-[#64748b]">Explore my React builds, bootcamp work, Figma design, and HTML/CSS assignments—all in one place.</p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectGroups.map(group => (
            <motion.a
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.55, ease: easing }}
              whileHover={{ y: -7, scale: 1.012 }}
              whileTap={{ scale: 0.985 }}
              href={`#${group.id}`}
              aria-label={`Jump to ${group.title}`}
              key={group.id}
              className="category-card group relative min-h-[215px] overflow-hidden rounded-[1.5rem] bg-[#10264a]"
            >
              <motion.img
                src={categoryImages[group.id]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-65"
                whileHover={{ scale: 1.09 }}
                transition={{ duration: 0.7, ease: easing }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/95 via-[#10264a]/30 to-transparent" />
              <div className="relative flex h-full min-h-[215px] flex-col justify-between p-5 text-white sm:p-6">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/30 bg-black/10 px-3 py-1.5 text-xs backdrop-blur">{group.number} / {String(projectGroups.length).padStart(2, "0")}</span>
                  <motion.span whileHover={{ x: 4, y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}><ArrowUpRight size={19} /></motion.span>
                </div>
                <div><h3 className="text-xl font-semibold tracking-tight">{group.title}</h3><p className="mt-2 text-sm text-white/75">{group.projects.length} {group.projects.length === 1 ? "project" : "projects"}</p></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#e4e7dd] bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: easing }}
        >
          <div className="flex flex-wrap gap-2">
            {[["all", "All projects"], ["react", "React.js"], ["bootcamps", "Bootcamps"], ["figma", "Figma"], ["html-css-work", "HTML & CSS"], ["html", "HTML"], ["css", "CSS"]].map(([value, label]) => (
              <motion.button
                type="button"
                key={value}
                onClick={() => setFilter(value)}
                whileTap={{ scale: 0.94 }}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-200 ${filter === value ? "bg-[#10264a] text-white" : "bg-[#eff6ff] text-[#475569] hover:bg-[#e0f2fe]"}`}
                aria-pressed={filter === value}
              >{label}</motion.button>
            ))}
          </div>
          <label className="flex min-w-0 items-center gap-2 rounded-full border border-[#dbeafe] bg-white px-4 py-3 sm:max-w-[250px]">
            <Search size={16} className="shrink-0 text-[#859087}" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects..." aria-label="Search projects" className="w-full bg-transparent text-sm outline-none placeholder:text-[#9ba39b]" />
          </label>
        </motion.div>

        <div className="mt-12 space-y-16">
          <AnimatePresence mode="popLayout">
            {groups.map(group => (
              <motion.section
                id={group.id}
                key={group.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: easing, layout: { duration: 0.3 } }}
                className="scroll-mt-28"
              >
                <div className="mb-6 flex flex-col gap-3 border-b border-[#dbeafe] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#0284c7]">Category {group.number}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{group.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[#64748b]">{group.subtitle}</p></div>
                  <span className="text-sm text-[#64748b]">{group.projects.length} {group.projects.length === 1 ? "project" : "projects"}</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.projects.map((project, i) => <ProjectCard key={project.url} project={project} index={i} groupId={group.id} projectIndex={projectGroups.find(item => item.id === group.id).projects.findIndex(item => item.url === project.url)} />)}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>
          {groups.length === 0 && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-dashed border-[#bae6fd] p-12 text-center text-[#64748b]">
              No projects match that search. Try another keyword.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
