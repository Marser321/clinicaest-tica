'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import { servicios } from '@/lib/servicios-data';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ServicesSection() {
    return (
        <section id="servicios" className="section-padding relative overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500">
            {/* Fondo decorativo generado con IA */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services-bg.png"
                    alt="Fondo Servicios Premium"
                    fill
                    className="object-cover object-center opacity-20 dark:opacity-40 mix-blend-screen"
                />
            </div>

            {/* Decoración Gradientes */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-10 blur-[120px] pointer-events-none transition-colors duration-500" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-gold)] opacity-5 blur-[100px] pointer-events-none transition-colors duration-500" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
                {/* Título */}
                <AnimatedSection className="text-center">
                    <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest drop-shadow-sm">
                        Nuestros Tratamientos
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-[var(--color-text-primary)] drop-shadow-md">
                        Ciencia y Arte para tu{' '}
                        <span className="text-gradient">bienestar integral</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-base sm:text-lg">
                        Conocé nuestra oferta de servicios premium. Te acompañamos en cada etapa del proceso, priorizando tu seguridad y resultados naturales.
                    </p>
                </AnimatedSection>

                {/* Staggered Services List */}
                <div className="space-y-16 lg:space-y-32">
                    {servicios.map((servicio, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <AnimatedSection
                                key={servicio.slug}
                                direction={isEven ? 'left' : 'right'}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                            >
                                {/* Contenedor de Imagen */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card shadow-xl group border border-[var(--color-glass-border)]">
                                        <Image
                                            src={servicio.imagen}
                                            alt={servicio.titulo}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                        {/* Glow Effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at 50% 50%, ${servicio.colorHex}15 0%, transparent 70%)`,
                                            }}
                                        />
                                    </div>

                                    {/* Etiqueta Flotante */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className={`absolute -bottom-6 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} glass-card px-6 py-4 rounded-2xl flex items-center gap-4 bg-[var(--color-bg-card)]/90 backdrop-blur-xl border border-[var(--color-glass-border)] shadow-2xl z-20`}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm relative overflow-hidden"
                                            style={{ background: `${servicio.colorHex}20` }}
                                        >
                                            <CheckCircle2 size={20} style={{ color: servicio.colorHex }} />
                                        </div>
                                        <div>
                                            <p className="text-[var(--color-text-primary)] font-bold text-sm">Alta Fidelidad</p>
                                            <p className="text-[var(--color-text-muted)] text-xs font-medium">Equipamiento Médico</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Contenedor de Texto */}
                                <div className="w-full lg:w-1/2 space-y-6 lg:px-4 mt-8 lg:mt-0">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-[var(--color-bg-secondary)]"
                                        style={{ borderColor: `${servicio.colorHex}30` }}>
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: servicio.colorHex }}></div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">Especialidad</span>
                                    </div>

                                    <h3 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
                                        {servicio.titulo}
                                    </h3>

                                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                        {servicio.descripcionCorta}
                                    </p>

                                    <div className="pt-4 border-t border-[var(--color-glass-border)] space-y-3">
                                        <h4 className="font-semibold text-[var(--color-text-primary)] text-sm uppercase tracking-wide">Fases del Proceso:</h4>
                                        <ul className="space-y-2">
                                            {servicio.proceso.slice(0, 3).map((paso, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm">
                                                    <span className="font-bold text-[var(--color-text-primary)]">{i + 1}.</span>
                                                    <span><strong className="text-[var(--color-text-secondary)]">{paso.paso}:</strong> {paso.detalle}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6">
                                        <Link
                                            href={`/servicios/${servicio.slug}`}
                                            className="btn-primary inline-flex items-center gap-2 group"
                                        >
                                            Ver Detalles y Riesgos
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
