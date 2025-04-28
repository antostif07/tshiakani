'use client'

import { motion } from 'framer-motion'
import { Droplet, Mountain, Leaf, Pill, Monitor, Truck } from 'lucide-react'

const services = [
  {
    id: 'oil',
    icon: <Droplet size={40} className="text-gold" />,
    title: 'Oil & Gas',
    description: 'Leading innovation in exploration, production, and sustainable energy solutions.'
  },
  {
    id: 'mining',
    icon: <Mountain size={40} className="text-gold" />,
    title: 'Mining',
    description: 'Responsible resource extraction with cutting-edge technology and environmental stewardship.'
  },
  {
    id: 'agriculture',
    icon: <Leaf size={40} className="text-gold" />,
    title: 'Agriculture',
    description: 'Sustainable farming practices and innovative agricultural technologies.'
  },
  {
    id: 'pharma',
    icon: <Pill size={40} className="text-gold" />,
    title: 'Pharmaceuticals',
    description: 'Research-driven healthcare solutions and medical innovations.'
  },
  {
    id: 'it',
    icon: <Monitor size={40} className="text-gold" />,
    title: 'Information Technology',
    description: 'Digital transformation and technological solutions for modern businesses.'
  },
  {
    id: 'transport',
    icon: <Truck size={40} className="text-gold" />,
    title: 'Transport & Logistics',
    description: 'Efficient supply chain solutions and modern logistics infrastructure.'
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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-navy">
            Our Services
          </h2>
          <p className="font-inter text-lg text-steel">
            Delivering excellence across diverse industries with innovative solutions
            and sustainable practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-montserrat text-xl font-semibold mb-4 text-navy">
                {service.title}
              </h3>
              <p className="font-inter text-steel mb-6">
                {service.description}
              </p>
              <motion.a
                href={`#${service.id}`}
                className="inline-flex items-center text-gold hover:text-gold-light transition-colors duration-200 font-inter"
                whileHover={{ x: 5 }}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}