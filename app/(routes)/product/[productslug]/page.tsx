"use client"

import { useParams } from "next/navigation"
import {ResponseType } from "@/types/response"
import { useGetProductBySlug } from "@/api/getProductBySlug";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
    const params = useParams()
    const productslug = params?.productslug as string; // 👈 Aseguramos que es string

    const { result } : ResponseType = useGetProductBySlug(productslug)

    if (result == null) {
      return  <SkeletonProduct/>
    }

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={result[0].images}/>
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]}/>
                </div>
            </div>
        </div>
    )
}