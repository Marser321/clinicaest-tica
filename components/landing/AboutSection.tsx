'use client';

import { motion } from 'motion/react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GraduationCap, Award, Briefcase, User } from 'lucide-react';
import Image from 'next/image';

const credenciales = [
    {
        icono: GraduationCap,
        titulo: 'Profesionales Certificados',
        detalle: 'Especialistas de primer nivel',
    },
    {
        icono: Award,
        titulo: 'Alta Tecnología',
        detalle: 'Equipamiento de vanguardia',
    },
    {
        icono: Briefcase,
        titulo: 'Atención Personalizada',
        detalle: 'Enfoque en tu bienestar',
    },
];

export function AboutSection() {
    return (
        <section id="nosotros" className="section-padding bg-[var(--color-bg-primary)] relative overflow-hidden">
            {/* Efecto decorativo */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-red-900/20 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Columna imagen */}
                    <AnimatedSection direction="left">
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-bg-primary)]/40 shadow-[0_8px_40px_rgba(0,0,0,0.5)] p-1 relative border border-[var(--color-glass-border)]">
                                <div className="w-full h-full relative flex items-center justify-center rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/about_us_clinic.png"
                                        alt="Interior Clínica Estética Premium"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay muy sutil para asegurar contraste y tono dark */}
                                    <div className="absolute inset-0 bg-[var(--color-bg-primary)]/20 mix-blend-multiply pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Badge flotante */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-4 -right-4 sm:right-4 bg-[var(--color-bg-card)] rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-[var(--color-glass-border)] backdrop-blur-md"
                                style={{ animation: 'float 6s ease-in-out infinite' }}
                            >
                                <span className="text-3xl font-display font-bold text-gradient">+15</span>
                                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Años de experiencia</p>
                            </motion.div>
                        </div>
                    </AnimatedSection>

                    {/* Columna texto */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div>
                            <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest drop-shadow-sm">
                                Sobre Nosotros
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight text-[var(--color-text-primary)] drop-shadow-md">
                                Compromiso con tu{' '}
                                <span className="text-gradient">bienestar integral</span>
                            </h2>
                            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed mb-4">
                                En <strong className="text-[var(--color-text-primary)] font-semibold">AestheticPro</strong> contamos con un equipo de
                                profesionales de primer nivel, especializados en las diferentes áreas de la medicina estética
                                para ofrecer diagnóstico y tratamiento con los más altos estándares de calidad y seguridad.
                            </p>
                            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed mb-8">
                                Nuestro objetivo es brindar una atención integral, personalizada y de excelencia.
                                Combinamos años de experiencia clínica con tecnología de última generación para
                                garantizar tratamientos seguros, duraderos y sin dolor.
                            </p>

                            {/* Credenciales */}
                            <div className="space-y-4">
                                {credenciales.map((cred, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.15 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-900/40 transition-colors duration-300">
                                            <cred.icono size={22} className="text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">
                                                {cred.titulo}
                                            </h4>
                                            <p className="text-[var(--color-text-muted)] text-sm">{cred.detalle}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
