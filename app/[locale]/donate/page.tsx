import { useTranslations } from 'next-intl';
import { PaymentSelector } from '@/components/sections/payment-selector';
import { TrustBanner } from '@/components/sections/trust-banner';
import { CheckCircle2 } from 'lucide-react';

export default function DonatePage() {
    const t = useTranslations('Donate');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-12 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* Left Column: Content */}
                        <div className="flex-1 space-y-8 lg:pt-8 w-full">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary tracking-tight leading-tight">
                                    {t('title')}
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                                    {t('intro')}
                                </p>
                            </div>

                            <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                                <h3 className="font-serif text-2xl font-semibold mb-6">Your Contribution Supports:</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Quality Education</h4>
                                            <p className="text-muted-foreground leading-snug">Access to high-standard curriculum and learning materials.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Daily Meals</h4>
                                            <p className="text-muted-foreground leading-snug">Nutritious breakfast and lunch programs for all students.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Community Development</h4>
                                            <p className="text-muted-foreground leading-snug">Empowering families and local communities through diversified support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual quote */}
                            <div className="bg-white/40 dark:bg-black/20 p-6 rounded-2xl italic text-lg text-muted-foreground border-l-4 border-secondary">
                                "Education is the most powerful weapon which you can use to change the world."
                                <div className="mt-2 font-bold not-italic text-foreground text-base">— Nelson Mandela</div>
                            </div>
                        </div>

                        {/* Right Column: Payment Form */}
                        <div className="w-full lg:w-[520px] shrink-0 lg:sticky lg:top-8">
                            <PaymentSelector />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <TrustBanner />

            {/* Additional Info Section */}
            <section className="py-8 bg-muted/20 border-t">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Fregenet Kidan Lehitsanat is a registered non-profit organization.
                        <br />
                        Your donation is secure. We use industry-standard encryption to protect your personal information.
                    </p>
                </div>
            </section>
        </div>
    );
}
