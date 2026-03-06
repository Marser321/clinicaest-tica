'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/ui/AnimatedSection';

const faqs = [
    {
        pregunta: '¿Los tratamientos inyectables como Botox o Rellenos duelen?',
        respuesta: 'No. En AestheticPro utilizamos agujas ultra finas y anestesia tópica de alta calidad para garantizar el máximo confort del paciente durante todo el procedimiento.'
    },
    {
        pregunta: '¿Hacen una evaluación antes de cualquier procedimiento?',
        respuesta: 'Sí, todas las primeras consultas incluyen un diagnóstico exhaustivo de la piel o zona a tratar para poder diseñar un plan a medida, 100% individualizado.'
    },
    {
        pregunta: '¿Cuáles son los medios de pago aceptados?',
        respuesta: 'Aceptamos todas las tarjetas de crédito y débito, transferencias y efectivo. Para tratamientos prolongados, ofrecemos financiación sin recargo.'
    },
    {
        pregunta: '¿Cuánto dura el efecto de la Toxina Botulínica (Botox)?',
        respuesta: 'Por lo general, la duración es de 4 a 6 meses, dependiendo del metabolismo de cada paciente y la fuerza muscular de la zona tratada. Recomendamos retoques para mantener el efecto preventivo.'
    },
    {
        pregunta: '¿Puedo volver a trabajar después de un tratamiento facial?',
        respuesta: 'En la gran mayoría de nuestros tratamientos (Botox, peelings suaves, rellenos) los pacientes retoman sus actividades normales inmediatamente con mínimos cuidados.'
    }
];

export function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-padding bg-[var(--color-bg-primary)] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <AnimatedSection className="text-center mb-16 lg:mb-20">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-950/40 to-black/60 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(220,38,38,0.15)] border border-red-900/30">
                        <MessageCircleQuestion size={28} className="text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest bg-black/30 border border-white/10 px-3 py-1 rounded-full inline-block mb-3 drop-shadow-sm">
                        Dudas Comunes
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-[var(--color-text-primary)] drop-shadow-md">
                        Preguntas <span className="text-gradient">Frecuentes</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
                        Resolvemos tus principales inquietudes para que vengas a tu próxima consulta con total tranquilidad y confianza.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                variants={staggerItemVariants}
                                className="group"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${isActive
                                        ? 'bg-[var(--color-bg-primary)]/60 border-[var(--color-accent)]/50 shadow-[0_4px_15px_rgba(var(--color-accent),0.2)]'
                                        : 'bg-[var(--color-bg-secondary)]/80 backdrop-blur-md border-[var(--color-glass-border)] hover:border-[var(--color-accent)]/30 hover:shadow-[0_4px_15px_rgba(0,0,0,0.5)]'
                                        }`}
                                >
                                    <span className={`font-semibold text-lg md:text-xl transition-colors ${isActive ? 'text-[var(--color-text-primary)] drop-shadow-sm' : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'}`}>
                                        {faq.pregunta}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-red-900/50 text-red-500' : 'bg-white/5 text-[var(--color-text-muted)] group-hover:bg-red-950/40 group-hover:text-red-400'}`}>
                                        {isActive ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-bg-primary)]/40 border-x border-b border-red-900/20 rounded-b-2xl -mt-2 pt-6">
                                                {faq.respuesta}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </StaggerContainer>

                {/* CTA Auxiliar */}
                <AnimatedSection delay={0.4} className="mt-12 text-center">
                    <p className="text-[var(--color-text-muted)] mb-4">¿Tenés alguna otra consulta?</p>
                    <a href="#contacto" className="text-[var(--color-accent)] font-semibold hover:underline">
                        Escribinos directamente &rarr;
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}
