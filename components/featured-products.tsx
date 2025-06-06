"use client";

import { useGetFeaturedProducts } from "@/api/UseGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconBUtton from "./icon-button";
import { useRouter } from "next/navigation"; // En lugar de "next/router"
import { useCart } from "@/hooks/use-cart";



const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts()
    const router = useRouter()
    const {addItem, items} = useCart()

    console.log(items);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-4 md:-ml-8">
                    {loading && (
                        <SkeletonSchema grid={2} />
                    )}
                    {result !== null && (
                        result.map((product: ProductType) => {
                            const { id, slug, productName, Brand, origin } = product; // No desestructuramos attributes

                            return (
                                <CarouselItem key={id} className="md:basis-2/3 lg:basis-2/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img
                                                      src={product.images?.[0]?.url || "/placeholder.jpg"}
                                                      alt={product.productName}
                                                      className="object-contain max-h-50"
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconBUtton
                                                            onClick={() => router.push(`product/${slug}`)}
                                                            icon={<Expand size={20} />}
                                                            className="text-gray-600"
                                                        />

                                                        <IconBUtton
                                                            onClick={() => addItem(product)}
                                                            icon={<ShoppingCart size={20} />}
                                                            className="text-gray-600"
                                                        />


                                                    </div>
                                                </div>
                                            </CardContent>

                                            <div className="flex justify-between gap-4 px-8">
                                                <h3 className="text-lg font-bold">{productName}</h3>
                                                <div className="flex items-center justify-between gap-3">
                                                    <p className= "px-2 py-1 text-white bg-blue-700 rounded-full w-fit" > {Brand}</p>
                                                    <p className= "px-2 py-1 text-white bg-blue-950 rounded-full w-fit"> {origin}</p>
                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })

                    )}
                </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext className="hidden sm:flex"/>
            </Carousel>

        </div>
    );
}
export default FeaturedProducts
