'use client';

import { motion } from 'motion/react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/ui/AnimatedSection';
import { Star, Quote } from 'lucide-react';

const testimonios = [
    {
        nombre: 'María G.',
        tratamiento: 'Rellenos Dérmicos',
        texto: 'Tenía mucho miedo de los inyectables, pero la doctora me explicó todo paso a paso. El resultado es increíble, súper natural y armónico con mi rostro. ¡Gracias!',
        estrellas: 5,
    },
    {
        nombre: 'Carlos P.',
        tratamiento: 'Depilación Láser',
        texto: 'Con mi tipo de piel siempre dudé, pero la tecnología que usan es excelente. Cero dolor y resultados desde las primeras sesiones. El equipo es muy amable y profesional.',
        estrellas: 5,
    },
    {
        nombre: 'Laura S.',
        tratamiento: 'Limpieza Facial',
        texto: 'Me hice una limpieza profunda e hidratación para mi casamiento y quedé fascinada. Mi piel quedó espectacular y súper luminosa. Súper recomendable.',
        estrellas: 5,
    },
    {
        nombre: 'Roberto M.',
        tratamiento: 'Toxina Botulínica',
        texto: 'Siempre me acomplejaban mis marcas de expresión. El botox me cambió la mirada. La sutileza en la aplicación me dio mucha confianza, se ve muy descansado.',
        estrellas: 5,
    },
    {
        nombre: 'Ana T.',
        tratamiento: 'Modelado Corporal',
        texto: 'Había probado varias cosas para la flacidez sin éxito. Acá con los tratamientos corporales noté un cambio real en pocas semanas. Increíble el antes y después.',
        estrellas: 5,
    },
    {
        nombre: 'Diego F.',
        tratamiento: 'Bioestimuladores',
        texto: 'Llegué buscando mejorar la calidad de mi piel. El tratamiento con bioestimuladores fue rápido y los resultados son espectaculares mes a mes. Excelente atención.',
        estrellas: 5,
    },
];

export function TestimonialsSection() {
    return (
        <section className="section-padding relative overflow-hidden bg-[#111111]">
            {/* Decoración */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest drop-shadow-sm">
                        Testimonios
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white drop-shadow-md">
                        Lo que dicen nuestros{' '}
                        <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">pacientes</span>
                    </h2>
                    <p className="text-slate-300 max-w-xl mx-auto">
                        La mejor recomendación son las experiencias de quienes ya nos eligieron.
                    </p>
                </AnimatedSection>

                {/* Grid de testimonios */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {testimonios.map((test, i) => (
                        <motion.div
                            key={i}
                            variants={staggerItemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-7 flex flex-col relative border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(220,38,38,0.15)] hover:border-red-500/30 transition-all duration-400 group"
                        >
                            {/* Header: Avatar + Quote */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-red-950/40 flex items-center justify-center border border-red-900/30 group-hover:scale-110 transition-transform duration-300">
                                    <span className="font-display font-bold text-red-500 text-lg">
                                        {test.nombre.charAt(0)}
                                    </span>
                                </div>
                                <Quote size={24} className="text-red-900/50 group-hover:text-red-500/50 transition-colors" />
                            </div>

                            {/* Estrellas */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: test.estrellas }).map((_, j) => (
                                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Texto */}
                            <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 relative z-10">
                                &ldquo;{test.texto}&rdquo;
                            </p>

                            {/* Autor */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="font-semibold text-white text-sm">{test.nombre}</p>
                                <p className="text-slate-400 text-xs">{test.tratamiento}</p>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
