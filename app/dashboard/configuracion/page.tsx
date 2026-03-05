'use client';

import { motion } from 'motion/react';
import { Settings, Wrench } from 'lucide-react';

export default function ConfiguracionPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 mb-6 rounded-3xl bg-red-950/40 border border-red-900/30 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.15)]"
            >
                <Wrench size={40} className="text-red-500" />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-display font-bold text-white mb-4"
            >
                Configuración en Mantenimiento
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 max-w-md mx-auto"
            >
                Estamos preparando el panel de control de clínicas para que puedas personalizar roles, permisos, y facturación en la versión final de OdontoPro.
            </motion.p>
        </div>
    );
}
