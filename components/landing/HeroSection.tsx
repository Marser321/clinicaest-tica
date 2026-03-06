'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, ArrowDown, Shield, Award } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroSection() {
    // Parallax logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) * 2 - 1;
        const y = (clientY / innerHeight) * 2 - 1;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
    };

    return (
        <section
            id="inicio"
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500"
        >
            {/* Fondo Base Sutil */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/images/hero-bg.png"
                    alt="Clínica Estética Moderna Premium"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/80 via-[var(--color-bg-primary)]/90 to-[var(--color-bg-primary)]"></div>
            </div>

            {/* Efectos de Luz Premium */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] bg-[var(--color-accent)]/10"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-[var(--color-accent-gold)]/10"
                />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 z-0 mix-blend-overlay opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Contenido principal en Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Columna Texto */}
                    <div className="text-center lg:text-left z-20">
                        {/* Badge superior */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 glass-panel"
                        >
                            <Sparkles size={14} className="text-[var(--color-accent)]" />
                            <span className="text-xs font-semibold text-[var(--color-text-primary)] tracking-wide uppercase">
                                Especialistas en Medicina Estética
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-[var(--color-text-primary)]"
                        >
                            Tu belleza merece{' '}
                            <span className="text-gradient">atención</span>{' '}
                            <br className="hidden sm:block" />
                            de{' '}
                            <span className="text-gradient-gold">excelencia</span>
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed drop-shadow-sm"
                        >
                            AestheticPro — Estética integral con especialización en
                            tratamientos faciales y corporales no invasivos. Nuestro equipo de
                            profesionales te asegura una atención de primer nivel y resultados naturales.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <a href="#contacto" className="btn-primary text-base w-full sm:w-auto text-center">
                                Agendar Consulta
                            </a>
                            <a href="#servicios" className="btn-secondary text-base w-full sm:w-auto text-center">
                                Ver Servicios
                            </a>
                        </motion.div>

                        {/* Stats rápidos */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.7 }}
                            className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 mt-16 p-4 rounded-2xl glass-panel-heavy"
                        >
                            {[
                                { icono: Award, valor: '+15', label: 'Años de exp.' },
                                { icono: Shield, valor: '+5k', label: 'Pacientes felices' },
                                { icono: Sparkles, valor: '10', label: 'Especialidades' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + i * 0.1 }}
                                    className="flex flex-col items-center gap-1"
                                >
                                    <stat.icono size={18} className="text-[var(--color-accent)] mb-1" />
                                    <span className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)]">
                                        {stat.valor}
                                    </span>
                                    <span className="text-xs text-[var(--color-text-muted)] text-center leading-tight">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Columna Interactiva (Collage de imágenes) */}
                    <div className="hidden lg:flex justify-center items-center relative z-10 h-[600px] w-full perspective-1000">
                        {/* Imagen Principal (Centro) */}
                        <motion.div
                            style={{
                                x: useTransform(springX, value => value * -0.5),
                                y: useTransform(springY, value => value * -0.5)
                            }}
                            className="absolute w-[320px] h-[400px] rounded-3xl overflow-hidden glass-card z-20 shadow-2xl transition-transform duration-200"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
                                alt="Tratamiento facial relajante"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Imagen Secundaria (Arriba Derecha) */}
                        <motion.div
                            style={{
                                x: useTransform(springX, value => value * -1.2),
                                y: useTransform(springY, value => value * -1.2)
                            }}
                            className="absolute top-[20px] right-[20px] w-[220px] h-[280px] rounded-2xl overflow-hidden glass-card z-10 opacity-90 shadow-xl"
                        >
                            <Image
                                src="/images/hero_secondary.png"
                                alt="Tratamiento estético profesional"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Imagen Terciaria (Abajo Izquierda) */}
                        <motion.div
                            style={{
                                x: useTransform(springX, value => value * 0.8),
                                y: useTransform(springY, value => value * 0.8)
                            }}
                            className="absolute bottom-[40px] left-[0px] w-[200px] h-[240px] rounded-2xl overflow-hidden glass-card z-30 opacity-95 shadow-lg"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=400"
                                alt="Cosmetología y bienestar"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Elemento Decorativo Flotante */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                x: useTransform(springX, value => value * 1.5),
                            }}
                            className="absolute top-[30%] left-[-20px] bg-[var(--color-bg-card)] p-4 rounded-xl shadow-xl border border-[var(--color-glass-border)] z-40 flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-accent)]">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">Satisfacción</p>
                                <p className="text-sm font-bold text-[var(--color-text-primary)]">100% Garantizada</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={20} className="text-[var(--color-text-secondary)]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
