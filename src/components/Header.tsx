'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Menu, X } from 'lucide-react'
import Navigation from './Navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  )
  
  const textColor = useTransform(
    scrollY,
    [0, 50],
    ['rgb(255, 255, 255)', 'rgb(10, 35, 66)']
  )

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ['0 4px 6px rgba(0, 0, 0, 0)', '0 4px 6px rgba(0, 0, 0, 0.1)']
  )

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        color: textColor,
        boxShadow
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6"
    >
      <nav className="container mx-auto flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <BookOpen className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="font-montserrat font-bold text-xl tracking-wider">
              Tshiakani
            </span>
            <span className="font-inter text-xs font-medium opacity-80">
              SOCIETE GENERALE
            </span>
          </div>
        </motion.a>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <motion.button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
        >
          <div className="container mx-auto p-4">
            <Navigation mobile onClose={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}