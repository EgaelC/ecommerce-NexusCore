import ProductBrandOrigin from "@/components/shared/product-brand-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products"; // ✅ Asegúrate de que este path esté correcto
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = ({ product }: InfoProductProps) => {
  const { addItem } = useCart();
  const { addLoveItem } = useLovedProducts() // 


  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl font-semibold">{product.productName}</h1>
          <ProductBrandOrigin Brand={product.Brand} origin={product.origin} />
      </div>

      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-xl semi-bold text-blue-900">
        {formatPrice(product.price)}
      </p>

      <div className="flex items-center gap-4">
        <Button
          className="flex-grow bg-blue-900 text-white hover:bg-blue-800"
          onClick={() => addItem(product)}
        >
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLoveItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
