'use client'

import { motion } from 'framer-motion'
import Hero from "@/src/components/Hero";
import FeaturedServices from "@/src/components/FeaturedServices";
import Stats from "@/src/components/Stats";
import Testimonials from "@/src/components/Testimonials";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      <Hero />
      <FeaturedServices />
      <Stats />
      <Testimonials />
      {/*<LatestNews />*/}
      {/*<Partners />*/}
    </motion.main>
  )
}