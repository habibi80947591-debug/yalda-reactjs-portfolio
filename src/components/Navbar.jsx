import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  ["Home", "home"], ["About", "about"], ["Services", "services"],
  ["Projects", "projects"], ["Skills", "skills"], ["Education", "education"], ["Contact", "contact"]
];

export default function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const goTo = (id) => {
    setOpen(false);
    const scroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/#${id}`);
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scroll, 180);
    } else {
      window.setTimeout(scroll, 60);
    }
  };
  return (
    <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-sky-100 nav-panel px-4 py-3 shadow-lg shadow-blue-950/10 backdrop-blur-xl sm:px-6">
        <button onClick={() => goTo("home")} className="flex items-center gap-3 text-left" aria-label="Yalda Habibi home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#10264a] text-sm font-bold text-sky-200">YH</span>
          <span className="font-semibold tracking-tight text-[#10264a]">Yalda Habibi<span className="text-sky-500">.</span></span>
        </button>
        <div className="hidden items-center gap-4 xl:flex">
          <button type="button" onClick={onToggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="grid h-10 w-10 place-items-center rounded-full border border-sky-200 bg-sky-50 text-[#10264a] transition hover:bg-sky-100">{darkMode ? <Sun size={17}/> : <Moon size={17}/>}</button>
          {links.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600">{label}</button>)}
          <button onClick={() => goTo("projects")} className="inline-flex items-center gap-2 rounded-full bg-[#10264a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Explore work <ArrowUpRight size={16}/></button>
        </div>
        <button type="button" onClick={onToggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="mr-2 grid h-11 w-11 place-items-center rounded-xl border border-sky-200 bg-sky-50 text-[#10264a] xl:hidden">{darkMode ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <button type="button" onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-xl border border-sky-200 bg-sky-50 text-[#10264a] hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 xl:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -8, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -8, height: 0 }} transition={{ duration: .22 }} className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-sky-100 nav-menu shadow-xl xl:hidden">
          <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3">
            {links.map(([label, id], i) => <motion.button key={id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .035 }} onClick={() => goTo(id)} className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#10264a] hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500">{label}</motion.button>)}
          </div>
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  );
}
