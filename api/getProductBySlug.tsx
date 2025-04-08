import { useEffect, useState } from "react";


export function useGetProductBySlug (slug:string | string[]) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;
    const [result, setResult] = useState (null);
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
 