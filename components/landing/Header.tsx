'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ThemeColorSwitcher } from '@/components/ui/ThemeColorSwitcher';

const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: '¿Por qué elegirnos?', href: '#por-que' },
    { label: 'Contacto', href: '#contacto' },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(220,38,38,0.08)] border-b border-white/5'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-[var(--background-image-cta-gradient)] flex items-center justify-center shadow-glow-accent group-hover:shadow-[var(--shadow-glow-accent-strong-var)] transition-shadow duration-300 border border-[var(--color-accent)]/20">
                                <span className="text-[var(--color-text-primary)] font-display font-bold text-lg">OP</span>
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <span className="font-display font-bold text-sm tracking-wide text-[var(--color-text-primary)]">AestheticPro</span>
                                <span className="text-xs text-[var(--color-text-muted)] -mt-0.5">Clínica Estética</span>
                            </div>
                        </Link>

                        {/* Nav Desktop */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors duration-300 rounded-lg hover:bg-[var(--color-bg-tertiary)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Desktop */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a href="tel:+59800000000" className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-accent)] transition-colors">
                                <Phone size={16} />
                                <span>Llamar</span>
                            </a>
                            <div className="w-px h-6 bg-[var(--color-glass-border)] mx-2"></div>
                            <Link href="/dashboard" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                                Entrar al CRM (Demo)
                            </Link>
                            <ThemeColorSwitcher />
                            <ThemeToggle />
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="btn-primary text-sm !py-2.5 !px-5"
                            >
                                Agendar Cita
                            </button>
                        </div>

                        {/* Hamburger Mobile */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors"
                            aria-label="Menú"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-2xl lg:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex flex-col items-center justify-center h-full gap-6"
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + i * 0.05 }}
                                    className="text-2xl font-display font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-text-accent)] transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <div className="w-full max-w-[200px] h-px bg-white/10 my-2"></div>

                            <Link
                                href="/dashboard"
                                onClick={() => setMobileOpen(false)}
                                className="text-xl font-display font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                            >
                                Entrar al CRM (Demo)
                            </Link>

                            <div className="mt-2 flex items-center justify-center gap-4">
                                <ThemeColorSwitcher />
                                <ThemeToggle />
                            </div>

                            <button
                                onClick={() => {
                                    setMobileOpen(false);
                                    setIsBookingOpen(true);
                                }}
                                className="btn-primary w-[200px] text-lg mt-4"
                            >
                                Agendar Cita
                            </button>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
}
