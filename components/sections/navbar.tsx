"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function Navbar() {
    const t = useTranslations('Navigation');
    const tMetadata = useTranslations('Metadata');
    const pathname = usePathname();

    const links = [
        { href: "/sponsor", label: t('sponsor') },
        { href: "/donate", label: t('donate') },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-serif text-xl font-bold text-primary tracking-tight">
                    Fregenet NGO
                </Link>

                <nav className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <Button asChild size="sm" className="hidden sm:inline-flex">
                            <Link href="/donate">{t('donate')}</Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
