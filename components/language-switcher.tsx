"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "am" : "en";
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            disabled={isPending}
            className={cn(
                "relative overflow-hidden transition-all duration-300 gap-2 font-medium group hover:bg-primary/10",
                isPending && "opacity-70"
            )}
        >
            <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className={cn("transition-all duration-300", locale === 'en' ? "font-sans" : "font-sans")}>
                {locale === "en" ? "አማ" : "ENG"}
            </span>
            <span className="sr-only">Switch Language</span>
        </Button>
    );
}
