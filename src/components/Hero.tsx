'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image and Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    // Conserve l'arrière-plan existant
                    backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.8), rgba(10, 35, 66, 0.9)), url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Content Container */}
            <div className="container mx-auto px-4 sm:px-24 pt-24 z-10">
                <div className="max-w-4xl">
                    {/* Company Name (H1) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow"
                    >
                        Tshiakani {/* Nom de l'entreprise conservé */}
                    </motion.h1>

                    {/* Subtitle (H2) - Updated */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-inter text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl text-shadow-sm font-light"
                    >
                        {/* --- NOUVEAU TEXTE H2 --- */}
                        Votre Partenaire Stratégique pour le Développement Industriel, Commercial et Technologique.
                        {/* Alternative plus directe : "Acteur Multisectoriel au Service de la Croissance." */}
                        {/* Alternative focalisée sur la RDC: "Engagé dans le Développement Multisectoriel en RDC et à l'International." */}
                    </motion.h2>

                    {/* Description Paragraph (P) - Updated */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-inter text-lg text-gray-200 mb-12 max-w-2xl"
                    >
                        {/* --- NOUVEAU TEXTE P --- */}
                        {`Groupe congolais diversifié, Tshiakani opère dans des secteurs clés tels que les **hydrocarbures, l'agriculture, l'industrialisation, l'immobilier, les transports, la haute technologie** et le **génie civil**. Nous offrons également une gamme complète de **services aux entreprises** (commerce, facilitation, sous-traitance, assurances, etc.) pour stimuler la croissance en République Démocratique du Congo et à l'international.`}
                        {/* Version plus courte : "Conglomérat opérant en RDC et à l'international, Tshiakani couvre un large spectre d'activités : hydrocarbures, agriculture, transports, immobilier, high-tech, génie civil, industrialisation, et une variété de services commerciaux et de facilitation." */}
                    </motion.p>

                    {/* Call to Action Button */}
                    <motion.a
                        href="#services" // Lien vers la section services (ou '/services' si c'est une page)
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-md shadow-md hover:bg-gold-light transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Texte du bouton (peut être adapté) */}
                        <span>Explorer nos Services</span>
                        {/* Alternative : "Découvrez nos Activités" */}
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

            {/* Decorative Background Elements (conservés) */}
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