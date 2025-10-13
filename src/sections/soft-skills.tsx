import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export function SoftSkills() {
    return (
        <section id="soft-skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={0.04 * 9}>
                    <h2 className="text-xl font-bold">Compétences</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                    {DATA.softSkills.map((SoftSkills, id) => (
                        <BlurFade key={SoftSkills} delay={0.04 * 10 + id * 0.05}>
                            <Badge key={SoftSkills}>{SoftSkills}</Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}
