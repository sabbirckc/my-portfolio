"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Code2,
  GraduationCap,
  Briefcase,
  Sparkles,
  MapPin,
  Languages,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Menu,
  X,
  Zap,
  Rocket,
} from "lucide-react";

// --- Custom Brand SVG Icons ---
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// --- Project Data ---
interface Project {
  title: string;
  category: "all" | "fullstack" | "frontend" | "mern";
  tech: string[];
  description: string;
  features: string[];
  demoUrl?: string;
  githubUrl: string;
  imageBg: string;
  status: "completed" | "in-progress";
}

const projectsData: Project[] = [
  {
    title: "DevPulse - Developer Community & Knowledge Hub",
    category: "fullstack",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "MongoDB", "Server Actions"],
    description:
      "A real-time developer collaboration platform featuring question-answering, code snippet discussions, and reputation-based community engagement.",
    features: [
      "Rich markdown editor with syntax-highlighted code blocks",
      "Voting and reputation badge system with real-time updates",
      "AI-assisted response suggestions and tag categorization",
      "Responsive glassmorphism dashboard and profile stats",
    ],
    demoUrl: "https://github.com/sabbirckc",
    githubUrl: "https://github.com/sabbirckc",
    imageBg: "from-blue-600/30 via-indigo-900/40 to-black",
    status: "completed",
  },
  {
    title: "ShopSphere - Full-Stack E-Commerce & Storefront",
    category: "mern",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    description:
      "A complete e-commerce solution with dynamic product management, cart persistence, secure checkout workflow, and an admin inventory management suite.",
    features: [
      "User authentication with JWT and secure cookie management",
      "Dynamic filtering, searching, and categorized pagination",
      "Interactive cart with instant quantity updates and pricing breakdown",
      "Admin panel for product addition, order tracking, and stock monitoring",
    ],
    demoUrl: "https://github.com/sabbirckc",
    githubUrl: "https://github.com/sabbirckc",
    imageBg: "from-emerald-600/30 via-teal-950/40 to-black",
    status: "completed",
  },
  {
    title: "TaskFlow - Real-Time Collaborative Kanban Board",
    category: "frontend",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide", "Local State"],
    description:
      "A sleek drag-and-drop task management tool designed to boost personal and team productivity with priority levels, deadlines, and activity logs.",
    features: [
      "Smooth drag-and-drop task migration between progress stages",
      "Customizable tags, task priority flags, and due-date countdowns",
      "Persisted state with offline-first support and rapid search filter",
      "High-contrast dark mode tailored for deep-work focus",
    ],
    demoUrl: "https://github.com/sabbirckc",
    githubUrl: "https://github.com/sabbirckc",
    imageBg: "from-purple-600/30 via-violet-950/40 to-black",
    status: "completed",
  },
  {
    title: "Sabbir.Dev - Modern Glassmorphic Portfolio",
    category: "frontend",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    description:
      "An ultra-refined developer portfolio featuring smooth responsive layouts, clean dark theme, dynamic typewriter animations, and modern micro-interactions.",
    features: [
      "Clean dark theme with subtle grid pattern and glassmorphic cards",
      "Rotating dynamic typewriter role animations in hero section",
      "Interactive technical proficiency meters and category filtering",
      "Fully accessible semantic structure with optimal Core Web Vitals",
    ],
    demoUrl: "https://github.com/sabbirckc",
    githubUrl: "https://github.com/sabbirckc",
    imageBg: "from-neutral-700/40 via-zinc-900/60 to-black",
    status: "completed",
  },
];

// --- Skills Data ---
const technicalSkills = [
  { name: "React.js & Next.js", level: 90 },
  { name: "JavaScript (ES6+) & TypeScript", level: 88 },
  { name: "Tailwind CSS & Modern UI", level: 92 },
  { name: "Node.js & Express.js", level: 82 },
  { name: "MongoDB & Database Modeling", level: 80 },
  { name: "Git, GitHub & Version Control", level: 85 },
  { name: "RESTful APIs & Integration", level: 87 },
  { name: "UI/UX Wireframing (Figma)", level: 78 },
];

const techTools = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "Postman",
  "Figma",
  "Vercel",
  "REST APIs",
  "HTML5 / CSS3",
  "VS Code",
  "npm / pnpm",
];

const methodologies = [
  "Component-Driven Architecture",
  "Responsive & Mobile-First Design",
  "Clean Code & Modular Patterns",
  "Agile Development Mindset",
  "RESTful API Architecture",
  "Git Flow & Branching",
  "Performance & SEO Optimization",
  "Cross-Browser Compatibility",
];

export default function PortfolioPage() {
  // Typewriter roles
  const roles = [
    "Full Stack Developer",
    "Frontend Specialist",
    "React & Next.js Builder",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Project Filter
  const [activeFilter, setActiveFilter] = useState<"all" | "fullstack" | "frontend" | "mern">("all");

  // Copy email feedback
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form submit state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1));
        if (displayedRole.length === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length - 1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, currentRoleIndex, roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sabbirhossainnubian@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 4500);
    }, 900);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen max-w-full overflow-x-hidden bg-[#050507] text-[#e2e8f0] bg-grid-pattern selection:bg-white selection:text-black">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute top-1/3 -right-24 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      {/* --- Fixed Responsive Navbar --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-1 text-base sm:text-lg font-black tracking-tighter"
          >
            <span className="text-white group-hover:text-emerald-400 transition-colors">
              SABBIR
            </span>
            <span className="text-zinc-500 font-mono text-xs sm:text-sm tracking-normal">
              .DEV
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Resume / Connect Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:sabbirhossainnubian@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-zinc-300 hover:text-white focus:outline-none rounded-lg active:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-5 space-y-3.5 transition-all">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-zinc-300 hover:text-emerald-400 transition-colors py-1.5 border-b border-white/5"
              >
                {item}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="mailto:sabbirhossainnubian@gmail.com"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-white text-black font-bold text-sm shadow-md"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Responsive Container */}
      <main className="relative z-10 max-w-6xl mx-auto pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-12">
          <div className="glass-card rounded-2xl p-5 sm:p-8 md:p-12 border border-white/10">
            {/* Top row: Profile picture + Name/Title */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-10">
              {/* Profile Photo Frame */}
              <div className="relative group shrink-0 mx-auto md:mx-0">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-zinc-400/20 to-blue-500/30 blur-md opacity-70 group-hover:opacity-100 transition duration-700" />
                <div className="relative w-36 h-44 sm:w-44 sm:h-52 md:w-48 md:h-56 rounded-xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Sabbir Hossain"
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>

              {/* Headline & Details */}
              <div className="flex-1 text-center md:text-left w-full">
                {/* Available for hire badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wider mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>AVAILABLE FOR HIRE</span>
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2 sm:mb-3 break-words">
                  SABBIR HOSSAIN
                </h1>

                {/* Rotating Typewriter Role */}
                <div className="text-lg sm:text-xl md:text-2xl font-mono text-zinc-300 min-h-[2.25rem] flex items-center justify-center md:justify-start gap-1 mb-5 sm:mb-6 flex-wrap">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>{displayedRole}</span>
                  <span className="w-2 h-5 bg-white animate-pulse inline-block" />
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                  {[
                    { icon: <MapPin className="w-4 h-4 text-emerald-400" />, label: "Dhaka, Bangladesh" },
                    { icon: <Languages className="w-4 h-4 text-blue-400" />, label: "English & Bengali" },
                    { icon: <Code2 className="w-4 h-4 text-purple-400" />, label: "Full-Stack Dev" },
                    { icon: <GraduationCap className="w-4 h-4 text-amber-400" />, label: "Northern Univ BD" },
                    { icon: <Briefcase className="w-4 h-4 text-cyan-400" />, label: "Batch 2023 - 2026" },
                    { icon: <Sparkles className="w-4 h-4 text-pink-400" />, label: "MERN & Next.js" },
                  ].map((info, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all text-xs text-zinc-300"
                    >
                      <span className="shrink-0">{info.icon}</span>
                      <span className="truncate font-medium">{info.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: About narrative + Connect Links */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
              {/* About Text */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                  <span className="w-6 h-px bg-zinc-600" />
                  About Me
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  I’m a passionate aspiring <span className="text-white font-medium">Full-Stack Web Developer</span> focused on building modern, responsive, and user-friendly web applications.
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  I enjoy working with <span className="text-zinc-200">JavaScript, TypeScript, React, Next.js, and Node.js</span> to turn creative ideas into robust, real-world solutions. Always eager to solve complex challenges and craft meaningful digital experiences.
                </p>
              </div>

              {/* Connect Links */}
              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                  <span className="w-6 h-px bg-zinc-600" />
                  Quick Connect
                </div>
                <div className="space-y-2">
                  <a
                    href="https://github.com/sabbirckc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400">GitHub</div>
                        <div className="text-sm font-semibold text-white">@sabbirckc</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sabbir-hossainnubian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-white/5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400">LinkedIn</div>
                        <div className="text-sm font-semibold text-white">sabbir-hossainnubian</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </a>

                  <div
                    onClick={handleCopyEmail}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-md bg-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-zinc-400">Email</div>
                        <div className="text-xs sm:text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-[240px]">
                          sabbirhossainnubian@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 flex items-center gap-1 shrink-0 ml-2">
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Work & Leadership / Experience Section --- */}
        <section id="experience" className="my-20 sm:my-28">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-10 h-1 bg-white rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              EXPERIENCE & INVOLVEMENT
            </h2>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {/* Experience Card 1 */}
            <div className="glass-card rounded-xl p-5 sm:p-7 md:p-8 border border-white/10 group hover:border-white/20 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <Code2 className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                      Full-Stack Web Developer (Independent & Projects)
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400">Personal & Collaborative Open Source</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 shrink-0">
                  2023 - Present
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Architecting and delivering full-stack web applications leveraging Next.js, React, Node.js, Express, and MongoDB. Focusing on responsive mobile-first UI, robust RESTful APIs, JWT authentication, and seamless user experiences.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="glass-card rounded-xl p-5 sm:p-7 md:p-8 border border-white/10 group hover:border-white/20 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
                    <Rocket className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                      CSE Tech Initiatives & Collaborative Learning
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400">Northern University Bangladesh</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 shrink-0">
                  2023 - Present
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Collaborating with fellow computer science students on hackathon prototypes, code reviews, and technical workshops. Leading frontend development workflows, component modularization, and Git version control practices.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["Team Collaboration", "UI/UX Prototyping", "Peer Mentorship", "Git Workflows", "Problem Solving"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- Education Journey Section --- */}
        <section className="my-20 sm:my-28">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-10 h-1 bg-white rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              EDUCATION JOURNEY
            </h2>
          </div>

          <div className="relative ml-2 sm:ml-4 pl-6 sm:pl-8 border-l border-white/20 space-y-10 sm:space-y-12">
            {/* Timeline Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[33px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-lg group-hover:scale-110 group-hover:border-emerald-400 transition-all">
                01
              </div>

              <div className="glass-card rounded-xl p-5 sm:p-7 md:p-8 border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      B.Sc. in Computer Science & Engineering
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm mt-1">
                      <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Northern University Bangladesh</span>
                    </div>
                  </div>
                  <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 shrink-0">
                    2023 – Present / 2026
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  Focused on core computer science foundations including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Modern Software Engineering.
                </p>

                <div className="border-t border-white/10 pt-3">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Key Highlights & Activities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Building real-world web apps alongside academic studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Specializing in Full-Stack JavaScript & TypeScript ecosystem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Active participant in university programming sessions and tech talks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Hands-on database architecture with MongoDB and relational queries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[33px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black border-2 border-zinc-600 flex items-center justify-center text-[10px] sm:text-xs font-bold text-zinc-400 shadow-lg group-hover:scale-110 group-hover:border-white transition-all">
                02
              </div>

              <div className="glass-card rounded-xl p-5 sm:p-7 md:p-8 border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Higher Secondary Certificate (HSC)</h3>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm mt-1">
                      <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Science Stream</span>
                    </div>
                  </div>
                  <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 shrink-0">
                    Completed
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Developed strong analytical and mathematical problem-solving skills in Physics, Chemistry, and Higher Mathematics, laying the groundwork for computing and engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Currently Expanding Knowledge Spotlight --- */}
        <div className="my-16 sm:my-20 p-5 sm:p-7 md:p-8 rounded-2xl glass-card border border-white/10 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-white to-zinc-400 text-black flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <Zap className="w-6 sm:w-7 h-6 sm:h-7" />
            </div>

            <div className="flex-1">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                Active Learning Roadmap
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                Currently Expanding Knowledge in Advanced Systems
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Constantly refining engineering practices to build scalable, production-grade applications that withstand real-world loads.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 16 Server Actions",
                  "Turbopack & Build Systems",
                  "Docker Containerization",
                  "PostgreSQL & Prisma ORM",
                  "AI APIs (OpenAI / Gemini)",
                  "Microservices & Serverless",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Featured Projects Section --- */}
        <section id="projects" className="my-20 sm:my-28">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-10 h-1 bg-white rounded-full" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                  FEATURED PROJECTS
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Selected real-world full-stack and web engineering builds
                </p>
              </div>
            </div>

            {/* Responsive Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto">
              {[
                { id: "all", label: "All Projects" },
                { id: "fullstack", label: "Full Stack" },
                { id: "mern", label: "MERN Stack" },
                { id: "frontend", label: "Frontend / UI" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-white text-black shadow-sm font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/25 transition-all duration-300"
              >
                {/* Project Header Banner Preview */}
                <div
                  className={`h-40 sm:h-48 w-full bg-gradient-to-br ${project.imageBg} relative p-5 sm:p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                      Completed
                    </span>
                  </div>

                  <div className="z-10">
                    <div className="text-xl sm:text-2xl font-black text-white group-hover:translate-x-1 transition-transform">
                      {project.title.split("-")[0]}
                    </div>
                  </div>

                  {/* Desktop Hover Action Overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-black/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4 z-20">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-black/80 text-white border border-white/20 text-xs font-bold flex items-center gap-2 hover:bg-black transition-colors shadow-lg"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="border-t border-white/10 pt-3.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Key Architecture & Features
                      </div>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile Quick Tap Action Buttons */}
                  <div className="md:hidden flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-lg bg-white text-black text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-white/10"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Desktop Footer Links */}
                  <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 items-center justify-between text-xs font-medium">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                      >
                        <span>Demo Link</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA Banner */}
          <div className="mt-10 sm:mt-14 text-center">
            <a
              href="https://github.com/sabbirckc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white/5 hover:bg-white text-zinc-200 hover:text-black border border-white/10 hover:border-white text-xs sm:text-sm font-semibold transition-all duration-300 group max-w-full"
            >
              <GithubIcon className="w-4 h-4 shrink-0" />
              <span className="truncate">EXPLORE ALL REPOSITORIES ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* --- Skills & Technical Expertise Section --- */}
        <section id="skills" className="my-20 sm:my-28">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-10 h-1 bg-white rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              SKILLS & EXPERTISE
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-8 md:p-10 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Technical Proficiency Bars */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-5 bg-white inline-block rounded-sm" />
                  Technical Proficiency
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  Real-world experience developed through building dynamic web applications, backend services, and interactive UIs.
                </p>

                <div className="space-y-4">
                  {technicalSkills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-white rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Daily Technologies */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-5 bg-white inline-block rounded-sm" />
                  Tools & Technologies
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  Core tools, frameworks, and developer environments I use daily to architect scalable applications.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {techTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {tool.charAt(0)}
                      </div>
                      <span className="text-xs font-medium text-zinc-300 truncate">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Methodologies & Approaches */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-5 bg-white inline-block rounded-sm" />
                Methodologies & Standards
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {methodologies.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Philosophy / Workflow */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  step: "01",
                  title: "Planning & Architecture",
                  desc: "Requirements scoping, responsive wireframing, component hierarchy design, and database schema modeling.",
                },
                {
                  step: "02",
                  title: "Agile Development",
                  desc: "Clean modular TypeScript code, component isolation, REST API integration, and comprehensive edge-case handling.",
                },
                {
                  step: "03",
                  title: "Testing & Deployment",
                  desc: "Vercel deployments, Lighthouse audits, SEO optimization, responsive verification, and continuous iteration.",
                },
              ].map((phase, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-1">
                    PHASE {phase.step}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{phase.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>

            {/* Developer Quote */}
            <div className="mt-10 sm:mt-12 text-center pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-base sm:text-lg md:text-xl font-light italic text-zinc-300 max-w-2xl mx-auto px-4">
                &ldquo;Don&rsquo;t just write code to make things run—write code to make things extraordinary.&rdquo;
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
                — Sabbir Hossain
              </p>
            </div>
          </div>
        </section>

        {/* --- Testimonials / Peer Endorsement --- */}
        <section className="my-20 sm:my-28">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-10 h-1 bg-white rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              RECOMMENDATIONS & VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <span className="text-5xl sm:text-6xl text-white/10 font-serif absolute top-3 sm:top-4 left-5 sm:left-6">&ldquo;</span>
              <p className="relative z-10 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Sabbir demonstrates a rare dedication to web craftsmanship. His ability to understand modern frontend frameworks, implement clean React architectures, and solve tough logical bugs with enthusiasm makes him an outstanding collaborator.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/30 shrink-0">
                  SH
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Academic & Peer Collaborator</div>
                  <div className="text-[11px] sm:text-xs text-zinc-400">Department of CSE, Northern University Bangladesh</div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <span className="text-5xl sm:text-6xl text-white/10 font-serif absolute top-3 sm:top-4 left-5 sm:left-6">&ldquo;</span>
              <p className="relative z-10 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Consistently proactive, quick to adapt to new technologies, and always focused on delivering clean, responsive user interfaces. His passion for full-stack engineering is evident in every project he tackles.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/30 shrink-0">
                  TC
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Tech Community Member</div>
                  <div className="text-[11px] sm:text-xs text-zinc-400">Open Source & Web Development</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="my-20 sm:my-28 pb-10 sm:pb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-10 h-1 bg-white rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              GET IN TOUCH
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Let&rsquo;s Build Something Great Together
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                  I&rsquo;m currently available for full-time roles, internships, and freelance projects. Whether you have a question or just want to connect, my inbox is always open.
                </p>

                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-zinc-500 font-mono uppercase">Direct Email</div>
                      <a
                        href="mailto:sabbirhossainnubian@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                      >
                        sabbirhossainnubian@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-zinc-500 font-mono uppercase">Location</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Dhaka, Bangladesh (Remote Worldwide)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                      <LinkedinIcon className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-zinc-500 font-mono uppercase">LinkedIn Profile</div>
                      <a
                        href="https://www.linkedin.com/in/sabbir-hossainnubian/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        linkedin.com/in/sabbir-hossainnubian
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Send Me a Message</h3>

                {formSubmitted ? (
                  <div className="p-6 sm:p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-zinc-300">
                      Thank you for reaching out. I will review your message and reply as soon as possible!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Hi Sabbir, let's collaborate on..."
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3 sm:py-3.5 rounded-lg bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-white/10 bg-black/70 backdrop-blur-xl py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1">
              <span className="text-white font-black tracking-tight text-base sm:text-lg">SABBIR</span>
              <span className="text-zinc-500 font-mono text-xs sm:text-sm">.DEV</span>
            </div>
            <span className="text-xs text-zinc-500 sm:ml-2">
              © {new Date().getFullYear()} Sabbir Hossain. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href="https://github.com/sabbirckc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-hossainnubian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:sabbirhossainnubian@gmail.com"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}