'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowLeftRight } from 'lucide-react';

export function BeforeAfterSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const x = useMotionValue(0);

    // Initial position in the middle
    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setContainerWidth(width);
            x.set(width / 2);
        }

        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setContainerWidth(width);
                // Reset to middle on resize to ensure safe bounds
                x.set(width / 2);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [x]);

    // Map the handle X position to a percentage for the CSS clip-path mask
    const clipPercentage = useTransform(x, [0, containerWidth], [0, 100]);
    const clipPathValue = useTransform(clipPercentage, (val) => `inset(0 0 0 ${val}%)`);

    return (
        <section className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <AnimatedSection className="text-center mb-16 lg:mb-20">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                        Casos Reales
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-slate-900">
                        Resultados que <span className="text-gradient">transforman</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Deslizá para ver el cambio. Tratamientos de diseño de sonrisa y carillas
                        realizados por nuestro equipo de especialistas.
                    </p>
                </AnimatedSection>

                {/* Interactive Component */}
                <AnimatedSection delay={0.2} className="w-full max-w-4xl mx-auto">
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] select-none bg-slate-200"
                    >
                        {/* 1. Underlying Image (ANTES - It's always visible beneath) */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/images/before-smile.jpg" // Placeholder for real image
                                alt="Sonrisa Antes del Tratamiento"
                                fill
                                className="object-cover"
                            />
                            {/* Label Antes */}
                            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                                <span className="text-white text-sm font-semibold tracking-wide">ANTES</span>
                            </div>
                        </div>

                        {/* 2. Top Image (DESPUÉS - Clipped dynamically by dragging handler) */}
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{ clipPath: clipPathValue }}
                        >
                            <Image
                                src="/images/after-smile.jpg" // Placeholder for real image
                                alt="Sonrisa Después del Tratamiento"
                                fill
                                className="object-cover"
                            />
                            {/* Label Después */}
                            <div className="absolute top-6 right-6 bg-accent/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                                <span className="text-white text-sm font-semibold tracking-wide">DESPUÉS</span>
                            </div>
                        </motion.div>

                        {/* 3. Draggable Handle */}
                        <motion.div
                            drag="x"
                            dragConstraints={containerRef}
                            dragElastic={0}
                            dragMomentum={false}
                            style={{ x }}
                            className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize hidden sm:block shadow-[-2px_0_10px_rgba(0,0,0,0.1)]"
                        >
                            {/* Center Thumb Indicator */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100/50">
                                <ArrowLeftRight size={20} className="text-slate-600" />
                            </div>
                        </motion.div>

                        {/* 3-B: Touch area support for mobile */}
                        <motion.div
                            drag="x"
                            dragConstraints={containerRef}
                            dragElastic={0}
                            dragMomentum={false}
                            style={{ x }}
                            className="sm:hidden absolute top-0 bottom-0 z-20 w-8 -ml-4 cursor-ew-resize flex justify-center"
                        >
                            <div className="w-1 h-full bg-white relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100">
                                    <ArrowLeftRight size={18} className="text-slate-700" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
