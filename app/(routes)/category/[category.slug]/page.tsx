"use client";

import { useEffect, useState } from "react";
import { useGetCategoryProduct } from "@/api/getCategoryProducts";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";

export default function Page() {
    const params = useParams();
    const { "category.slug": categorySlug } = params as { "category.slug"?: string };
    const { result, loading, error }: ResponseType = useGetCategoryProduct(categorySlug);
    const [filterOrigin, setFilterOrigin] = useState('')
    const router = useRouter()


    const filteredProducts = result !== null &&!loading && (
        filterOrigin == '' ? result : result.filter((product: ProductType) => product.origin == filterOrigin)
    )  

    console.log(filteredProducts);

    if (!categorySlug) {
        return <div>Error: No se encontró la categoría</div>;
    }


    useEffect(() => {
        console.log("Productos recibidos:", result);
    }, [result]);

    // Retorna un mensaje de carga mientras se obtienen los productos
    if (loading) return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h1 className="text-3x-l font-medium">Cargando productos...</h1>
            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 ">
                <SkeletonSchema grid={3} />
            </div>
        </div>
    );

    // Si ocurre un error al cargar productos
    if (error) return <div>Error al cargar productos: {error}</div>;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h1 className="text-3x-l font-medium">
                Laptops {result[0].category.categoryName}
            </h1>

            <div className="sm:flex sm:justify-between">
                <FiltersControlCategory setFilterOrigin={setFilterOrigin}/>

                <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
                    {filteredProducts?.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    {filteredProducts !== null && !loading && filteredProducts.length == 0 && (
                        <p>No hay productos con este filtro.</p>
                    )}
                </div>
            </div>
        </div>

    );
}
