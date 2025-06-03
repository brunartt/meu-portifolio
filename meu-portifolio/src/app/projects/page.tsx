"use client"

import { motion } from 'framer-motion'

const projects = [
  {
    title: "Portfolio Bruna",
    description: "Meu portfólio pessoal com Next.js e Tailwind",
    tech: "Next.js, Tailwind, Framer Motion",
    link: "#"
  },
  {
    title: "API Empresas",
    description: "API RESTful com Spring Boot para cadastro de empresas.",
    tech: "Spring Boot, Java",
    link: "#"
  },
  {
    title: "App de Clima",
    description: "Aplicativo em Flutter que mostra o clima em tempo real.",
    tech: "Flutter, OpenWeather",
    link: "#"
  },
]

export default function ProjectsPage() {
  return (
    <section className="bg-[#FDF6F0] min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#B88C9E] mb-10">Projetos 💼</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#FFD1DC] hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold text-[#A2678A]">{project.title}</h3>
              <p className="text-[#6D5D6E] mt-2">{project.description}</p>
              <p className="text-sm text-[#865858] mt-1">🛠 {project.tech}</p>
              <a href={project.link} className="text-[#8A4F7D] underline mt-3 inline-block hover:text-[#A2678A]">Ver Projeto</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
