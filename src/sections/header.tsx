import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Badge } from '@/components/ui/badge';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


export function Header() {
    return (
        <header className="header">
            <div className="relative flex mb-10 w-full flex-col items-start justify-start overflow-hidden">
                <div className="absolute right-0 left-0 mt-20 flex justify-center z-51">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>Paul</AvatarFallback>
                    </Avatar>
                </div>
                {<BackgroundRippleEffect />}
                <div className="mt-60 w-full">
                    <h2 className="relative z-10 mx-auto max-w-4xl text-center text-7xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
                        Paul Bagot
                    </h2>
                    <div className="relative z-10 flex w-full flex-col items-center justify-center">
                        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
                            Apprenti développeur informatique
                        </p>
                        <p className="relative z-10 mx-auto mt-2 max-w-xl text-center text-sm text-neutral-600 dark:text-neutral-400">
                            Disponible dès maintenant, à la recherche dès septembre 2025 d'un contrat d'apprentissage de 3 ans pour le Cycle Ingénieur à l'ESIEA (Laval 53)
                        </p>
                        <Badge className="relative z-10 mx-auto mt-4" variant="success" appearance="light" size="lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Disponible
                        </Badge>
                    </div>
                </div>
            </div>
        </header>
    );
}
