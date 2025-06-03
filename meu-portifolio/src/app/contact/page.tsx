"use client"

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section className="bg-[#FFEFF6] min-h-screen rounded-4xl flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-xl text-center border border-[#FBC4D5]"
      >
        <h2 className="text-4xl font-bold text-[#B36A87] mb-4">Entre em Contato ✉️</h2>
        <p className="text-[#6D5D6E] mb-6">Quer conversar sobre um projeto, oportunidade ou só bater um papo? Me chama!</p>
        <a 
          href="mailto:bruna@email.com"
          className="bg-[#FFD1DC] text-[#8A4F7D] px-6 py-3 rounded-full shadow hover:shadow-lg transition"
        >
          Enviar Email 💌
        </a>
      </motion.div>
    </section>
  )
}
