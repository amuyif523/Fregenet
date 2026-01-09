"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Lock, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

export function PaymentSelector() {
    const t = useTranslations('Donate')
    const searchParams = useSearchParams()
    const [currency, setCurrency] = React.useState<'USD' | 'ETB'>('USD')
    const [selectedTier, setSelectedTier] = React.useState<number | null>(1) // Default to middle tier
    const [customAmount, setCustomAmount] = React.useState('')
    const [frequency, setFrequency] = React.useState<'one-time' | 'monthly'>('monthly')
    const [dedication, setDedication] = React.useState('')

    React.useEffect(() => {
        const dedicateTo = searchParams.get('dedicateTo')
        if (dedicateTo) {
            setDedication(`Sponsorship for ${dedicateTo}`)
        }
    }, [searchParams])

    // Define tiers structure
    const tiers = React.useMemo(() => {
        const isUSD = currency === 'USD';
        return [
            {
                id: 0,
                amount: isUSD ? '25' : '1000',
                label: t('tiers.supplies'),
                desc: isUSD ? '$25' : '1,000 Br'
            },
            {
                id: 1,
                amount: isUSD ? '100' : '5000',
                label: t('tiers.tuition'),
                desc: isUSD ? '$100' : '5,000 Br'
            },
            {
                id: 2,
                amount: isUSD ? '500' : '20000',
                label: t('tiers.classroom'),
                desc: isUSD ? '$500' : '20,000 Br'
            }
        ];
    }, [currency, t]);

    const handleTierSelect = (index: number) => {
        setSelectedTier(index)
        setCustomAmount('')
    }

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value)
        setSelectedTier(null)
    }

    return (
        <Card className="w-full shadow-xl border-primary/10 overflow-hidden">
            <CardHeader className="bg-muted/30 pb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <div className="flex bg-muted rounded-lg p-1 w-full sm:w-auto">
                        <button
                            onClick={() => setCurrency('USD')}
                            className={cn(
                                "flex-1 sm:flex-none px-6 py-2 text-sm font-medium rounded-md transition-all",
                                currency === 'USD'
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            USD ($)
                        </button>
                        <button
                            onClick={() => setCurrency('ETB')}
                            className={cn(
                                "flex-1 sm:flex-none px-6 py-2 text-sm font-medium rounded-md transition-all",
                                currency === 'ETB'
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            ETB (Br)
                        </button>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                            variant={frequency === 'one-time' ? 'default' : 'outline'}
                            size="sm"
                            className="flex-1"
                            onClick={() => setFrequency('one-time')}
                        >
                            {t('frequency.oneTime')}
                        </Button>
                        <Button
                            variant={frequency === 'monthly' ? 'default' : 'outline'}
                            size="sm"
                            className="flex-1"
                            onClick={() => setFrequency('monthly')}
                        >
                            {t('frequency.monthly')}
                        </Button>
                    </div>
                </div>

                {/* Gift Tiers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            onClick={() => handleTierSelect(index)}
                            className={cn(
                                "cursor-pointer relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 text-center hover:bg-accent/50",
                                selectedTier === index
                                    ? "border-primary bg-primary/5 shadow-sm"
                                    : "border-border bg-background"
                            )}
                        >
                            {selectedTier === index && (
                                <div className="absolute top-2 right-2 text-primary">
                                    <Check className="w-4 h-4" />
                                </div>
                            )}
                            <span className="text-2xl font-bold tracking-tight mb-1">{tier.desc}</span>
                            <span className="text-xs font-medium text-muted-foreground leading-tight">{tier.label}</span>
                        </div>
                    ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-4 space-y-4">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                            {currency === 'USD' ? '$' : 'Br'}
                        </span>
                        <Input
                            type="number"
                            placeholder={t('customAmount')}
                            className={cn(
                                "pl-8 text-center",
                                customAmount ? "border-primary ring-1 ring-primary" : ""
                            )}
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                        />
                    </div>

                    {/* Dedication Field */}
                    <div>
                        <Input
                            type="text"
                            placeholder={t('dedication')}
                            className={cn(
                                "bg-muted/10",
                                dedication ? "border-primary bg-primary/5" : ""
                            )}
                            value={dedication}
                            onChange={(e) => setDedication(e.target.value)}
                        />
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">{t('paymentMethod')}</label>
                    </div>

                    {currency === 'USD' ? (
                        <div className="space-y-4">
                            {/* Simulated Stripe Element */}
                            <div className="border rounded-lg p-4 bg-background space-y-3">
                                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                                    <CreditCard className="w-4 h-4" />
                                    <span>Card Details</span>
                                </div>
                                <Input placeholder="Card number" className="bg-muted/20 border-0 focus-visible:ring-1" />
                                <div className="grid grid-cols-2 gap-3">
                                    <Input placeholder="MM / YY" className="bg-muted/20 border-0 focus-visible:ring-1" />
                                    <Input placeholder="CVC" className="bg-muted/20 border-0 focus-visible:ring-1" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative flex items-center justify-center p-3 border rounded-lg bg-card hover:bg-accent/50 cursor-pointer transition-colors border-primary/20 bg-primary/5">
                                    <div className="absolute top-2 right-2 text-primary"><Check className="w-3 h-3" /></div>
                                    <span className="font-bold text-sm">Chapa</span>
                                </div>
                                <div className="flex items-center justify-center p-3 border rounded-lg bg-card hover:bg-accent/50 cursor-pointer transition-colors opacity-60">
                                    <span className="font-bold text-sm text-muted-foreground">Telebirr</span>
                                </div>
                            </div>

                            {/* Simulated Phone Input for Local Payment */}
                            <div className="border rounded-lg p-4 bg-background space-y-3">
                                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                                    <Smartphone className="w-4 h-4" />
                                    <span>Phone Number</span>
                                </div>
                                <Input placeholder="09..." className="bg-muted/20 border-0 focus-visible:ring-1" />
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 bg-muted/30 pt-6 pb-8">
                <Button size="lg" className="w-full text-lg shadow-lg shadow-primary/20 h-12">
                    {t('submit')}
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    <span>Encrypted & Secure 256-bit SSL Payment Processing</span>
                </div>
            </CardFooter>
        </Card>
    )
}
