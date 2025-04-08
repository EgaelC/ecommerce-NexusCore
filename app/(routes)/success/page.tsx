"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[450px]">
                    <Image src="/tyoucom.jpg" alt="Success" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl"> ¡Gracias por tu compra, leyenda! 🎮</h1>
                    <p className="my-3">Tu nueva laptop gamer ya está en camino para llevar tu experiencia al siguiente nivel.
                    Prepárate para disfrutar de gráficos épicos, velocidad brutal y rendimiento sin límites.</p>
                    <p className="my-3">Sigue jugando. Sigue ganando.</p>


                    <Button className="w-full bg-blue-900 text-white hover:bg-blue-800" onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}


export default PageSuccess; 