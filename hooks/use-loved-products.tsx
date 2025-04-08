import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from '@/types/product';
import { toast } from "sonner"; // Asegúrate de tener instalado sonner

interface UseLovedProductsType {
  lovedItems: ProductType[],
  addLoveItem: (data: ProductType) => void,
  removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],
      
      addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(item => item.id === data.id);

        if (existingItem) {
          toast.error("El producto ya existe en la lista </3");
          return;
        }

        set({ lovedItems: [...currentLovedItems, data] });
        toast.success("Producto añadido a la lista <3");
      },

      removeLovedItem: (id: number) => {
        const updatedItems = get().lovedItems.filter(item => item.id !== id);
        set({ lovedItems: updatedItems });
        toast("Se ha eliminado el producto :(");
      }
    }),
    {
      name: 'loved-products-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
