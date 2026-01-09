import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Ethiopic } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-noto-sans-ethiopic",
  subsets: ["ethiopic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fregenet Kidan Lehitsanat",
  description: "Transforming lives through education.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isAmharic = locale === 'am';
  const fontClass = isAmharic
    ? `${notoSansEthiopic.variable} font-sans`
    : `${inter.variable} ${playfair.variable} font-sans`;

  return (
    <html lang={locale}>
      <body className={`${fontClass} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
