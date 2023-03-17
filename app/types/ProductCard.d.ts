export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface IProductCardProps {
  item: IProducts;
}
