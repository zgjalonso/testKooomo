export interface Products {
  id: number;
  name: string;
  price: {
    sell: number;
    to_discount: number;
    currency: string;
    currency_symbol: string;
  };
  promotions: {
    discount: number;
  };
  images: {
    medium: string;
    firstmedium: string;
  };
}
