export default interface ProductInterface {
  created_at?: string;
  updated_at?: string;
  id?: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  salePrice: number | null;
  category_name?: string;
  count?: number;
  productId?: string;
}
