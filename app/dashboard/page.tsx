import Link from 'next/link';
import { Calendar, Users, CreditCard } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="flex flex-col h-full gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold">Portal de Gestión</h1>
                    <p className="text-slate-400 mt-1">Bienvenido a la demo de OdontoPro CRM</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <Link href="/dashboard/agenda" className="bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-black/40 transition-all rounded-2xl p-6 group">
                    <div className="w-12 h-12 rounded-xl bg-red-950/40 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Calendar size={24} />
                    </div>
                    <h2 className="text-xl font-medium mb-2 text-white group-hover:text-red-400 transition-colors">Ver Agenda</h2>
                    <p className="text-slate-400 text-sm">Gestioná turnos y sillones odontológicos con datos en tiempo real de la base de datos.</p>
                </Link>

                <Link href="/dashboard/pacientes" className="bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-black/40 transition-all rounded-2xl p-6 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/40 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <h2 className="text-xl font-medium mb-2 text-white group-hover:text-blue-400 transition-colors">Directorio Clínico</h2>
                    <p className="text-slate-400 text-sm">Explora las historias clínicas interactivas, odontogramas y evolución de los pacientes.</p>
                </Link>

                <Link href="/dashboard/membresias" className="bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-black/40 transition-all rounded-2xl p-6 group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/40 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CreditCard size={24} />
                    </div>
                    <h2 className="text-xl font-medium mb-2 text-white group-hover:text-emerald-400 transition-colors">Suscripciones</h2>
                    <p className="text-slate-400 text-sm">Visualizá el flujo de ingresos recurrentes, LTV y pacientes con su estado de pagos actual.</p>
                </Link>
            </div>
        </div>
    );
}
