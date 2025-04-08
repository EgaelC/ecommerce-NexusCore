import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumérgete en una experiencia única con</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">Lo Mejor del Gaming</h4>
                <p className="my-2 text-lg"></p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>

            <div className="h-[350px] bg-cover lg:h-[400px] bg-[url('/BANNER-ARMAR-PC.png')] bg-center mt-3"/>
        </>
    );
}

export default BannerProduct;