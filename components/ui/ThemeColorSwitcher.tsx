'use client';

import * as React from 'react';
import { motion } from 'motion/react';

const themes = [
    { id: 'theme-red', color: '#DC2626', name: 'Rojo (Por defecto)' },
    { id: 'theme-gold', color: '#D97706', name: 'Dorado' },
    { id: 'theme-blue', color: '#0284c7', name: 'Celeste' },
];

export function ThemeColorSwitcher() {
    const [mounted, setMounted] = React.useState(false);
    const [activeTheme, setActiveTheme] = React.useState('theme-red');

    React.useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('app-color-theme') || 'theme-red';
        setActiveTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    const changeTheme = (themeId: string) => {
        const root = document.documentElement;
        // Remove all current themes
        themes.forEach(t => root.classList.remove(t.id));
        // Add new theme
        root.classList.add(themeId);
        setActiveTheme(themeId);
        localStorage.setItem('app-color-theme', themeId);
    };

    if (!mounted) {
        return (
            <div className="flex items-center gap-2 px-2 opacity-50">
                {themes.map(t => (
                    <div key={t.id} className="w-5 h-5 rounded-full bg-white/10" />
                ))}
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/10">
            {themes.map(({ id, color, name }) => (
                <motion.button
                    key={id}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => changeTheme(id)}
                    className={`w-6 h-6 rounded-full transition-shadow ${activeTheme === id
                        ? 'ring-2 ring-offset-2 ring-offset-[var(--color-bg-primary)] ring-[var(--color-text-primary)] shadow-sm'
                        : 'opacity-70 hover:opacity-100'
                        }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Cambiar a tema ${name}`}
                    title={`Tema ${name}`}
                />
            ))}
        </div>
    );
}
