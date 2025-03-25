"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

const dataCarouselTop = [
  { id: 1, title: "Envío en 24/48 horas", description: "Tus envíos en 24/48 horas como cliente VIP.", link: "#!" },
  { id: 2, title: "Hasta -25% en compras", description: "-20% al gastar 18,000MX o -25% al gastar 20,000MX.", link: "#!" },
  { id: 3, title: "Devoluciones y entregas gratuitas", description: "Envíos y devoluciones gratis por 3 meses.", link: "#!" },
  { id: 4, title: "Comprar novedades", description: "Descubre gadgets para mejorar tu experiencia gamer.", link: "#!" }
];

const CarouselTextBanner = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme(); // Usamos `resolvedTheme` para detectar el tema real

  // Aplica clases según el tema actual
  const bgColor = resolvedTheme === "dark" ? "bg-gray-100 text-black" : "bg-gray-200 text-black";

  return (
    <div className={`${bgColor} transition-colors duration-300`}>
      <Carousel className="w-full max-w-4xl mx-auto" plugins={[Autoplay({ delay: 2500 })]}>
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, description, link }) => (
            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
              <Card className="shadow-none border-none bg-transparent text-center">
                <CardContent className="p-2">
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm">{description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
