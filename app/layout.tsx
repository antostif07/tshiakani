import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Tshiakani Societe Generale',
    description: 'Un conglomérat diversifié à la pointe de l\'innovation dans le pétrole, les mines, l\'agriculture, la pharmaceutique, l\'IT, le transport et au-delà.',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
        <body className="min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    )
}