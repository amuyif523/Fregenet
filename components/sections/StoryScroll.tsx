"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function StoryScroll() {
    const t = useTranslations('Story');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

    // Parallax text
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -200]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Background 1: Dusty Street (Before) */}
                <motion.div style={{ opacity }} className="absolute inset-0">
                    <Image
                        src="/dusty_street_addis.png"
                        alt="Dusty street in Addis Ababa"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                {/* Background 2: School Gate (After) */}
                <motion.div style={{ opacity: opacity2 }} className="absolute inset-0">
                    <Image
                        src="/school_gate_bright.png"
                        alt="Fregenet School Gate"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="container px-4">
                        <div className="grid gap-20 lg:grid-cols-2">
                            {/* Card 1: The Challenge */}
                            <motion.div
                                style={{ opacity: useTransform(scrollYProgress, [0.1, 0.4], [1, 0]), y: y1 }}
                                className="bg-white/90 dark:bg-black/90 p-8 rounded-2xl shadow-xl backdrop-blur-sm max-w-lg"
                            >
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                                    {t('challenge.title')}
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    {t('challenge.desc')}
                                </p>
                                <div className="mt-4 text-sm font-semibold text-secondary">
                                    {t('challenge.location')}
                                </div>
                            </motion.div>

                            {/* Card 2: The Transformation */}
                            <motion.div
                                style={{ opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]), y: y2 }}
                                className="bg-white/90 dark:bg-black/90 p-8 rounded-2xl shadow-xl backdrop-blur-sm max-w-lg lg:col-start-2"
                            >
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                                    {t('success.title')}
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    {t('success.desc')}
                                </p>
                                <div className="mt-4 text-sm font-semibold text-primary">
                                    {t('success.impact')}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Amharic Parallax Typography */}
                <motion.div
                    style={{ x: useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]), opacity: 0.1 }}
                    className="absolute top-1/4 left-0 text-[10rem] font-bold text-white whitespace-nowrap pointer-events-none font-sans"
                >
                    ተስፋ (Hope)
                </motion.div>
                <motion.div
                    style={{ x: useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]), opacity: 0.1 }}
                    className="absolute bottom-1/4 right-0 text-[10rem] font-bold text-white whitespace-nowrap pointer-events-none font-sans"
                >
                    ትምህርት (Education)
                </motion.div>
            </div>
        </section>
    );
}
