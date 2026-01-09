"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-background py-16 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 lg:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl font-serif font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                                Education is the Bridge to the Future
                            </h1>
                            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                For over 20 years, the Fregenet Foundation has been transforming lives in Addis Ababa, providing high-quality education and holistic support to children from underserved communities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col gap-4 min-[400px]:flex-row"
                        >
                            <Button size="lg" className="rounded-full h-14 px-8 text-lg gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                                <Heart className="h-5 w-5 fill-current" />
                                Sponsor a Student
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg gap-2 border-primary text-primary hover:bg-primary/5">
                                See Our Impact
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/hero-image.webp"
                                alt="Ethiopian students learning in a classroom"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
                        <div className="absolute -top-6 -right-6 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
