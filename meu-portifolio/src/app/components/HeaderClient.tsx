// src/app/components/HeaderClient.tsx  (client component)
"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { FaHome, FaUserAlt, FaCode, FaEnvelope } from 'react-icons/fa'

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-[#F8E8EE] text-[#865858] sticky top-0 z-50 shadow-lg transition-all duration-300
      ${scrolled ? "py-2 shadow-xl" : "py-4 shadow-md"}
      `}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Bruna Roberta</h1>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/" className="flex items-center gap-2 hover:text-[#B88C9E] transition">
            <FaHome /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 hover:text-[#B88C9E] transition">
            <FaUserAlt /> Sobre
          </Link>
          <Link href="/projects" className="flex items-center gap-2 hover:text-[#B88C9E] transition">
            <FaCode /> Projetos
          </Link>
          <Link href="/contact" className="flex items-center gap-2 hover:text-[#B88C9E] transition">
            <FaEnvelope /> Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
