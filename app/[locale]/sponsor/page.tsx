import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import students from '@/lib/data/students.json';

export default function SponsorPage() {
    const t = useTranslations('Sponsor');

    return (
        <div className="container mx-auto py-12 px-4 space-y-12">
            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-primary">{t('title')}</h1>
                <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {students.map((student, index) => (
                    <Card key={student.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-primary/10">
                        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                            <Image
                                src={student.image}
                                alt={`Photo of ${student.name}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={index < 3}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">"{student.dream}"</p>
                            </div>
                        </div>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold font-serif">{student.name}</h3>
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {t('grade')} {student.grade}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">{t('dream')}:</span>
                                <span>{student.dream}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" size="lg">
                                <Link href={`/donate?dedicateTo=${student.name}`}>
                                    {t('sponsorBtn')} {student.name}
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
