'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, Play, RefreshCcw, Search, HeartPulse, Sparkles, AlertCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Tipado de las etapas del Triage
type TriageStep = 'start' | 'symptom' | 'duration' | 'result';

export function TriageWidget() {
    const [step, setStep] = useState<TriageStep>('start');
    const [selections, setSelections] = useState({
        symptom: '',
        duration: '',
    });

    // Pregunta 1: Síntoma principal
    const symptoms = [
        { id: 'acne', icon: AlertCircle, label: 'Tengo acné severo o manchas', color: 'text-rose-500', bg: 'bg-rose-950/30' },
        { id: 'estetica', icon: Sparkles, label: 'Quiero mejorar mi piel o rostro', color: 'text-amber-500', bg: 'bg-amber-950/30' },
        { id: 'chequeo', icon: HeartPulse, label: 'Limpieza facial o hidratación', color: 'text-red-500', bg: 'bg-red-950/30' },
        { id: 'ausencia', icon: Search, label: 'Quiero reducir medidas o celulitis', color: 'text-indigo-500', bg: 'bg-indigo-950/30' },
    ];

    // Pregunta 2 (Dinámica, pero simplificada al tiempo)
    const durations = [
        { id: 'urgencia', label: 'Es un problema reciente y agudo' },
        { id: 'dias', label: 'Hace unos días' },
        { id: 'meses', label: 'Es una inquietud de hace tiempo' },
    ];

    // Manejo de selecciones
    const handleSymptomSelect = (id: string) => {
        setSelections((prev) => ({ ...prev, symptom: id }));
        setStep('duration');
    };

    const handleDurationSelect = (id: string) => {
        setSelections((prev) => ({ ...prev, duration: id }));
        setStep('result');
    };

    const resetTriage = () => {
        setSelections({ symptom: '', duration: '' });
        setStep('start');
    };

    // Lógica simple de recomendación 
    const getRecommendation = () => {
        const s = selections.symptom;
        const d = selections.duration;

        if (s === 'acne') {
            return {
                title: 'Protocolo de Recuperación Cutánea',
                desc: 'Los brotes de acné severo o manchas recientes requieren un abordaje médico especializado. Evaluaremos tu tipo de piel para aplicar peelings químicos o tecnología láser que controle la inflamación y regenere el tejido.',
                action: 'Agendar Evaluación Médica',
                urgent: true
            };
        }
        if (s === 'estetica') {
            return {
                title: 'Evaluación Estética Facial',
                desc: '¡Excelente decisión! Un especialista evaluará tu caso para ofrecerte opciones personalizadas como Toxina Botulínica, Rellenos o Bioestimuladores para potenciar tu belleza natural.',
                action: 'Consultar por Estética',
                urgent: false
            };
        }
        if (s === 'ausencia') {
            return {
                title: 'Especialista en Estética Corporal',
                desc: 'La medicina estética corporal actual ofrece excelentes resultados sin cirugía. Contamos con tecnología de vanguardia para lograr el contorno que buscas de forma segura y efectiva.',
                action: 'Evaluación Corporal',
                urgent: false
            };
        }
        return {
            title: 'Medicina Estética Preventiva',
            desc: 'La prevención y el cuidado continuo son tus mejores aliados. Agendá un turno para realizar un examen de piel completo y un tratamiento de higiene e hidratación profunda.',
            action: 'Agendar Cita',
            urgent: false
        };
    };

    const result = getRecommendation();

    return (
        <section className="py-20 bg-[var(--color-bg-primary)] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <AnimatedSection className="text-center mb-10">
                    <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full inline-block mb-3 border border-[var(--color-accent)]/30">
                        Asistente Virtual
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4 drop-shadow-md">
                        Descubrí qué tratamiento necesitás
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                        Respondé 2 simples preguntas para que nuestro sistema te indique el especialista adecuado para tu caso.
                    </p>
                </AnimatedSection>

                {/* Contenedor Interactivo */}
                <div className="bg-[var(--color-glass-surface)] backdrop-blur-md rounded-3xl shadow-glass-var border border-[var(--color-glass-border)] overflow-hidden min-h-[400px] flex flex-col relative">
                    {/* Barra de Progreso */}
                    <div className="w-full h-1 bg-white/5 relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-[var(--color-accent)] shadow-glow-accent"
                            initial={{ width: '0%' }}
                            animate={{
                                width: step === 'start' ? '0%' :
                                    step === 'symptom' ? '33%' :
                                        step === 'duration' ? '66%' : '100%'
                            }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    </div>

                    <div className="p-8 sm:p-12 flex-1 flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            {/* PASO: START */}
                            {step === 'start' && (
                                <motion.div
                                    key="start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 bg-red-950/40 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-900/30 shadow-[0_0_20px_rgba(220,38,38,0.15)]">
                                        <ShieldCheck size={36} className="text-[var(--color-accent)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                                        ¿No sabés por dónde empezar?
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                                        Iniciá nuestro diagnóstico rápido online. Te tomará menos de 30 segundos.
                                    </p>
                                    <button
                                        onClick={() => setStep('symptom')}
                                        className="btn-primary inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(220,38,38,0.3)]"
                                    >
                                        Comenzar Diagnóstico
                                        <Play size={16} className="fill-white" />
                                    </button>
                                </motion.div>
                            )}

                            {/* PASO: SYMPTOM */}
                            {step === 'symptom' && (
                                <motion.div
                                    key="symptom"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-6 text-center drop-shadow-sm">
                                        ¿Cuál es el motivo principal de tu consulta?
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {symptoms.map((s) => (
                                            <button
                                                key={s.id}
                                                onClick={() => handleSymptomSelect(s.id)}
                                                className="group text-left p-5 rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-bg-primary)]/40 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-primary)]/60 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all flex items-center gap-4"
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 shrink-0 ${s.bg}`}>
                                                    <s.icon size={24} className={s.color} />
                                                </div>
                                                <span className="font-semibold text-slate-200 group-hover:text-[var(--color-text-primary)] transition-colors">
                                                    {s.label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* PASO: DURATION */}
                            {step === 'duration' && (
                                <motion.div
                                    key="duration"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-6 text-center drop-shadow-sm">
                                        ¿Desde hace cuánto tiempo sentís esto / lo estás pensando?
                                    </h3>
                                    <div className="flex flex-col gap-3 max-w-md mx-auto">
                                        {durations.map((d) => (
                                            <button
                                                key={d.id}
                                                onClick={() => handleDurationSelect(d.id)}
                                                className="p-4 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-bg-primary)]/40 hover:bg-black/20 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text-primary)] transition-all font-medium text-[var(--color-text-secondary)] text-center shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[var(--shadow-glow-accent-var)]"
                                            >
                                                {d.label}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setStep('symptom')}
                                            className="text-[var(--color-text-muted)] text-sm mt-4 hover:text-[var(--color-accent)] transition-colors underline decoration-[var(--color-glass-border)] hover:decoration-[var(--color-accent)]"
                                        >
                                            Volver atrás
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* PASO: RESULT */}
                            {step === 'result' && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <div className="mb-6 inline-block p-4 bg-gradient-to-br from-red-950/40 to-black/60 rounded-2xl border border-red-900/30 shadow-[0_4px_20px_rgba(220,38,38,0.15)]">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                            Recomendación del Triage
                                        </h3>
                                        <h4 className="text-2xl font-bold text-[var(--color-text-primary)] drop-shadow-md">
                                            {result.title}
                                        </h4>
                                    </div>
                                    <p className="text-[var(--color-text-secondary)] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                                        {result.desc}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a
                                            href="#contacto"
                                            className={`${result.urgent ? 'bg-rose-600 hover:bg-rose-700 shadow-[0_0_20px_rgba(225,29,72,0.4)] text-white' : 'btn-primary shadow-glow-accent'} px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2 border border-[var(--color-glass-border)]`}
                                        >
                                            {result.action}
                                            <ArrowRight size={18} />
                                        </a>
                                        <button
                                            onClick={resetTriage}
                                            className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] font-medium py-3 px-4 transition-colors"
                                        >
                                            <RefreshCcw size={16} />
                                            Rehacer test
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
