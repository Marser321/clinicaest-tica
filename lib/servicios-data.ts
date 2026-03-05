// ============================================
// Datos enriquecidos de cada servicio dental
// ============================================

export interface Servicio {
    slug: string;
    titulo: string;
    descripcionCorta: string;
    descripcionLarga: string;
    beneficios: string[];
    proceso: { paso: string; detalle: string }[];
    riesgos: string[];
    icono: string; // nombre del icono Lucide
    color: string; // clase de color Tailwind
    colorHex: string; // para efectos de glow
    imagen: string; // Imagen principal del servicio
}

export const servicios: Servicio[] = [
    {
        slug: 'toxina-botulinica',
        titulo: 'Toxina Botulínica',
        descripcionCorta:
            'Atenuá arrugas y líneas de expresión con resultados naturales y sutiles para un rostro rejuvenecido.',
        descripcionLarga:
            'La aplicación de Toxina Botulínica (Botox) es el tratamiento preventivo y correctivo por excelencia para las arrugas dinámicas del tercio superior del rostro. Nuestro equipo médico especializado aplica microinyecciones precisas para relajar los músculos que causan las arrugas, manteniendo la naturalidad y expresividad de tu mirada. El procedimiento es rápido, indoloro y no requiere tiempo de recuperación.',
        beneficios: [
            'Suaviza arrugas en frente, entrecejo y patas de gallo',
            'Previene la formación de nuevas líneas de expresión',
            'Resultados naturales y armónicos',
            'Procedimiento rápido, indoloro y sin cirugía',
            'Retorno inmediato a las actividades diarias',
        ],
        proceso: [
            { paso: 'Evaluación', detalle: 'Análisis detallado de la mímica facial' },
            { paso: 'Diseño', detalle: 'Marcación de puntos estratégicos y dosis personalizada' },
            { paso: 'Aplicación', detalle: 'Microinyecciones con agujas ultra finas' },
            { paso: 'Resultado', detalle: 'Efecto visible progresivo entre los 3 y 15 días' },
            { paso: 'Control', detalle: 'Revisión y retoque a los 15 días si es necesario' },
        ],
        riesgos: [
            'Leve enrojecimiento temporal en la zona de inyección',
            'Posibles hematomas menores que desaparecen en pocos días',
            'Requiere evitar ejercicio intenso y calor extremo por 24hs post-aplicación'
        ],
        icono: 'Sparkles',
        color: 'text-purple-400',
        colorHex: '#C084FC',
        imagen: '/images/service_botox.png',
    },
    {
        slug: 'rellenos-dermicos',
        titulo: 'Ácido Hialurónico',
        descripcionCorta:
            'Devolvé volumen, hidratación y contorno a tu rostro con rellenos dérmicos premium.',
        descripcionLarga:
            'Los rellenos con Ácido Hialurónico permiten reponer el volumen perdido, armonizar el perfil, perfilar labios y disimular surcos marcados. Utilizamos productos biocompatibles y reabsorbibles de las mejores marcas del mercado. Cada tratamiento es diseñado a medida para respetar tu anatomía, buscando siempre la elegancia y sutileza (efecto "menos es más").',
        beneficios: [
            'Restaura el volumen y contorno facial',
            'Ideal para perfilado e hidratación de labios',
            'Tratamiento de ojeras y surcos nasogenianos',
            'Estimulación de colágeno e hidratación profunda',
            'Resultados inmediatos y reversibles',
        ],
        proceso: [
            { paso: 'Diagnóstico', detalle: 'Evaluación de proporciones faciales' },
            { paso: 'Elección de Producto', detalle: 'Selección de la densidad adecuada del hialurónico' },
            { paso: 'Anestesia', detalle: 'Aplicación de crema anestésica local' },
            { paso: 'Aplicación', detalle: 'Técnica de inyección con microcánulas para mayor seguridad' },
            { paso: 'Evaluación', detalle: 'Masaje moldeador y revisión conjunta del resultado' },
        ],
        riesgos: [
            'Inflamación inicial (edema) de 1 a 3 días',
            'Riesgo de hematomas en la zona tratada',
            'Contraindicado en enfermedades autoinmunes activas o embarazo'
        ],
        icono: 'Layers',
        color: 'text-pink-400',
        colorHex: '#F472B6',
        imagen: '/images/before_after_rejuvenation.png', // Usaremos una imagen existente
    },
    {
        slug: 'tratamientos-faciales',
        titulo: 'Limpieza e Hidratación',
        descripcionCorta:
            'Renová tu piel en profundidad, eliminá impurezas y lográ un brillo radiante desde la primera sesión.',
        descripcionLarga:
            'Nuestros tratamientos faciales de grado médico combinan aparatología avanzada y cosmecéutica premium. Ofrecemos desde limpiezas profundas y extracciones, hasta protocolos de hidratación intensiva, peelings químicos y dermaplaning. Diseñamos un plan de cuidado en casa (skincare) personalizado para optimizar y prolongar los resultados de los procedimientos realizados en clínica.',
        beneficios: [
            'Eliminación profunda de puntos negros y células muertas',
            'Estimulación de la renovación celular',
            'Piel más luminosa, suave y uniforme',
            'Mejora la absorción de productos de skincare',
            'Reducción de poros dilatados',
        ],
        proceso: [
            { paso: 'Análisis de Piel', detalle: 'Evaluación del tipo y condición actual de la piel' },
            { paso: 'Higiene Profunda', detalle: 'Desmaquillado y extracción de impurezas' },
            { paso: 'Exfoliación', detalle: 'Peeling suave o mecánico (según necesidad)' },
            { paso: 'Nutrición', detalle: 'Aplicación de mascarilla y sueros específicos' },
            { paso: 'Protección', detalle: 'Sellado e hidratación con factor de protección solar' },
        ],
        riesgos: [
            'Piel sensible al sol tras peelings químicos (requiere FPS)',
            'Enrojecimiento transitorio post-extracción',
            'Debe evitarse uso de ácidos fuertes en casa durante 72hs'
        ],
        icono: 'ShieldCheck',
        color: 'text-emerald-400',
        colorHex: '#34D399',
        imagen: '/images/service_facial.png',
    },
    {
        slug: 'depilacion-laser',
        titulo: 'Depilación Láser',
        descripcionCorta:
            'Eliminá el vello no deseado de forma definitiva con tecnología láser de vanguardia, segura para todo tipo de piel.',
        descripcionLarga:
            'Contamos con plataformas láser médicas de última generación (Trío/Diodo) que garantizan una depilación rápida, efectiva y prácticamente indolora gracias a su sistema de enfriamiento integrado. Nuestros protocolos son personalizados para cada paciente, asegurando resultados en menos sesiones y protegiendo siempre la salud e integridad de la piel.',
        beneficios: [
            'Reducción permanente del vello',
            'Prevención y cura de la foliculitis (vellos encarnados)',
            'Piel más suave y sedosa',
            'Tecnología segura para usar todo el año',
            'Tratamiento rápido y confortable',
        ],
        proceso: [
            { paso: 'Evaluación', detalle: 'Análisis del tipo de vello y fototipo de piel' },
            { paso: 'Preparación', detalle: 'Limpieza de la zona y protección ocular' },
            { paso: 'Calibración', detalle: 'Ajuste de parámetros según las características del paciente' },
            { paso: 'Aplicación Láser', detalle: 'Técnica de barrido con cabezal frío' },
            { paso: 'Post-Tratamiento', detalle: 'Aplicación de gel descongestivo' },
        ],
        riesgos: [
            'Contraindicado sobre piel bronceada recientemente',
            'Posible ardor o enrojecimiento perifolicular leve',
            'Se debe restringir exposición solar directa 2 semanas previas y post sesión'
        ],
        icono: 'ScanLine',
        color: 'text-blue-400',
        colorHex: '#60A5FA',
        imagen: '/images/service_laser.png',
    },
    {
        slug: 'medicina-corporal',
        titulo: 'Modelado Corporal',
        descripcionCorta:
            'Atenuá la celulitis, reducí centímetros y mejorá la firmeza con tecnología y tratamientos médicos.',
        descripcionLarga:
            'Nuestros tratamientos corporales están diseñados para combatir adiposidad localizada, celulitis y flacidez. Combinamos técnicas como mesoterapia corporal, radiofrecuencia, criolipólisis y enzimas recombinantes para lograr resultados efectivos sin cirugía. El abordaje es integral, buscando no solo mejoras estéticas sino también bienestar general.',
        beneficios: [
            'Reducción de grasa localizada sin cirugía',
            'Mejora visible en la apariencia de la celulitis',
            'Efecto tensor para combatir la flacidez',
            'Estimulación del sistema linfático',
            'Procedimientos ambulatorios de rápida recuperación',
        ],
        proceso: [
            { paso: 'Evaluación Corporal', detalle: 'Mediciones y registro fotográfico' },
            { paso: 'Plan de Acción', detalle: 'Selección de la tecnología o inyectables adecuados' },
            { paso: 'Tratamiento', detalle: 'Sesión en clínica (mesoterapia o aparatología)' },
            { paso: 'Seguimiento', detalle: 'Controles evolutivos' },
            { paso: 'Mantenimiento', detalle: 'Recomendaciones nutricionales y pautas complementarias' },
        ],
        riesgos: [
            'Calor intenso temporal (radiofrecuencia)',
            'Pequeños hematomas en mesoterapia inyectable',
            'Molestias transitorias en tejidos musculares profundos'
        ],
        icono: 'HeartPulse',
        color: 'text-orange-400',
        colorHex: '#FB923C',
        imagen: '/images/service_body.png',
    },
    {
        slug: 'bioestimulacion',
        titulo: 'Bioestimulación y PRP',
        descripcionCorta:
            'Regenerá tu piel desde adentro estimulando tu propio colágeno con plasma rico en plaquetas y bioestimuladores.',
        descripcionLarga:
            'La medicina regenerativa estética es el futuro. Mediante la aplicación de bioestimuladores (como Radiesse o Sculptra) o de tu propio Plasma Rico en Plaquetas (PRP), logramos despertar las células de la piel para que produzcan colágeno y elastina nueva. Esto devuelve firmeza, luminosidad y calidad a la piel envejecida, con un brillo verdaderamente revitalizado.',
        beneficios: [
            'Piel visiblemente más joven, firme y turgente',
            'Producción de colágeno propio a largo plazo',
            'Mejora cicatrices o marcas de acné',
            'Tratamiento 100% natural (en el caso de PRP)',
            'Resultados duraderos y evolutivos en el tiempo',
        ],
        proceso: [
            { paso: 'Consulta Médica', detalle: 'Evaluación del nivel de envejecimiento celular' },
            { paso: 'Preparación', detalle: 'Extracción de sangre (PRP) o preparación del bioestimulador' },
            { paso: 'Procesamiento', detalle: 'Centrifugado para obtener plasma concentrado (si aplica)' },
            { paso: 'Microinfiltración', detalle: 'Aplicación precisa en rostro, cuello o manos' },
            { paso: 'Recuperación', detalle: 'Cuidados post-procedimiento rápidos' },
        ],
        riesgos: [
            'Proceso de inyección genera inflamación controlada esperable',
            'Molestia leve durante la infiltración celular',
            'Resultados evolutivos que tardan entre 30 y 45 días en manifestarse visualmente'
        ],
        icono: 'Crosshair',
        color: 'text-cyan-400',
        colorHex: '#22D3EE',
        imagen: '/images/service_prp.png',
    }
];

export function getServicioBySlug(slug: string): Servicio | undefined {
    return servicios.find((s) => s.slug === slug);
}
