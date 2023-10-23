import { OrderInterface } from 'interfaces/order';
import { ReviewInterface } from 'interfaces/review';
import { WishlistInterface } from 'interfaces/wishlist';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  company_id: string;
  category?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  review?: ReviewInterface[];
  wishlist?: WishlistInterface[];
  company?: CompanyInterface;
  _count?: {
    order?: number;
    review?: number;
    wishlist?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  category?: string;
}
