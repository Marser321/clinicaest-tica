'use client';

import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Shield, Award } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Fondo de imagen generada con IA */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Clínica Estética Moderna Premium"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
                {/* Overlay Oscuro y Gradiente Inferior para mezcla */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0A0A0A]"></div>
            </div>

            {/* Fondo con gradientes suaves clínicos (Acentos rojos/oscuros) */}
            <div className="absolute inset-0 z-0 mix-blend-screen pointer-events-none">
                {/* Orbes de luz decorativas — tonos rojos/borgoña suaves */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-900/30 blur-[80px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-red-500/10 blur-[60px]"
                />
            </div>

            {/* Grid Pattern overlay sutil */}
            <div
                className="absolute inset-0 z-0 opacity-[0.02] mix-blend-screen"
                style={{
                    backgroundImage: `linear-gradient(rgba(220,38,38,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.2) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Contenido principal en Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Columna Texto */}
                    <div className="text-center lg:text-left">
                        {/* Badge superior */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/40 border border-red-500/20 mb-8 backdrop-blur-md"
                        >
                            <Sparkles size={14} className="text-red-400" />
                            <span className="text-xs font-semibold text-red-50 tracking-wide uppercase">
                                Especialistas en Medicina Estética
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-white drop-shadow-lg"
                        >
                            Tu belleza merece{' '}
                            <span className="text-gradient">atención</span>{' '}
                            <br className="hidden sm:block" />
                            de{' '}
                            <span className="text-gradient">excelencia</span>
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed drop-shadow-md"
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
                            className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 mt-16 p-4 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md"
                        >
                            {[
                                { icono: Award, valor: '+15', label: 'Años de exp.' },
                                { icono: Shield, valor: '+5k', label: 'Pacientes' },
                                { icono: Sparkles, valor: '11', label: 'Especialidades' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + i * 0.1 }}
                                    className="flex flex-col items-center gap-1"
                                >
                                    <stat.icono size={18} className="text-red-500 mb-1" />
                                    <span className="text-2xl sm:text-3xl font-display font-bold text-white">
                                        {stat.valor}
                                    </span>
                                    <span className="text-xs text-slate-400 text-center leading-tight">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Columna Imagen 3D */}
                    <div className="hidden lg:flex justify-center items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                            className="relative w-full max-w-[600px] aspect-square"
                        >
                            <motion.div
                                animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-full h-full relative object-contain drop-shadow-[0_0_60px_rgba(220,38,38,0.2)]"
                            >
                                <Image
                                    src="/images/hero_3d_aesthetic.png"
                                    alt="Estética y Cuidado Premium"
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={20} className="text-slate-300" />
                </motion.div>
            </motion.div>
        </section>
    );
}
