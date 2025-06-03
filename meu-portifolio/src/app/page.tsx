"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="text-center bg-[#FFF8F3] min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-8 bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-2xl mx-auto border border-[#FDE2E4]"
      >
        <Image 
          src="/avatar-bruna.png" 
          alt="Foto da Bruna" 
          width={160} 
          height={160} 
          className="rounded-full shadow-lg border-4 border-[#FFD1DC]"
        />

        <h2 className="text-4xl font-bold text-[#A2678A]">Olá, eu sou a Bruna! 💻✨</h2>
        <p className="text-lg max-w-xl text-[#6D5D6E]">
          Desenvolvedora <span className="font-semibold text-[#865858]">Fullstack</span> com foco em construir soluções digitais modernas, eficientes e com ótima experiência do usuário. Tenho experiência com <strong>React</strong>, <strong>Next.js</strong>, <strong>Spring Boot</strong> e <strong>Flutter</strong>. Estou pronta para colaborar em projetos e desafios profissionais.
        </p>

        <motion.a 
          href="/projects" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-4 bg-gradient-to-r from-[#FFD1DC] to-[#FBB1C3] text-[#8A4F7D] px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Ver Projetos 💼
        </motion.a>
      </motion.div>
    </section>
  )
}
