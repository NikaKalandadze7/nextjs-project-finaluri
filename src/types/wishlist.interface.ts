export default interface wishlistInterface {
  id: string;
  created_at: string;
  updated_at: string;
  product_id: string;
  user_id: string;
  likedProduct: {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    description: string;
    image: string;
    price: number;
    salePrice: number;
    category_name: string;
    category: {
      id: string;
      created_at: string;
      updated_at: string;
      name: string;
      image: string;
    };
  };
}
