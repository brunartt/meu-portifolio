"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  return (

    <main className="w-full py-20 flex-grow text-white flex flex-col md:flex-row">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex-1 flex justify-center items-center mt-10 md:mt-0"
      >
      <Image
        src="/assets/aspiral.png"
        alt="Foto da Bruna"
        width={224}
        height={224}
        className="object-cover"
      />
      </motion.div>
      {/* Texto à esquerda com animação */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left text-[#6D5D6E] px-4 flex flex-col justify-center"
      >
        <h2 className="animate-typing overflow-hidden border-r-4 border-r pr-5 text-5xl text-[#865858] font-bold">
          Código limpo. Interfaces eficientes. Resultados reais.
        </h2>
        <p className="text-lg mb-6">
          Desenvolvedora junior com experiência em <span className="font-semibold text-[#865858]">Front-end</span> focada em performance e experiência do usuário.
        </p>

        {/* Botão com texto centralizado e padding lateral menor */}
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block font-semibold w-1/2 bg-gradient-to-r from-[#FFD1DC] to-[#FBB1C3] text-[#8A4F7D] px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-center"
        >
          Ver Projetos
        </motion.a>
      </motion.div>

      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex-1 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#FFD1DC] shadow-lg">
          <Image
            src="/assets/icon.jpg"
            alt="Foto da Bruna"
            width={224}
            height={224}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

    </main>
   
  )
}
