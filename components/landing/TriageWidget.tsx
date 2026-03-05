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
        { id: 'dolor', icon: AlertCircle, label: 'Tengo dolor agudo', color: 'text-rose-500', bg: 'bg-rose-50' },
        { id: 'estetica', icon: Sparkles, label: 'Quiero mejorar mi sonrisa', color: 'text-amber-500', bg: 'bg-amber-50' },
        { id: 'chequeo', icon: HeartPulse, label: 'Chequeo de rutina / Limpieza', color: 'text-cyan-500', bg: 'bg-cyan-50' },
        { id: 'ausencia', icon: Search, label: 'Me falta una pieza dental', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    ];

    // Pregunta 2 (Dinámica, pero simplificada al tiempo)
    const durations = [
        { id: 'urgencia', label: '¡Es una urgencia ahora mismo!' },
        { id: 'dias', label: 'Hace unos días' },
        { id: 'meses', label: 'Hace semanas o meses' },
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

        if (s === 'dolor') {
            return {
                title: 'Atención de Urgencia / Endodoncia',
                desc: 'El dolor agudo requiere atención inmediata para evitar infecciones mayores o pérdida de la pieza. Un especialista evaluará si requerís un tratamiento de conducto o indicación farmacológica.',
                action: 'Agendar Urgencia',
                urgent: true
            };
        }
        if (s === 'estetica') {
            return {
                title: 'Evaluación de Diseño de Sonrisa',
                desc: '¡Excelente decisión! Un especialista en estética evaluará tu caso para ofrecerte opciones como Carillas, Blanqueamiento u Ortodoncia Invisible.',
                action: 'Consultar por Estética',
                urgent: false
            };
        }
        if (s === 'ausencia') {
            return {
                title: 'Especialista en Implantes',
                desc: 'La falta de piezas dentales puede causar problemas en la mordida. Los implantes de titanio son la solución definitiva y permanente que recomendamos.',
                action: 'Evaluación para Implante',
                urgent: false
            };
        }
        return {
            title: 'Odontología General Preventiva',
            desc: 'La prevención es tu mejor aliada. Agendá un turno para realizar un examen completo, toma de radiografías digitales y una higiene profesional profunda.',
            action: 'Agendar Chequeo',
            urgent: false
        };
    };

    const result = getRecommendation();

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <AnimatedSection className="text-center mb-10">
                    <span className="text-cyan-600 text-sm font-semibold uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full inline-block mb-3">
                        Asistente Virtual
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Descubrí qué tratamiento necesitás
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Respondé 2 simples preguntas para que nuestro sistema te indique el especialista adecuado para tu caso.
                    </p>
                </AnimatedSection>

                {/* Contenedor Interactivo */}
                <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(15,23,42,0.06)] border border-slate-100 overflow-hidden min-h-[400px] flex flex-col relative">
                    {/* Barra de Progreso */}
                    <div className="w-full h-1 bg-slate-50 relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-accent"
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
                                    <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <ShieldCheck size={36} className="text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        ¿No sabés por dónde empezar?
                                    </h3>
                                    <p className="text-slate-500 mb-8 max-w-md mx-auto">
                                        Iniciá nuestro diagnóstico rápido online. Te tomará menos de 30 segundos.
                                    </p>
                                    <button
                                        onClick={() => setStep('symptom')}
                                        className="btn-primary inline-flex items-center gap-2"
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
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
                                        ¿Cuál es el motivo principal de tu consulta?
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {symptoms.map((s) => (
                                            <button
                                                key={s.id}
                                                onClick={() => handleSymptomSelect(s.id)}
                                                className="group text-left p-5 rounded-2xl border border-slate-100 bg-white hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/50 transition-all flex items-center gap-4"
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`}>
                                                    <s.icon size={24} className={s.color} />
                                                </div>
                                                <span className="font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">
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
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
                                        ¿Desde hace cuánto tiempo sentís esto / lo estás pensando?
                                    </h3>
                                    <div className="flex flex-col gap-3 max-w-md mx-auto">
                                        {durations.map((d) => (
                                            <button
                                                key={d.id}
                                                onClick={() => handleDurationSelect(d.id)}
                                                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-800 transition-colors font-medium text-slate-600 text-center"
                                            >
                                                {d.label}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setStep('symptom')}
                                            className="text-slate-400 text-sm mt-4 hover:text-slate-600 underline"
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
                                    <div className="mb-6 inline-block p-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl border border-cyan-100">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-600 mb-2">
                                            Recomendación del Triage
                                        </h3>
                                        <h4 className="text-2xl font-bold text-slate-900">
                                            {result.title}
                                        </h4>
                                    </div>
                                    <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                                        {result.desc}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a
                                            href="#contacto"
                                            className={`${result.urgent ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'btn-primary'} px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2`}
                                        >
                                            {result.action}
                                            <ArrowRight size={18} />
                                        </a>
                                        <button
                                            onClick={resetTriage}
                                            className="flex items-center gap-2 text-slate-400 hover:text-accent font-medium py-3 px-4 transition-colors"
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
