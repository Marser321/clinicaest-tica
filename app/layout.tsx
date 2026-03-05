import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { InsforgeProvider } from './providers';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AestheticPro | Medicina Estética Avanzada',
  description:
    'Clínica estética especializada en tratamientos faciales y corporales. Toxina botulínica, rellenos, láser y tecnología de primer nivel para potenciar tu belleza.',
  keywords: [
    'medicina estética',
    'botox',
    'ácido hialurónico',
    'depilación láser',
    'clínica estética',
    'AestheticPro',
    'rejuvenecimiento facial',
    'modelado corporal',
    'bioestimuladores',
  ],
  openGraph: {
    title: 'AestheticPro Medicina Estética',
    description:
      'Medicina estética y tecnología de vanguardia para tu bienestar.',
    type: 'website',
    locale: 'es_UY',
  },
};

import { Toaster } from 'sonner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['light', 'dark']}
        >
          <InsforgeProvider>
            {children}
          </InsforgeProvider>
          <Toaster theme="system" position="top-center" toastOptions={{ style: { background: 'var(--color-bg-primary)', border: '1px solid var(--color-accent)', color: 'var(--color-text-primary)' } }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
