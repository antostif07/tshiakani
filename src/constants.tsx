// src/constants/servicesData.js (ou où vous voulez le mettre)
import {
    Building, Wrench, ShieldCheck, Home, ShoppingCart, Rocket, Cpu, Droplet,
    Users, Handshake, Factory, Truck, LandPlot, Tractor
} from 'lucide-react'; // Importer toutes les icônes nécessaires

export const allServices = [
    {
        id: 'genie-civil',
        icon: <Building size={36} className="text-gold" />, // Icône adaptée
        title: 'Génie civil',
        description: 'Construction et réhabilitation d\'infrastructures durables et modernes.', // Description adaptée
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=G%C3%A9nie+Civil', // Placeholder
        href: '/services#genie-civil'
    },
    {
        id: 'services-fournitures',
        icon: <Wrench size={36} className="text-gold" />,
        title: 'Services et fournitures',
        description: 'Approvisionnement et prestations de services essentiels pour les entreprises et industries.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Services+%26+Fournitures',
        href: '/services#services-fournitures'
    },
    {
        id: 'assurances-douanes',
        icon: <ShieldCheck size={36} className="text-gold" />,
        title: 'Assurances et douanes',
        description: 'Facilitation des opérations d\'import-export et solutions d\'assurance adaptées.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Assurances+%26+Douanes',
        href: '/services#assurances-douanes'
    },
    {
        id: 'domiciliations',
        icon: <Home size={36} className="text-gold" />,
        title: 'Domiciliations',
        description: 'Services de domiciliation d\'entreprise et support administratif associé.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Domiciliations',
        href: '/services#domiciliations'
    },
    {
        id: 'commerce-general',
        icon: <ShoppingCart size={36} className="text-gold" />,
        title: 'Commerce général',
        description: 'Négoce et distribution de biens et marchandises divers sur le marché local et international.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Commerce+G%C3%A9n%C3%A9ral',
        href: '/services#commerce-general'
    },
    {
        id: 'start-up',
        icon: <Rocket size={36} className="text-gold" />,
        title: 'Start-up',
        description: 'Accompagnement et investissement dans les jeunes entreprises innovantes.', // Interprétation
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Start-up',
        href: '/services#start-up'
    },
    {
        id: 'high-tech',
        icon: <Cpu size={36} className="text-gold" />,
        title: 'High-Tech',
        description: 'Développement et intégration de solutions technologiques avancées.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=High-Tech',
        href: '/services#high-tech'
    },
    {
        id: 'hydrocarbure',
        icon: <Droplet size={36} className="text-gold" />, // Conserve l'icône existante
        title: 'Hydrocarbure',
        description: 'Exploration, production et distribution dans le secteur pétrolier et gazier.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Hydrocarbure', // Placeholder
        href: '/services#hydrocarbure'
    },
    {
        id: 'sous-traitance',
        icon: <Users size={36} className="text-gold" />,
        title: 'Sous-traitance',
        description: 'Prise en charge de processus métiers et industriels pour optimiser vos opérations.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Sous-traitance',
        href: '/services#sous-traitance'
    },
    {
        id: 'facilitation',
        icon: <Handshake size={36} className="text-gold" />,
        title: 'Facilitation',
        description: 'Services de conseil et d\'accompagnement pour faciliter vos affaires et projets.', // Interprétation
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Facilitation',
        href: '/services#facilitation'
    },
    {
        id: 'industrialisation',
        icon: <Factory size={36} className="text-gold" />,
        title: 'Industrialisation',
        description: 'Développement de projets industriels et mise en place d\'unités de production.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Industrialisation',
        href: '/services#industrialisation'
    },
    {
        id: 'transports',
        icon: <Truck size={36} className="text-gold" />,
        title: 'Transports',
        description: 'Solutions logistiques et de transport de biens et de personnes fiables et efficaces.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Transports',
        href: '/services#transports'
    },
    {
        id: 'immobilier',
        icon: <LandPlot size={36} className="text-gold" />,
        title: 'Immobilier',
        description: 'Promotion, développement et gestion de projets immobiliers résidentiels et commerciaux.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Immobilier',
        href: '/services#immobilier'
    },
    {
        id: 'agriculture',
        icon: <Tractor size={36} className="text-gold" />, // Icône alternative pour Agriculture
        title: 'Agriculture',
        description: 'Production agricole moderne et durable, contribuant à la sécurité alimentaire.',
        image: 'https://via.placeholder.com/600x400/cccccc/808080?text=Agriculture', // Placeholder
        href: '/services#agriculture'
    }
];
export const navItems = [
    { id: 'home', label: 'Accueil', href: '/' },
    { id: 'about', label: 'À Propos', href: '/about' },
    {
        id: 'services',
        label: 'Services', // Reste 'Services'
        href: '/services',
        dropdown: [
            // ---- Début de la nouvelle liste de services ----
            { id: 'genie-civil', label: 'Génie civil', href: '/services#genie-civil' },
            { id: 'services-fournitures', label: 'Services et fournitures', href: '/services#services-fournitures' },
            { id: 'assurances-douanes', label: 'Assurances et douanes', href: '/services#assurances-douanes' },
            { id: 'domiciliations', label: 'Domiciliations', href: '/services#domiciliations' },
            { id: 'commerce-general', label: 'Commerce général', href: '/services#commerce-general' },
            { id: 'start-up', label: 'Start-up', href: '/services#start-up' }, // Note: Peut-être 'Accompagnement Start-up' ?
            { id: 'high-tech', label: 'High-Tech', href: '/services#high-tech' }, // ou 'Technologies de Pointe'
            { id: 'hydrocarbure', label: 'Hydrocarbure', href: '/services#hydrocarbure' }, // Remplace 'Oil & Gas'
            { id: 'sous-traitance', label: 'Sous-traitance', href: '/services#sous-traitance' },
            { id: 'facilitation', label: 'Facilitation', href: '/services#facilitation' }, // Note: Terme un peu vague, peut désigner du conseil/support
            { id: 'industrialisation', label: 'Industrialisation', href: '/services#industrialisation' },
            { id: 'transports', label: 'Transports', href: '/services#transports' }, // Remplace 'Transport & Logistics'
            { id: 'immobilier', label: 'Immobilier', href: '/services#immobilier' },
            { id: 'agriculture', label: 'Agriculture', href: '/services#agriculture' } // Reste 'Agriculture'
            // ---- Fin de la nouvelle liste de services ----
        ]
    },
    { id: 'contact', label: 'Contact', href: '/contact' }
];