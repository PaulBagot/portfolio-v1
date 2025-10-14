import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { SocialTooltip } from '@/components/ui/social-media';

export function Contact() {
    return (
        <>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={0.04 * 16}>
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in Touch
                            </h2>
                        </div>
                    </BlurFade>
                </div>
            </section>
            <SocialTooltip className="mb-12 -mt-20" items={[...DATA.contact.social]} />
        </>
    )
}