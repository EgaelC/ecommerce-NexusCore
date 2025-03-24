import Link from "next/link";
import {Menu} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const ItemsMenuMobile = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/gama-alta" className="block">Gama Alta</Link>
                <Link href="/categories/gama-media/alta" className="block">Gama Media/Alta</Link>
            </PopoverContent>
        </Popover>
    );
}
export default ItemsMenuMobile