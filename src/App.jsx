import { motion } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import { Services, Skills, Education } from "./components/ExtraSections";

function HomePage() {
  return <main><Hero/><About/><Services/><Projects/><Skills/><Education/><Contact/></main>;
}
export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("yalda-portfolio-theme") === "dark");
  useEffect(() => { localStorage.setItem("yalda-portfolio-theme", darkMode ? "dark" : "light"); }, [darkMode]);
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    } else if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);
  return <motion.div key={location.pathname} className={`portfolio-shell min-h-screen overflow-clip ${darkMode ? "theme-dark" : "theme-light"}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22, ease: "easeOut" }}><Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(value => !value)}/><Routes><Route path="/" element={<HomePage/>}/><Route path="/projects/:groupId/:projectIndex" element={<ProjectDetails/>}/><Route path="*" element={<HomePage/>}/></Routes><motion.button type="button" aria-label="Back to top" onClick={() => { if(location.pathname !== "/") window.location.href="/#home"; else window.scrollTo({top:0,behavior:"smooth"}); }} whileHover={{scale:1.08,y:-3}} whileTap={{scale:.94}} className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#10264a] text-xl font-bold text-white shadow-lg shadow-blue-950/20 transition-colors hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">↑</motion.button></motion.div>;
}
