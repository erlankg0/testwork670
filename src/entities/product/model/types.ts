export type ProductType = {
  id: number | string;
  title: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  brand: string;
  thumbnail: string;

  isAuth?: boolean;
}


export type ProductsResponse = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};
