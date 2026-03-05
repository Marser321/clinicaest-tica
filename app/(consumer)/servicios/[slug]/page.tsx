'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
    Sparkles, ShieldCheck, Layers, Scissors, Anchor, Stethoscope,
    Baby, AlignCenter, HeartPulse, ScanLine, Crosshair,
    ArrowLeft, ArrowRight, CheckCircle, MessageCircle,
} from 'lucide-react';
import Image from 'next/image';
import { servicios, getServicioBySlug } from '@/lib/servicios-data';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/ui/AnimatedSection';
import { use } from 'react';

import { LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    Sparkles, ShieldCheck, Layers, Scissors, Anchor, Stethoscope,
    Baby, AlignCenter, HeartPulse, ScanLine, Crosshair,
};

export default function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const servicio = getServicioBySlug(slug);

    if (!servicio) {
        notFound();
    }

    const Icon = iconMap[servicio.icono] || Stethoscope;
    const currentIndex = servicios.findIndex((s) => s.slug === slug);
    const prevServicio = currentIndex > 0 ? servicios[currentIndex - 1] : null;
    const nextServicio = currentIndex < servicios.length - 1 ? servicios[currentIndex + 1] : null;

    // Otros servicios para recomendar (excluye el actual)
    const otrosServicios = servicios.filter((s) => s.slug !== slug).slice(0, 3);

    return (
        <div className="pt-20">
            {/* Hero del Servicio */}
            <section className="section-padding relative overflow-hidden bg-white">
                {/* Glow decorativo del color del servicio */}
                <div
                    className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20"
                    style={{ background: servicio.colorHex }}
                />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        <Link
                            href="/#servicios"
                            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Volver a Servicios
                        </Link>
                    </motion.div>

                    {/* Hero Titulo y Modelo 3D */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                        {/* Texto */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1"
                        >
                            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-4">
                                {servicio.titulo}
                            </h1>
                            <p className="text-slate-400 text-lg sm:text-xl">
                                {servicio.descripcionCorta}
                            </p>
                        </motion.div>

                        {/* Imagen del Servicio */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="w-full md:w-1/2 h-[300px] sm:h-[400px] relative rounded-3xl overflow-hidden glass-card"
                        >
                            <Image
                                src={servicio.imagen}
                                alt={servicio.titulo}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Descripción larga */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 sm:p-8 mb-12 border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
                    >
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                            {servicio.descripcionLarga}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="section-padding bg-bg-secondary">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="mb-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                            Beneficios del{' '}
                            <span className="text-gradient">{servicio.titulo}</span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="space-y-4">
                        {servicio.beneficios.map((beneficio, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItemVariants}
                                className="flex items-start gap-4 bg-white rounded-xl p-5 group border border-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
                            >
                                <CheckCircle
                                    size={22}
                                    className="flex-shrink-0 mt-0.5"
                                    style={{ color: servicio.colorHex }}
                                />
                                <p className="text-slate-600 text-base">{beneficio}</p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Proceso */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="mb-12">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-slate-900">
                            Proceso{' '}
                            <span className="text-gradient">paso a paso</span>
                        </h2>
                    </AnimatedSection>

                    <div className="relative mt-16">
                        {/* Línea horizontal en desktop, vertical en mobile */}
                        <div className="hidden md:block absolute top-[28px] left-0 right-0 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>
                        <div className="block md:hidden absolute left-6 top-0 bottom-0 w-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                className="w-full bg-gradient-to-b from-cyan-400 to-indigo-500"
                                initial={{ height: "0%" }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                            {servicio.proceso.map((paso, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                    className="flex md:flex-col items-start gap-4 group"
                                >
                                    {/* Número Flotante Interactivo */}
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-display font-bold text-lg relative bg-white shadow-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-2xl"
                                        style={{
                                            color: servicio.colorHex,
                                        }}
                                    >
                                        {/* Borde animado */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                                            style={{ border: `2px solid ${servicio.colorHex}` }}
                                        />
                                        <span className="relative z-10 group-hover:animate-pulse">{i + 1}</span>
                                    </div>

                                    <div className="pt-2 md:pt-4 flex-1">
                                        <h4 className="font-display font-bold text-slate-800 text-base md:text-lg mb-2 transition-colors duration-300 pointer-events-none" style={{ color: 'inherit' }}>
                                            <span className="group-hover:text-accent transition-colors">{paso.paso}</span>
                                        </h4>
                                        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                                            {paso.detalle}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Riesgos y Cuidados */}
            <section className="section-padding bg-[var(--color-bg-primary)]">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="mb-10 text-center">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                            Riesgos y Cuidados Post-Tratamiento
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {servicio.riesgos.map((riesgo, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItemVariants}
                                className="flex items-start gap-4 p-5 rounded-xl border border-[var(--color-accent-danger)]/20 bg-[var(--color-bg-card)] shadow-sm"
                            >
                                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-danger)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-accent-danger)]">
                                    !
                                </div>
                                <p className="text-[var(--color-text-secondary)] text-sm pt-1">{riesgo}</p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-bg-secondary">
                <AnimatedSection>
                    <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 shadow-[0_12px_50px_rgba(15,23,42,0.08)] border border-slate-100">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                            ¿Te interesa este tratamiento?
                        </h3>
                        <p className="text-slate-400 mb-8">
                            Agendá una consulta de evaluación sin compromiso. Te asesoramos de forma personalizada.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={`https://wa.me/59800000000?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${servicio.titulo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                <MessageCircle size={18} />
                                Consultar por WhatsApp
                            </a>
                            <a href="/#contacto" className="btn-secondary w-full sm:w-auto text-center">
                                Formulario de Contacto
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Navegación entre servicios */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center">
                        {prevServicio ? (
                            <Link
                                href={`/servicios/${prevServicio.slug}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm">{prevServicio.titulo}</span>
                            </Link>
                        ) : (
                            <div />
                        )}
                        {nextServicio ? (
                            <Link
                                href={`/servicios/${nextServicio.slug}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group"
                            >
                                <span className="text-sm">{nextServicio.titulo}</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>

            {/* Otros servicios */}
            <section className="section-padding bg-bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="text-center mb-10">
                        <h3 className="font-display text-2xl font-bold text-slate-900">
                            Otros servicios que pueden interesarte
                        </h3>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {otrosServicios.map((s) => {
                            const OtroIcon = iconMap[s.icono] || Stethoscope;
                            return (
                                <motion.div key={s.slug} variants={staggerItemVariants}>
                                    <Link
                                        href={`/servicios/${s.slug}`}
                                        className="bg-white rounded-2xl p-6 flex flex-col h-full group cursor-pointer border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(8,145,178,0.1)] hover:border-cyan-200/50 transition-all duration-400"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
                                            style={{
                                                background: `${s.colorHex}12`,
                                                border: `1px solid ${s.colorHex}20`,
                                            }}
                                        >
                                            <OtroIcon
                                                size={24}
                                                strokeWidth={1.5}
                                                style={{ color: s.colorHex }}
                                                className="drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="font-display font-bold text-slate-800 mb-2">{s.titulo}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.descripcionCorta}</p>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
