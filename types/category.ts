export type CategoryType = {
    id: number;
    categoryName: string;
    slug: string;
    mainImage: {
        url: any;
        data: {
            attributes: {
                url: string;
            };
        };
    };
};
