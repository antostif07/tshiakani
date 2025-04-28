'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, GreenTech Solutions',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: 'Tshiakani has been instrumental in helping us achieve our sustainability goals. Their innovative solutions have transformed our operations.'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director, Mining Corp',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: "The expertise and professionalism of the Tshiakani team are unmatched. They've helped us optimize our processes and reduce costs significantly."
  },
  {
    name: 'Emma Williams',
    role: 'Head of Innovation, AgriTech',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: 'Working with Tshiakani has been transformative for our agricultural practices. Their solutions are both innovative and sustainable.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-navy">
            What Our Clients Say
          </h2>
          <p className="font-inter text-lg text-steel max-w-2xl mx-auto">
            Hear from industry leaders about their experience working with Tshiakani
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-gold fill-current"
                  />
                ))}
              </div>
              <p className="font-inter text-steel mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-navy">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-steel">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}