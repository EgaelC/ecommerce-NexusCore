interface ProductBrandOrigin {
    Brand: string,
    origin: string
}

const ProductBrandOrigin = (props: ProductBrandOrigin) => {
    const {origin,Brand} = props
    return (
        <div className="flex  items-center justify gap-3">
            <p className="px-2 py-1 text-xs text-white bg-blue-700 rounded-full w-fit">
                {Brand}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-blue-950 rounded-full w-fit">
                {origin}
            </p>
        </div>
    );
}


export default ProductBrandOrigin;