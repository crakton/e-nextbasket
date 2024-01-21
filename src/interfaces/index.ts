import { IProduct } from "./product";
export type { IProduct };

export interface ITestimony {
  name: string;
  role: string;
  imgSrc: string;
  comment: string;
  rating: number;
}

export interface IPost {
  id: 1;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
