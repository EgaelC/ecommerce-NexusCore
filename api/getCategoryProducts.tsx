import { useEffect, useState } from "react";

export function useGetCategoryProduct(slug?: string) {
    const [result, setResult] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!slug) return; // Evitar llamadas sin un slug válido
        
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
        
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();

                setResult(json.data || []); // Asegurar que siempre sea un array
                setLoading(false);
            } catch (error: any) {
                setError(error.message || "Error desconocido");
                setLoading(false);
            }
        })();
    }, [slug]);

    return { loading, result, error };
}
