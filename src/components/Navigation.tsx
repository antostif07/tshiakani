'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from "@/src/constants"; // Vérifiez ce chemin

interface NavigationProps {
  mobile?: boolean
  onClose?: () => void
}

export default function Navigation({ mobile = false, onClose }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleClick = () => {
    setOpenDropdown(null); // Ferme le dropdown en cliquant sur un lien interne
    if (onClose) onClose()
  }

  const handleDropdownToggle = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  }

  const isActive = (href: string) => {
    if (href === '/services') {
      return pathname.startsWith('/services');
    }
    return pathname === href;
  }

  return (
      <ul className={`${mobile ? 'flex flex-col space-y-4' : 'flex flex-wrap items-center space-x-8'}`}>
        {navItems.map((item) => (
            // ---- C'est CE 'relative' qui est crucial pour le positionnement du dropdown ----
            <motion.li
                key={item.id}
                className="relative" // POSITIONNEMENT PARENT POUR LE DROPDOWN ABSOLU
            >
              {item.dropdown ? (
                  <div
                      // Note: onMouseLeave sur le div peut être un peu trop rapide,
                      // le mettre sur le li parent pourrait être mieux, mais testons comme ça d'abord.
                      onMouseLeave={!mobile ? () => setOpenDropdown(null) : undefined}
                  >
                    <motion.button
                        onClick={() => handleDropdownToggle(item.id)}
                        onMouseEnter={!mobile ? () => setOpenDropdown(item.id) : undefined}
                        whileHover={{ scale: mobile ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-1 font-inter transition-colors ${
                            isActive(item.href)
                                ? 'text-gold'
                                : 'hover:text-gold-light'
                        }`}
                        // aria-expanded={openDropdown === item.id} // Bon pour l'accessibilité
                        // aria-haspopup="true" // Bon pour l'accessibilité
                    >
                      <span>{item.label}</span>
                      <motion.span
                          animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </motion.button>

                    {openDropdown === item.id && (
                        <motion.div
                            initial={{ opacity: 0, y: mobile ? 0 : -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: mobile ? 0 : -10 }}
                            transition={{ duration: 0.2 }}
                            className={`
                    ${mobile
                                ? 'mt-2 pl-4' // Style mobile simple
                                : 'absolute top-full right-0 mt-2 z-50 min-w-[350px] md:min-w-[400px]' // Style Desktop
                            }
                    bg-white rounded-lg shadow-lg overflow-hidden // Ajout overflow-hidden au cas où
                  `}
                        >
                          <ul className={`py-2 ${!mobile ? 'grid grid-cols-2 gap-x-4' : ''}`}>
                            {item.dropdown.map((dropItem) => (
                                <motion.li
                                    key={dropItem.id}
                                    whileHover={!mobile ? { backgroundColor: '#f3f4f6' } : {}}
                                >
                                  <Link
                                      href={dropItem.href}
                                      className={`block px-4 py-2 font-inter text-sm ${
                                          pathname === dropItem.href ? 'text-gold font-semibold' : 'text-navy'
                                      } hover:text-gold transition-colors whitespace-nowrap`}
                                      onClick={handleClick}
                                  >
                                    {dropItem.label}
                                  </Link>
                                </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                    )}
                  </div>
              ) : (
                  // ... reste du code pour les liens simples ...
                  <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                  >
                    <Link
                        href={item.href}
                        className={`font-inter transition-colors ${
                            isActive(item.href) ? 'text-gold' : 'hover:text-gold-light'
                        }`}
                        onClick={handleClick} // Utilise le handleClick standard ici
                    >
                      {item.label}
                    </Link>
                  </motion.div>
              )}
            </motion.li>
        ))}
      </ul>
  )
}