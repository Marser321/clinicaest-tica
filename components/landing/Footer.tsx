import Link from 'next/link';
import { servicios } from '@/lib/servicios-data';
import { Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border-t border-[var(--color-glass-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Marca */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[var(--background-image-cta-gradient)] flex items-center justify-center shadow-glow-accent border border-[var(--color-accent)]/20">
                                <span className="text-[var(--color-text-primary)] font-display font-bold text-lg">AP</span>
                            </div>
                            <div>
                                <span className="font-display font-bold text-sm text-[var(--color-text-primary)]">AestheticPro</span>
                                <p className="text-xs text-[var(--color-text-muted)] -mt-0.5">Clínica Estética</p>
                            </div>
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs">
                            Medicina estética avanzada con médicos especialistas en tratamientos faciales y corporales.
                            Cuidamos tu bienestar integral.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-4 uppercase tracking-wider">
                            Servicios
                        </h4>
                        <ul className="space-y-2.5">
                            {servicios.slice(0, 6).map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        href={`/servicios/${s.slug}`}
                                        className="text-[var(--color-text-muted)] text-sm hover:text-[var(--color-accent)] transition-colors duration-200"
                                    >
                                        {s.titulo}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Más servicios */}
                    <div>
                        <h4 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-4 uppercase tracking-wider">
                            Más Servicios
                        </h4>
                        <ul className="space-y-2.5">
                            {servicios.slice(6).map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        href={`/servicios/${s.slug}`}
                                        className="text-[var(--color-text-muted)] text-sm hover:text-[var(--color-accent)] transition-colors duration-200"
                                    >
                                        {s.titulo}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-4 uppercase tracking-wider">
                            Contacto
                        </h4>
                        <ul className="space-y-2.5 text-[var(--color-text-muted)] text-sm">
                            <li>📍 Av. Principal 1234, Uruguay</li>
                            <li>📞 +598 0000 0000</li>
                            <li>✉️ contacto@aestheticpro.uy</li>
                            <li>🕐 Lun-Vie: 9:00 - 19:00</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[var(--color-glass-border)] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--color-text-muted)] text-xs">
                        © {new Date().getFullYear()} AestheticPro Clínica Estética. Todos los derechos reservados.
                    </p>
                    <p className="text-[var(--color-text-muted)] text-xs flex items-center gap-1">
                        Hecho por M Morera Agency
                    </p>
                </div>
            </div>
        </footer>
    );
}
