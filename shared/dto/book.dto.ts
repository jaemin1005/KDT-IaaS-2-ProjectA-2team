export interface BookDto {
  _id: number;
  title: string;
  author: string;
  price: number;
  genre: string;
  publisher: string;
  stock_quantity: number; // 필드 이름 수정
  introduce: string; // 필드 이름 수정
  hashtags: string; // 추가된 필드
  arrival_date: string; // 추가된 필드
  remain_stock: number; // 추가된 필드
  sold_stock: number; // 추가된 필드
}