// src/app/layout.tsx  (server component)
import './globals.css'
import { Inter } from 'next/font/google'
import HeaderClient from './components/HeaderClient'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Portfólio da Bruna',
  description: 'Web Developer Fullstack',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#FDF6F0] text-[#4A4A4A] flex flex-col min-h-screen`}>
        <HeaderClient />
        <main className="px-4 py-10 flex-grow">
          {children}
        </main>
        <footer className="text-center py-6 text-sm text-[#865858] bg-[#F8E8EE] mt-auto">
          Feito com 💖 por Bruna
        </footer>
      </body>
    </html>
  )
}
