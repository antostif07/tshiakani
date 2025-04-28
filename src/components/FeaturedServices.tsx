'use client'

import { motion } from 'framer-motion'
import { Droplet, Mountain, Leaf } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: <Droplet size={40} className="text-gold" />,
    title: 'Oil & Gas',
    description: 'Leading innovation in exploration and sustainable energy solutions.',
    image: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    href: '/services#oil-gas'
  },
  {
    icon: <Mountain size={40} className="text-gold" />,
    title: 'Mining',
    description: 'Responsible resource extraction with cutting-edge technology.',
    image: 'https://images.pexels.com/photos/1579264/pexels-photo-1579264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    href: '/services#mining'
  },
  {
    icon: <Leaf size={40} className="text-gold" />,
    title: 'Agriculture',
    description: 'Sustainable farming practices and innovative technologies.',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    href: '/services#agriculture'
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-navy">
            Our Core Services
          </h2>
          <p className="font-inter text-lg text-steel max-w-2xl mx-auto">
            Discover how our innovative solutions are transforming industries and creating sustainable value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-60 transition-opacity duration-500 group-hover:bg-opacity-70" />
              </div>
              
              <div className="relative p-8 text-white h-full flex flex-col justify-end">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-montserrat text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-inter mb-6 text-gray-200">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors"
                >
                  <span>Learn More</span>
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
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}