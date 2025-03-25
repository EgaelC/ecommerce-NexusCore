"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío en 24/48 horas",
        description: "Como cliente VIP, tus envíos se realizan en 24/48 horas. Obtén más información y únete.",
        link: "#!"
    },
    {
        id: 2,
        title: "Consigue hasta un -25% en compras superiores a 20,000MX",
        description: "-20% al gastar 18,000MX o -25% al gastar 20,000MX. Obten codigos para diferentes descuentos",
        link: "#!"
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Como cliente, tienes envíos y devoluciones gratuitas en un plazo de 3 meses",
        link: "#!"
    },
    {
        id: 4,
        title: "Comprar novedades",
        description: "Algunos gadgets para acompañar tu experiencia como gamer",
        link: "#!"
    }
];
const CarouselTextBanner = () => {
    const router = useRouter()
    return(
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto" plugins={[Autoplay({delay: 2500,}),]}>
                <CarouselContent>
                {dataCarouselTop.map(({id,title,link,description})=>(
                    <CarouselItem key={id} onClick={()=>router.push(link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm-text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
export default CarouselTextBanner