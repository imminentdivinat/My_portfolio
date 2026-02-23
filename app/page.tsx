"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">

      {/* HERO */}
      <section id="hero" className="flex flex-col items-center justify-center text-center px-6 py-40">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          JUNREY R. RIVERA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-neutral-400 max-w-xl"
        >
          Freelance Web Developer & Automation Specialist | Helping Businesses Worldwide Optimize Workflows & Scale Digitally
        </motion.p>

        {/* Social Links */}
        <div className="mt-4 flex gap-6 justify-center">
          <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-3xl transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl transition-transform transform hover:scale-110">
            <FaGithub />
          </a>
        </div>

        {/* Download Resume separate */}
        <div className="mt-6">
          <a href="/Resume.pdf" download className="rounded-2xl px-8 py-6 text-lg flex items-center gap-2 border border-neutral-600 hover:border-white hover:text-white transition">
            <FaDownload /> Download Resume
          </a>
        </div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <section id="summary" className="px-6 py-28 max-w-4xl mx-auto">
        <motion.h2 className="text-3xl font-semibold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Professional Summary
        </motion.h2>

        <p className="text-neutral-400 leading-relaxed text-lg">
          Information Technology graduate with experience in backend web development and virtual assistance. Skilled in PHP, JavaScript, and web technologies, with growing expertise in automation tools, AI-powered workflows, and process optimization. I help businesses worldwide automate processes, streamline operations, and build scalable digital solutions.
        </p>
      </section>

      {/* CORE SKILLS */}
      <section id="skills" className="px-6 py-28 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-semibold mb-12 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Core Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Automation & AI Tools (ChatGPT, AI Workflows)",
              "Backend Development (PHP, JavaScript)",
              "Web Technologies (HTML, Basic CSS)",
              "API Integration Fundamentals",
              "Database Concepts (MySQL Basics)",
              "Process Optimization",
              "Data Entry & Digital Organization",
              "Technical Troubleshooting",
              "Video Editing (Adobe Premiere Pro)",
              "Microsoft Office & Google Workspace"
            ].map((skill, i) => (
              <Card key={i} className="bg-black border border-neutral-800 rounded-2xl hover:border-neutral-600 transition">
                <CardContent className="p-6 text-center">
                  <p className="text-neutral-300">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="px-6 py-28 max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-semibold mb-12 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Work Experience
        </motion.h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold">Back-End Developer Intern</h3>
            <p className="text-neutral-500">Mabizza IT Solution | 2023</p>
            <ul className="list-disc list-inside mt-4 text-neutral-400 space-y-2">
              <li>Developed backend features using PHP and JavaScript</li>
              <li>Supported database connectivity and data processing logic</li>
              <li>Debugged and tested web applications to improve performance</li>
              <li>Collaborated on system improvements and feature updates</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Freelance Virtual Assistant</h3>
            <p className="text-neutral-500">2021 – 2022</p>
            <ul className="list-disc list-inside mt-4 text-neutral-400 space-y-2">
              <li>Managed administrative tasks, data entry, and email coordination</li>
              <li>Conducted online research and organized digital documentation</li>
              <li>Assisted in workflow organization and task automation</li>
              <li>Provided technical and client support remotely</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section id="projects" className="px-6 py-28 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl font-semibold mb-10 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Project Experience
          </motion.h2>

          <div className="space-y-6 text-neutral-400">
            <p className="text-lg font-semibold">Web Development Projects</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Developed and modified backend functionality using PHP</li>
              <li>Implemented form handling and database interaction</li>
              <li>Optimized application structure and logic</li>
            </ul>

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 py-28 max-w-4xl mx-auto text-center">
        <motion.h2 className="text-3xl font-semibold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Education
        </motion.h2>

        <p className="text-neutral-400 text-lg">Bachelor of Science in Information Technology</p>
        <p className="text-neutral-500">Capitol University | 2023</p>
      </section>

    </main>
  );
}