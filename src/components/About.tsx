'use client'

import { motion } from 'framer-motion'
import { Globe2, Users, Target, Award } from 'lucide-react'

const features = [
  {
    icon: <Globe2 size={32} className="text-gold" />,
    title: 'Global Reach',
    description: 'Operating across continents with a diverse portfolio of businesses'
  },
  {
    icon: <Users size={32} className="text-gold" />,
    title: 'Expert Team',
    description: 'Industry leaders and innovators driving sustainable growth'
  },
  {
    icon: <Target size={32} className="text-gold" />,
    title: 'Strategic Vision',
    description: 'Forward-thinking approach to market opportunities and challenges'
  },
  {
    icon: <Award size={32} className="text-gold" />,
    title: 'Excellence',
    description: 'Committed to the highest standards across all operations'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-navy">
            About Tshiakani
          </h2>
          <p className="font-inter text-lg text-steel">
            Founded in 1995, Tshiakani has grown into a global force in multiple industries,
            driven by innovation and sustainable practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-montserrat text-xl font-semibold mb-3 text-navy">
                {feature.title}
              </h3>
              <p className="font-inter text-steel">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}