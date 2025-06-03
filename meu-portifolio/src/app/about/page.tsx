"use client"

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="bg-[#FFF0F5] min-h-screen rounded-4xl flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-3xl text-center border border-[#FFD1DC]"
      >
        <h1 className="text-4xl font-bold text-[#C27BA0] mb-4">Sobre Mim 🌷</h1>
        <p className="text-lg text-[#6D5D6E] leading-7">
          Sou a <span className="font-semibold text-[#A2678A]">Bruna</span>, desenvolvedora fullstack com foco em criar interfaces intuitivas e APIs eficientes. <br />
          Gosto de unir design e código, buscando sempre experiências bonitas e acessíveis.
        </p>
        <p className="mt-4 text-[#865858]">
          🌱 Tecnologias que amo trabalhar: <br />
          <strong>React, Next.js, Spring Boot, Flutter, Tailwind, PostgreSQL.</strong>
        </p>
      </motion.div>
    </section>
  )
}
