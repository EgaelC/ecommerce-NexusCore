export type ProductType = {
    id: number;

      slug: string;
      productName: string;
      Brand: string;
      origin: string;
      description: string;
      price: number;
      active: boolean;
      isFeatured: boolean;

      images?: {
        url: any; 
        id: number; 
        name: string; 
        documentId: string 
      }[];   
    

    category: {
      data: {
        attributes: {
          slug:string;
          categoryName:string;
        };
      };
    };
  };

