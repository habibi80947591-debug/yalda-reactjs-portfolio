import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 pb-6 sm:px-8 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#10264a] px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

        <motion.div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}>
          <div>
            <p className="section-kicker text-sky-200">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sky-200" />
              LET’S CONNECT
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.06em] sm:text-6xl">
              Have a good idea? <span className="text-sky-200">Let’s build it.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Thanks for exploring my portfolio. I’m excited to keep learning, create useful experiences, and connect with people who love building for the web.
            </p>
          </div>
          <a href="mailto:yalda.habibi@example.com" className="group inline-flex w-fit items-center gap-3 rounded-full bg-sky-200 px-6 py-4 text-sm font-semibold text-[#10264a] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50">
            Get in touch <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </motion.div>

        <motion.div className="relative mt-12 flex flex-wrap gap-3 border-t border-white/15 pt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}>
          <a href="mailto:yalda.habibi@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-sky-50/10 hover:text-white">
            <span aria-hidden="true">✉</span> Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-sky-50/10 hover:text-white">
            <span className="text-xs font-bold">GH</span> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-sky-50/10 hover:text-white">
            <span className="text-xs font-bold">in</span> LinkedIn
          </a>
        </motion.div>
      </motion.div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-1 py-7 text-xs text-[#7d887f] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Yalda Habibi. Built with React & Tailwind CSS.</span>
        <a href="#home" className="transition-colors hover:text-[#10264a]">Back to top ↑</a>
      </footer>
    </section>
  );
}
