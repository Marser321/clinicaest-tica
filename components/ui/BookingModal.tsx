'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2, User, Phone } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({
        specialty: '',
        date: '',
        time: '',
        name: '',
        phone: ''
    });

    // Reset when closed
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setSelection({ specialty: '', date: '', time: '', name: '', phone: '' });
            }, 300);
        }
    }, [isOpen]);

    // Prevenir scroll del body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const specialties = [
        'Odontología General', 'Ortodoncia', 'Implantes', 'Estética (Carillas/Blanqueamiento)', 'Endodoncia', 'Urgencia'
    ];

    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 5; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            // Saltear domingos
            if (date.getDay() !== 0) {
                dates.push({
                    day: date.toLocaleDateString('es-UY', { weekday: 'short' }),
                    num: date.getDate(),
                    full: date.toISOString()
                });
            }
        }
        return dates.slice(0, 4); // Mostrar 4 días
    };

    const nextStep = () => setStep(prev => prev + 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(4); // Pantalla de éxito

        // Simular envío a WhatsApp o CRM
        console.log('Reserva simulada:', selection);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-full"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white relative z-10 shrink-0">
                                <div>
                                    <h3 className="font-display font-bold text-lg text-slate-900">
                                        Agendar Consulta
                                    </h3>
                                    {step < 4 && (
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            Paso {step} de 3
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            {step < 4 && (
                                <div className="h-1 w-full bg-slate-50 relative shrink-0">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-accent"
                                        initial={false}
                                        animate={{ width: `${(step / 3) * 100}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            )}

                            {/* Content Body (Scrollable) */}
                            <div className="p-6 overflow-y-auto">
                                <AnimatePresence mode="wait">
                                    {/* PASO 1: Especialidad */}
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="flex flex-col gap-3"
                                        >
                                            <h4 className="font-semibold text-slate-800 mb-2">¿En qué podemos ayudarte?</h4>
                                            {specialties.map((spec) => (
                                                <button
                                                    key={spec}
                                                    onClick={() => {
                                                        setSelection(prev => ({ ...prev, specialty: spec }));
                                                        nextStep();
                                                    }}
                                                    className={`text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between group
                                                        ${selection.specialty === spec
                                                            ? 'border-cyan-400 bg-cyan-50 shadow-sm'
                                                            : 'border-slate-200 hover:border-cyan-300 hover:bg-slate-50'
                                                        }
                                                    `}
                                                >
                                                    <span className={`font-medium ${selection.specialty === spec ? 'text-cyan-800' : 'text-slate-700 group-hover:text-cyan-700'}`}>
                                                        {spec}
                                                    </span>
                                                    <ChevronRight size={18} className={`${selection.specialty === spec ? 'text-accent' : 'text-slate-300 group-hover:text-cyan-400'}`} />
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}

                                    {/* PASO 2: Fecha y Hora */}
                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            {/* Selector de Fecha */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-2 text-slate-800 font-semibold mb-3">
                                                    <CalendarIcon size={18} className="text-accent" />
                                                    <h4>Seleccioná un día</h4>
                                                </div>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {generateDates().map((d) => (
                                                        <button
                                                            key={d.full}
                                                            onClick={() => setSelection(prev => ({ ...prev, date: d.full }))}
                                                            className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${selection.date === d.full
                                                                    ? 'bg-accent border-accent text-white shadow-md shadow-cyan-200'
                                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-cyan-300 hover:bg-cyan-50'
                                                                }`}
                                                        >
                                                            <span className="text-xs uppercase font-semibold opacity-80">{d.day}</span>
                                                            <span className="text-xl font-bold">{d.num}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Selector de Hora */}
                                            {selection.date && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="mb-6"
                                                >
                                                    <div className="flex items-center gap-2 text-slate-800 font-semibold mb-3">
                                                        <Clock size={18} className="text-accent" />
                                                        <h4>Horarios disponibles</h4>
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {['09:00', '10:30', '14:00', '15:30', '17:00', '18:00'].map((time) => (
                                                            <button
                                                                key={time}
                                                                onClick={() => setSelection(prev => ({ ...prev, time }))}
                                                                className={`py-2.5 rounded-lg border text-sm font-medium transition-all ${selection.time === time
                                                                        ? 'bg-accent border-accent text-white shadow-md shadow-cyan-200'
                                                                        : 'bg-white border-slate-200 text-slate-600 hover:border-cyan-300'
                                                                    }`}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* Actions */}
                                            <div className="flex justify-between items-center mt-8 border-t border-slate-50 pt-4">
                                                <button
                                                    onClick={() => setStep(1)}
                                                    className="text-slate-400 font-medium text-sm hover:text-slate-600"
                                                >
                                                    Volver
                                                </button>
                                                <button
                                                    disabled={!selection.date || !selection.time}
                                                    onClick={nextStep}
                                                    className="btn-primary py-2.5 px-6 disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    Continuar
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* PASO 3: Datos de Contacto */}
                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <div className="bg-cyan-50 rounded-xl p-4 mb-6 border border-cyan-100 flex flex-col gap-1">
                                                <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">Resumen</span>
                                                <p className="text-sm font-medium text-slate-800">{selection.specialty}</p>
                                                <p className="text-sm text-slate-600">Turno: {selection.time} hs</p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <User size={18} className="text-slate-400" />
                                                        </div>
                                                        <input
                                                            required
                                                            type="text"
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                                                            placeholder="Ej. Juan Pérez"
                                                            value={selection.name}
                                                            onChange={e => setSelection(prev => ({ ...prev, name: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Celular / WhatsApp</label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <Phone size={18} className="text-slate-400" />
                                                        </div>
                                                        <input
                                                            required
                                                            type="tel"
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                                                            placeholder="099 123 456"
                                                            value={selection.phone}
                                                            onChange={e => setSelection(prev => ({ ...prev, phone: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center mt-6 border-t border-slate-50 pt-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(2)}
                                                        className="text-slate-400 font-medium text-sm hover:text-slate-600"
                                                    >
                                                        Volver
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn-primary py-3 px-8 text-base shadow-lg shadow-cyan-500/30"
                                                    >
                                                        Confirmar Turno
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}

                                    {/* PANTALLA ÉXITO */}
                                    {step === 4 && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                                >
                                                    <CheckCircle2 size={40} className="text-emerald-500" />
                                                </motion.div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                                ¡Turno pre-agendado!
                                            </h3>
                                            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                                                Hola {selection.name}, recibimos tu solicitud para <strong>{selection.specialty}</strong>. Nuestro equipo se contactará por WhatsApp al {selection.phone} para confirmar en breve.
                                            </p>
                                            <button
                                                onClick={onClose}
                                                className="btn-secondary w-full"
                                            >
                                                Cerrar y volver a la web
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
