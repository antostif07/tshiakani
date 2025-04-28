'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: <MapPin size={24} className="text-gold" />,
    title: 'Address',
    content: '123 Business Avenue, Kinshasa, DRC'
  },
  {
    icon: <Phone size={24} className="text-gold" />,
    title: 'Phone',
    content: '+243 123 456 789'
  },
  {
    icon: <Mail size={24} className="text-gold" />,
    title: 'Email',
    content: 'contact@tshiakani.com'
  },
  {
    icon: <Clock size={24} className="text-gold" />,
    title: 'Hours',
    content: 'Mon - Fri: 8:00 - 17:00'
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

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-navy">
            Contact Us
          </h2>
          <p className="font-inter text-lg text-steel">
            Get in touch with our team to explore how we can work together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg text-center"
              whileHover={{ y: -5 }}
            >
              <div className="inline-block mb-4">
                {info.icon}
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2 text-navy">
                {info.title}
              </h3>
              <p className="font-inter text-steel">
                {info.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}