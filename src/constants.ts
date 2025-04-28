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