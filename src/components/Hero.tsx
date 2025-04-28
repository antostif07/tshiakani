'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.8), rgba(10, 35, 66, 0.9)), url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 pt-24 z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow"
          >
            Tshiakani
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl text-shadow-sm font-light"
          >
            Powering Progress Across Industries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-lg text-gray-200 mb-12 max-w-2xl"
          >
            A diversified conglomerate pioneering innovation in Oil, Mining, Agriculture, 
            Pharmaceuticals, IT, Transport and beyond.
          </motion.p>

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-md shadow-md hover:bg-gold-light transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Discover Our Solutions</span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-gold rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white rounded-full" />
      </motion.div>
    </section>
  )
}