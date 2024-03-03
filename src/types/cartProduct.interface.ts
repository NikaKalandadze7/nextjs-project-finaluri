export default interface CartProductInterface {
  created_at?: string;
  updated_at?: string;
  cartItemId?: string;
  id?: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  salePrice: number | string | null;
  category_name?: string;
  count?: number;
}
