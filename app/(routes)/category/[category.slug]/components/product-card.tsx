import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    const router = useRouter()

    return (
        <Link
            href={`/product/${product.slug}`}
            className="relative block p-2 rounded-lg transition-all duration-100 hover:shadow-md bg-white"
        >
            {/* Etiquetas arriba a la izquierda */}
            <div className="absolute top-4 left-4 z-[1] flex gap-2">
                <p className="px-2 py-1 text-xs text-white bg-blue-700 rounded-full">{product.Brand}</p>
                <p className="px-2 py-1 text-xs text-white bg-blue-950 rounded-full">{product.origin}</p>
            </div>

            <Carousel
                opts={{
                    align: "start"
                }}
                className="w-full max-w-sm">
                <CarouselContent>
                    {product.images?.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img
                                src={`${image.url}`}
                                alt={image.name}
                                className="rounded-xl"
                            />
                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`/product/${product.slug}`)} icon={<Expand size={20} className="text-gray-600" />} />
                                    <IconButton onClick={() => console.log("product")} icon={<ShoppingCart size={20} className="text-gray-600" />} />

                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-2x text-center">{product.productName}</p>
            <p className="font-bold text-center">{formatPrice(product.price)}</p>
            
        </Link>

    );
}

export default ProductCard; 