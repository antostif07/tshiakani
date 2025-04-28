'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react'
import {navItems} from "@/src/constants";

const socialLinks = [
  { icon: <Facebook size={20} />, href: '#' },
  { icon: <Twitter size={20} />, href: '#' },
  { icon: <Linkedin size={20} />, href: '#' },
  { icon: <Instagram size={20} />, href: '#' }
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen size={32} className="text-gold" />
              <div>
                <span className="font-montserrat font-bold text-xl">Tshiakani</span>
                <span className="font-inter text-xs block text-gray-400">SOCIETE GENERALE</span>
              </div>
            </div>
            <p className="font-inter text-gray-400">
              Pioneering innovation across industries since 1995
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-montserrat text-lg font-semibold mb-4">Our Services</h3>
            <ul className="grid grid-cols-2 gap-y-2">
              {navItems[2].dropdown?.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="font-inter text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-montserrat text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-gold transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="font-inter text-gray-400 text-sm">
            © {new Date().getFullYear()} Tshiakani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}