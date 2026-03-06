'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const cases = [
    {
        id: 'acne',
        title: 'Tratamiento Anti-Acné',
        image: '/images/before_after_acne.png',
        description: 'Resultados tras 4 sesiones de luz pulsada y peeling químico.'
    },
    {
        id: 'warts',
        title: 'Remoción de Verrugas',
        image: '/images/before_after_warts.png',
        description: 'Eliminación segura con láser CO2 en una sola sesión.'
    },
    {
        id: 'rejuvenation',
        title: 'Rejuvenecimiento Facial',
        image: '/images/before_after_rejuvenation.png',
        description: 'Aplicación de bioestimuladores y toxina botulínica.'
    }
];

export function BeforeAfterSection() {
    return (
        <section className="section-padding bg-[var(--color-bg-secondary)] relative overflow-hidden transition-colors duration-500">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <AnimatedSection className="text-center mb-16 lg:mb-20">
                    <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest drop-shadow-sm">
                        Casos Reales
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-[var(--color-text-primary)] drop-shadow-md">
                        Resultados que <span className="text-gradient">transforman</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg pt-4">
                        Explorá nuestros casos de éxito demostrados. Tratamientos efectivos, seguros y enfocados en potenciar tu belleza natural.
                    </p>
                </AnimatedSection>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <AnimatedSection key={item.id} delay={0.2 + (index * 0.1)}>
                            <div className="glass-card overflow-hidden group">
                                <div className="relative aspect-square w-full bg-[var(--color-bg-primary)]/50 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Tags */}
                                    <div className="absolute top-4 left-4 bg-[var(--color-bg-primary)]/60 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-glass-border)]">
                                        <span className="text-[var(--color-text-primary)] text-xs font-semibold tracking-wide flex items-center gap-1.5">
                                            <CheckCircle2 size={14} className="text-emerald-400" /> CASO DE ÉXITO
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 bg-[var(--color-bg-card)]">
                                    <h3 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
