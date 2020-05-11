export interface IMenu {
  name: string;
  icon?: string;
  url?: string;
  childs?: IMenu[];
}
export interface BuyList {
  name: string;
  done: boolean;
}
export interface Review {
  name?: string;
  reviewlist: ReviewList[];
  product_id?: string;
  type?: string;
}
export interface ReviewList {
  name: string;
  review: string;
  userid: string;
}
export interface ProductItem {
  name: string;
  description: string;
  quantity: number;
  category: string;
  price: number;
  details: object;
  innercategory: string;
  image: ProductImage[];
  type?: string;
  product_id?: string;
}
export interface CartItem {
  name: string;
  description: string;
  quantity: number;
  category: string;
  price: number;
  details: object;
  innercategory: string;
  image: ProductImage[];
  type?: string;
  product_id?: string;
  qty?: number;
}
export interface ProductImage {
  imageurl: string;
}
export interface Author {
  name: string;
  image: string;
  description: string;
  profession: string;
}
export interface ProductReview {
  username: string;
  name: string;
  review: string;
}
export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}
export interface User {
  name: string;
  email: string;
  status?: boolean;
  profilepic: string;
  password: string;
  night_theme?: boolean;
  userid?: string;
  role?: string;
  type?: string;
}

export class TrackError {
  message: string;
  errorNumber: number;
  friendlymessage: string;
}
