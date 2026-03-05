'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export function TiltCard({ children, className = '', intensity = 15 }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Mouse position relative to center of the card (-1 to 1)
        const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
        const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

        // Map mouse position to glare position (0 to 100)
        setGlarePosition({
            x: ((e.clientX - rect.left) / width) * 100,
            y: ((e.clientY - rect.top) / height) * 100,
        });

        // Rotate in the opposite direction of the mouse
        setRotateX(-mouseY * intensity);
        setRotateY(mouseX * intensity);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden cursor-pointer will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX,
                rotateY,
                scale: isHovered ? 1.02 : 1, // Slight lift
            }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
                mass: 0.5,
            }}
            style={{
                transformPerspective: 1000,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Dinamic Glare Effect */}
            <div
                className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 rounded-[inherit]"
                style={{
                    background: `radial-gradient(
                        circle at ${glarePosition.x}% ${glarePosition.y}%, 
                        rgba(255, 255, 255, 0.4) 0%, 
                        rgba(255, 255, 255, 0) 50%
                    )`,
                    opacity: isHovered ? 1 : 0,
                    mixBlendMode: 'overlay',
                }}
            />
            {children}
        </motion.div>
    );
}
