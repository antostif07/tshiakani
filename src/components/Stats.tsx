'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '6', label: 'Industry Sectors' },
  { number: '1000+', label: 'Employees Worldwide' },
  { number: '30+', label: 'Countries Served' }
]

export default function Stats() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1 
                }}
                className="font-montserrat text-4xl md:text-5xl font-bold mb-2 text-gold"
              >
                {stat.number}
              </motion.div>
              <div className="font-inter text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}