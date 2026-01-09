import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function StyleGuidePage() {
    return (
        <div className="container mx-auto py-12 space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-serif font-bold text-primary">Visual Identity System</h1>
                <p className="text-xl text-muted-foreground">Fregenet Kidan Lehitsanat Ground-Up Rebuild</p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold border-b pb-2">Color Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-24 w-full bg-primary rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="font-bold">Abyssinian Green (Primary)</span>
                            <span className="text-sm font-mono text-muted-foreground">#1B4332</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 w-full bg-secondary rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="font-bold">Sunrise Gold (Secondary)</span>
                            <span className="text-sm font-mono text-muted-foreground">#FFB703</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 w-full bg-accent rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="font-bold">Terracotta (Accent)</span>
                            <span className="text-sm font-mono text-muted-foreground">#BC6C25</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 w-full bg-background border rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="font-bold">Background</span>
                            <span className="text-sm font-mono text-muted-foreground">#FFFFFF</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold border-b pb-2">Typography</h2>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground uppercase tracking-widest">Headings (Playfair Display)</span>
                        <div className="space-y-4">
                            <h1 className="text-5xl font-serif font-bold">Heading 1: Transforming Lives</h1>
                            <h2 className="text-4xl font-serif font-bold">Heading 2: Our Mission</h2>
                            <h3 className="text-3xl font-serif font-bold">Heading 3: Get Involved</h3>
                            <h4 className="text-2xl font-serif font-bold">Heading 4: Recent Updates</h4>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground uppercase tracking-widest">Body (Inter)</span>
                        <p className="max-w-prose leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="max-w-prose text-sm text-muted-foreground">
                            Small text: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold border-b pb-2">Components</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Buttons</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button>Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <Button variant="outline">Outline Button</Button>
                            <Button variant="ghost">Ghost Button</Button>
                            <Button variant="destructive">Destructive</Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Inputs</h3>
                        <div className="space-y-4 max-w-sm">
                            <Input placeholder="Enter your email address" />
                            <Input disabled placeholder="Disabled input" />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <h3 className="text-lg font-medium mb-4">Cards</h3>
                        <Card className="max-w-md">
                            <CardHeader>
                                <CardTitle className="font-serif">Donation Tier</CardTitle>
                                <CardDescription>Support a student for one year.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-primary">$300<span className="text-base font-normal text-muted-foreground">/year</span></p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">✓ Full tuition coverage</li>
                                    <li className="flex items-center gap-2">✓ School supplies included</li>
                                    <li className="flex items-center gap-2">✓ Uniforms and meals</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Donate Now</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
