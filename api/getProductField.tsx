"use client"; // Asegura que el código se ejecute en el cliente

import { ResultFilterTypes } from "@/types/filters";
import { useEffect, useState } from "react";

export function useGetProductField() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
    const [result, setResult] = useState<ResultFilterTypes | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                console.log("Llamando a la API:", url); // 👀 Verificar si la API está siendo llamada
                const res = await fetch(url);
                const json = await res.json();
                console.log("Respuesta de la API:", json); // 👀 Ver qué devuelve la API   
                setResult(json.data);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, result, error };
}
