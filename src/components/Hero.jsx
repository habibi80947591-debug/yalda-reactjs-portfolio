import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12 lg:pt-48">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <motion.div className="relative z-10" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe3d7] bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500"/> FRONT-END DEVELOPER · DIGITAL CREATOR
          </div>
          <h1 className="max-w-3xl text-[clamp(3.2rem,8vw,6.9rem)] font-semibold leading-[.96] tracking-[-.075em]">
            Building ideas into <span className="relative inline-block text-sky-700">digital <span className="absolute -bottom-1 left-1 h-2 w-[88%] -rotate-2 rounded-full bg-sky-200 opacity-80 sm:-bottom-2 sm:h-3"/></span> experiences.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Hi, I’m Yalda Habibi. I create thoughtful, responsive web experiences with HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-[#10264a] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-800">
              Explore my projects <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-6 py-4 text-sm font-semibold transition-all duration-300 hover:border-sky-600 hover:bg-white">
              More about me <ArrowDown size={16}/>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-sky-100 pt-6 text-xs font-medium uppercase tracking-[.16em] text-slate-500">
            <span>React.js</span><span>Tailwind CSS</span><span>Responsive UI</span><span>Figma</span>
          </div>
        </motion.div>
        <motion.div className="relative mx-auto w-full max-w-[540px]" initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
          <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-sky-200 blur-2xl sm:-right-7 sm:-top-8"/>
          <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-sky-100 blur-2xl"/>
          <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white bg-sky-50 shadow-2xl shadow-[#28382b]/10 transition-transform duration-700 hover:rotate-1">
            <img
              src="/images/yalda-graduation.jpg"
              alt="Yalda Habibi wearing a graduation gown and graduation cap"
              className="h-[390px] w-full object-cover object-[center_25%] sm:h-[510px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10264a]/65 via-transparent to-transparent"/>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7">
              <div><p className="text-xs uppercase tracking-[.2em] text-white/70">My creative journey</p><p className="mt-1 text-xl font-semibold sm:text-2xl">Learn. Build. Improve.</p></div>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sky-200 text-[#10264a]"><Sparkles size={20}/></span>
            </div>
          </div>
          <div className="absolute -left-4 top-10 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur sm:-left-10">
            <p className="text-xs text-[#7a847c]">Current focus</p><p className="mt-1 text-sm font-semibold">React + Tailwind</p>
          </div>
          <div className="absolute -right-2 bottom-16 rounded-2xl bg-sky-200 px-4 py-3 shadow-lg sm:-right-7">
            <p className="text-xs font-semibold text-[#10264a]">Made with curiosity ✳</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
