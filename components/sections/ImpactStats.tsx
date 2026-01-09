"use client";
import { useTranslations } from 'next-intl';

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({
    value,
    direction = "up",
}: {
    value: number;
    direction?: "up" | "down";
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [motionValue, isInView, direction, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    Math.floor(latest)
                );
            }
        });
    }, [springValue]);

    return <span ref={ref} />;
}

export function ImpactStats() {
    const t = useTranslations('ImpactStats');
    const stats = [
        {
            value: 100,
            suffix: "%",
            label: t('graduationRate'),
            description: t('graduationDesc'),
        },
        {
            value: 500,
            suffix: "+",
            label: t('studentsSupported'),
            description: t('studentsDesc'),
        },
        {
            value: 2,
            suffix: "",
            label: t('yearsService'),
            description: t('yearsDesc'),
        },
    ];

    return (
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-8 md:grid-cols-3 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                            <div className="text-5xl lg:text-6xl font-serif font-bold tracking-tighter flex items-baseline">
                                <Counter value={stat.value} />
                                <span>{stat.suffix}</span>
                            </div>
                            <h3 className="text-xl font-medium opacity-90">{stat.label}</h3>
                            <p className="text-sm opacity-75 max-w-[200px] mx-auto">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
