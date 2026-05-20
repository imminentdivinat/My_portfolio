"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Scale,
  Send,
  Sparkles,
  Star,
  Sun,
  X,
} from "lucide-react";

type Project = {
  title: string;
  image: string;
  summary: string;
  features: string[];
  tags: string[];
  live: string;
  github: string;
};

const contact = {
  email: "jreyriveraa@gmail.com",
  phone: "+63 991 400 6776",
  location: "Cagayan de Oro City, Philippines",
};

const socials = {
  github: "https://github.com/imminentdivinat",
  linkedin: "https://www.linkedin.com/in/junrey-rivera-1a800b375/",
};

const awards = [
  {
    title: "Sample Web Development Certificate",
    year: "2026",
    text: "Temporary certification copy for a completed web development program covering responsive interfaces, backend fundamentals, and project deployment.",
    tags: ["Certificate", "Web Dev", "Responsive UI", "Deployment"],
  },
  {
    title: "Sample Automation Workshop",
    year: "2025",
    text: "Placeholder achievement for an automation workshop focused on streamlining business processes, integrating tools, and improving task handoffs.",
    tags: ["Automation", "Workflow", "Tools"],
  },
  {
    title: "Sample AI Creative Design Recognition",
    year: "2025",
    text: "Dummy award description for AI-assisted visual content, including business ad images, promo graphics, and stylized Webtoon image concepts.",
    tags: ["AI Images", "Graphic Design", "Webtoon Art"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "REST APIs", "Authentication", "CRUD Systems", "MySQL"],
  },
  {
    title: "Automation",
    skills: ["Business Workflows", "Dashboards", "Integrations", "Data Handling", "Operations"],
  },
  {
    title: "AI Creative",
    skills: ["AI Image Creation", "Business Ads", "Promo Graphics", "Sold-Out Posts", "Webtoon Visuals"],
  },
  {
    title: "Tools",
    skills: ["Git", "Framer Motion", "Canva", "Figma Handoff", "Deployment", "Debugging"],
  },
];

const projects: Project[] = [
  {
    title: "Inventory System",
    image: "INV",
    summary:
      "A full-stack inventory platform for tracking products, users, roles, and day-to-day stock movement with a practical admin workflow.",
    features: [
      "Role-based access for administrators and staff",
      "Product, category, and stock movement management",
      "Searchable records for faster operations",
      "Dashboard-ready structure for reporting",
    ],
    tags: ["React", "Laravel", "MySQL", "CRUD"],
    live: "https://example.com/inventory-demo",
    github: "https://example.com/inventory-code",
  },
  {
    title: "E-commerce App",
    image: "SHOP",
    summary:
      "A storefront and checkout simulation focused on clean browsing, cart management, and conversion-friendly product flows.",
    features: [
      "Product listing and cart interactions",
      "Checkout simulation with clear totals",
      "Mobile-first customer journey",
      "Reusable UI components for catalog pages",
    ],
    tags: ["React", "Tailwind", "Cart", "Checkout"],
    live: "https://example.com/ecommerce-demo",
    github: "https://example.com/ecommerce-code",
  },
  {
    title: "AI Visual Content Pack",
    image: "AIMG",
    summary:
      "A creative content set for businesses using AI image generation and graphic design direction for ads, promos, sold-out announcements, and social posts.",
    features: [
      "Business ad image concepts for products and services",
      "Promo and sold-out graphics for social media campaigns",
      "AI-assisted visual direction with brand-friendly layouts",
      "Reusable content formats for fast marketing updates",
    ],
    tags: ["AI Images", "Graphic Design", "Ads", "Promo"],
    live: "https://example.com/ai-content-demo",
    github: "https://example.com/ai-content-portfolio",
  },
  {
    title: "Automation Dashboard",
    image: "AUTO",
    summary:
      "A business operations dashboard concept that turns repetitive manual tracking into cleaner status views and action queues.",
    features: [
      "Status cards for high-priority work",
      "Automated workflow-ready data model",
      "Readable metrics for business owners",
      "Designed for repeated daily use",
    ],
    tags: ["Automation", "Dashboard", "APIs", "Ops"],
    live: "https://example.com/automation-demo",
    github: "https://example.com/automation-code",
  },
];

const experiences = [
  {
    role: "AI Image Content Creator",
    company: "Sample Creative Projects",
    date: "Recent Experience",
    bullets: [
      "Create AI-assisted images for business ads, promotional posts, and sold-out announcements.",
      "Develop Webtoon-style AI image concepts with consistent visual mood, character direction, and scene framing.",
      "Prepare graphic design layouts for social media content that feel clear, polished, and brand-ready.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Sample Digital Solutions",
    date: "Jan 2025 - Present",
    bullets: [
      "Build web applications that combine clean interfaces with practical backend workflows.",
      "Create CRUD systems, dashboards, and API-backed features for business operations.",
      "Translate user needs into responsive pages that remain usable on desktop and mobile.",
    ],
  },
  {
    role: "Automation Builder",
    company: "Sample Operations Studio",
    date: "Jun 2024 - Dec 2024",
    bullets: [
      "Design small automation tools that reduce repeated admin work and manual tracking.",
      "Connect frontend experiences to structured data and reliable operational flows.",
      "Focus on clear handoff, maintainable code, and steady iteration.",
    ],
  },
];

const navItems = ["Awards", "Skills", "Projects", "Experience", "Contact"];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("saul-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    window.localStorage.setItem("saul-theme", theme);
  }, [theme]);

  return (
    <main suppressHydrationWarning className={`theme-saul-${theme} saul-page min-h-screen overflow-x-hidden transition-colors duration-300`}>
      <motion.div
        style={{ scaleX }}
        className="saul-progress fixed left-0 right-0 top-0 z-50 h-1 origin-left"
      />

      <div className="saul-backdrop fixed inset-0 -z-10" />

      <header className="fixed left-0 right-0 top-4 z-40 px-4">
        <nav className="saul-nav mx-auto flex max-w-6xl items-center justify-between rounded-full border-2 px-4 py-3 backdrop-blur md:px-5">
          <a href="#home" className="flex items-center gap-3 font-black tracking-wide">
            <span className="saul-logo grid size-10 place-items-center rounded-sm border-2">
              JR
            </span>
            <span className="hidden text-sm uppercase sm:block">Junrey Rivera</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold uppercase md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="saul-nav-link">
                {item}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="saul-btn-red inline-flex items-center gap-2 rounded-sm border-2 px-4 py-2 text-sm font-black uppercase transition hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Hire Me
          </a>
          <button
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="saul-toggle grid size-11 place-items-center rounded-full border-2 transition hover:-translate-y-0.5"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
      </header>

      <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-14 pt-32 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="saul-chip mb-6 inline-flex items-center gap-2 rounded-sm border-2 px-3 py-2 text-xs font-black uppercase">
            <Scale size={16} className="saul-text-red" />
            Available for Projects
          </div>
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-normal sm:text-7xl lg:text-8xl">
            Hi, I&apos;m Junrey Rivera
          </h1>
          <p className="saul-text-red mt-5 max-w-2xl text-2xl font-black uppercase">
            Full-Stack Developer, Automation Builder & AI Creative Designer
          </p>
          <p className="saul-text-body mt-5 max-w-2xl text-lg leading-8">
            I build web applications, dashboards, automation systems, and AI-powered visual content for business ads, promos, sold-out posts, and Webtoon-style images.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            <ContactChip icon={<MapPin size={17} />} text={contact.location} />
            <ContactChip icon={<Phone size={17} />} text={contact.phone} />
            <ContactChip icon={<Mail size={17} />} text={contact.email} />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="saul-btn-red inline-flex items-center gap-2 rounded-sm border-2 px-6 py-3 font-black uppercase transition hover:-translate-y-1"
            >
              Get In Touch <Send size={18} />
            </a>
            <a
              href="#projects"
              className="saul-btn-yellow inline-flex items-center gap-2 rounded-sm border-2 px-6 py-3 font-black uppercase transition hover:-translate-y-1"
            >
              View Work <ArrowUpRight size={18} />
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="saul-btn-white inline-flex items-center gap-2 rounded-sm border-2 px-6 py-3 font-black uppercase transition hover:-translate-y-1"
            >
              Resume <Download size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 2, y: 20 }}
          animate={{ opacity: 1, rotate: -1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-sm border-2 border-current bg-red-600" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-sm border-2 border-current bg-yellow-300" />
          <div className="saul-profile relative border-4 p-4">
            <Image
              src="/Profile.jpeg"
              alt="Junrey Rivera"
              width={640}
              height={800}
              priority
              unoptimized
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {["Web Dev", "Automation", "AI Images"].map((item) => (
                <span key={item} className="saul-tag rounded-sm border-2 px-2 py-2 text-xs font-black uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Section id="awards" eyebrow="Awards & Certifications" title="Proof I keep sharpening the craft">
        <div className="grid gap-5 md:grid-cols-3">
          {awards.map((award) => (
            <motion.article
              key={award.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="saul-card border-2 p-5"
            >
              <div className="saul-tag mb-5 grid h-36 place-items-center border-2">
                <Award size={48} className="saul-text-red" />
              </div>
              <p className="saul-text-red text-sm font-black uppercase">{award.year}</p>
              <h3 className="mt-2 text-xl font-black uppercase">{award.title}</h3>
              <p className="saul-text-body mt-3 leading-7">{award.text}</p>
              <TagList tags={award.tags} />
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills & Expertise" title="The stack behind the work">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="saul-panel border-2 p-5">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={20} className="saul-text-red" />
                <h3 className="text-lg font-black uppercase">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="saul-chip rounded-sm border-2 px-3 py-2 text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected case files">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              className="saul-card flex h-full flex-col border-2"
            >
              <button
                onClick={() => setSelected(project)}
                className="group flex h-full flex-col text-left"
                aria-label={`Open ${project.title}`}
              >
                <div className="saul-project-banner grid h-48 place-items-center border-b-2 text-5xl font-black">
                  {project.image}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-2xl font-black uppercase">{project.title}</h3>
                  <p className="saul-text-body mt-3 leading-7">{project.summary}</p>
                  <TagList tags={project.tags} />
                  <span className="saul-text-red mt-auto inline-flex items-center gap-2 pt-5 font-black uppercase">
                    View Details <ArrowUpRight size={18} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Work / Project Experience" title="How I show up on projects">
        <div className="space-y-5">
          {experiences.map((job) => (
            <article key={job.role} className="saul-panel border-2 p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="saul-text-red" />
                    <h3 className="text-2xl font-black uppercase">{job.role}</h3>
                  </div>
                  <p className="saul-text-body mt-2 font-bold">{job.company}</p>
                </div>
                <span className="saul-tag w-fit rounded-sm border-2 px-3 py-2 text-sm font-black uppercase">
                  {job.date}
                </span>
              </div>
              <ul className="mt-5 grid gap-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="saul-text-body flex gap-3 leading-7">
                    <CheckCircle2 className="saul-text-red mt-1 shrink-0" size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section id="contact" className="saul-footer px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase text-yellow-300">Contact</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-6xl">
              Let&apos;s build something useful, sharp, and hard to ignore.
            </h2>
            <p className="saul-footer-muted mt-5 max-w-2xl text-lg leading-8">
              I&apos;m open to freelance work, collaboration, and full-time opportunities around web apps, automation, business systems, and AI-assisted visual content creation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${contact.email}`} className="saul-footer-border inline-flex items-center gap-2 rounded-sm border-2 bg-red-600 px-6 py-3 font-black uppercase shadow-lg">
                Email Me <Mail size={18} />
              </a>
              <a href={socials.github} aria-label="GitHub" className="saul-footer-border grid size-12 place-items-center rounded-sm border-2 bg-yellow-300 text-black">
                <Github />
              </a>
              <a href={socials.linkedin} aria-label="LinkedIn" className="saul-footer-border grid size-12 place-items-center rounded-sm border-2 bg-yellow-300 text-black">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="saul-footer-card border-2 p-5">
            <div className="flex items-center gap-3 border-b-2 border-current pb-4">
              <div className="grid size-11 place-items-center rounded-sm bg-red-600 text-white">
                <MessageCircle />
              </div>
              <div>
                <h3 className="font-black uppercase">Portfolio Assistant</h3>
                <p className="saul-text-muted text-sm font-bold">Ask about projects, AI visuals, skills, or resume.</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-6">
              <p className="saul-chip saul-chat-bubble w-fit rounded-sm border-2 p-3 font-bold">
                Hello! I can point recruiters toward Junrey&apos;s web, automation, and AI creative work.
              </p>
              <p className="saul-tag saul-chat-bubble ml-auto w-fit rounded-sm border-2 p-3 font-bold">
                Show me the projects, AI images, and resume.
              </p>
            </div>
            <button
              onClick={() => setResumeOpen(true)}
              className="saul-btn-red mt-5 flex w-full items-center justify-center gap-2 rounded-sm border-2 px-4 py-3 font-black uppercase"
            >
              Open Resume <Download size={18} />
            </button>
          </div>
        </div>
        <p className="saul-footer-muted mx-auto mt-14 max-w-7xl text-sm font-bold">
          Copyright {year} Junrey Rivera. All Rights Reserved.
        </p>
      </section>

      {selected && (
        <div className="saul-overlay fixed inset-0 z-50 grid place-items-center p-5" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="saul-modal max-h-[90vh] w-full max-w-2xl overflow-auto border-2 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="saul-text-red font-black uppercase">Project File</p>
                <h2 className="mt-1 text-3xl font-black uppercase">{selected.title}</h2>
              </div>
              <button onClick={() => setSelected(null)} aria-label="Close project details" className="saul-chip grid size-10 shrink-0 place-items-center border-2">
                <X />
              </button>
            </div>
            <p className="saul-text-body mt-5 leading-8">{selected.summary}</p>
            <ul className="mt-5 grid gap-3">
              {selected.features.map((feature) => (
                <li key={feature} className="flex gap-3 leading-7">
                  <Star className="mt-1 shrink-0 fill-yellow-300 text-current" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <TagList tags={selected.tags} />
            <div className="mt-6 flex gap-3">
              <a href={selected.github} className="saul-btn-white inline-flex items-center gap-2 border-2 px-4 py-2 font-black uppercase">
                <Github size={18} /> Code
              </a>
              <a href={selected.live} className="saul-btn-yellow inline-flex items-center gap-2 border-2 px-4 py-2 font-black uppercase">
                Demo <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {resumeOpen && (
        <div className="saul-overlay fixed inset-0 z-50 grid place-items-center p-4">
          <div className="saul-resume-shell relative h-[90vh] w-full max-w-5xl border-2">
            <button
              onClick={() => setResumeOpen(false)}
              aria-label="Close resume"
              className="saul-tag absolute right-3 top-3 z-10 grid size-10 place-items-center border-2"
            >
              <X />
            </button>
            <iframe src="/Junrey_Rivera_resume.pdf" title="Junrey Rivera Resume" className="h-full w-full" />
            <a
              href="/Junrey_Rivera_resume.pdf"
              download
              className="saul-btn-red absolute bottom-3 right-3 inline-flex items-center gap-2 border-2 px-4 py-2 font-black uppercase"
            >
              Download <Download size={18} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="saul-text-red text-sm font-black uppercase">{eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="saul-chip flex min-h-14 items-center gap-2 rounded-sm border-2 px-3 py-2 text-sm font-bold">
      <span className="saul-text-red">{icon}</span>
      <span className="break-words">{text}</span>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="saul-tag rounded-sm border-2 px-2.5 py-1 text-xs font-black uppercase">
          {tag}
        </span>
      ))}
    </div>
  );
}



