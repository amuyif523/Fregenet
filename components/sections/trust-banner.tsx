import { useTranslations } from 'next-intl';

export function TrustBanner() {
    const t = useTranslations('Trust');

    // Placeholder logos
    const partners = [
        { name: "Partner 1", color: "bg-blue-100 text-blue-800" },
        { name: "Partner 2", color: "bg-green-100 text-green-800" },
        { name: "Partner 3", color: "bg-purple-100 text-purple-800" },
        { name: "Partner 4", color: "bg-orange-100 text-orange-800" },
    ];

    const timeline = [
        { year: "2004", key: "2004" },
        { year: "2010", key: "2010" },
        { year: "2016", key: "2016" },
        { year: "2024", key: "2024" },
    ];

    return (
        <section className="py-16 border-t bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-semibold mb-4">{t('title')}</h2>
                </div>

                {/* Timeline */}
                <div className="relative mb-16 max-w-4xl mx-auto">
                    {/* Line */}
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-border hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center">
                                {/* Dot */}
                                <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 mb-4 shadow-sm">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-lg font-bold font-serif text-primary">{item.year}</span>
                                    <p className="text-sm text-muted-foreground">{t(`timeline.${item.key}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`h-12 px-6 rounded-lg flex items-center justify-center font-bold text-sm ${partner.color} grayscale hover:grayscale-0 transition-all duration-300 cursor-default`}
                        >
                            {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
