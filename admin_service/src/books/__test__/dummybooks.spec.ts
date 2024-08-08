export const bookArrayData = [
  {
    _id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
    genre: 'Fiction',
    publisher: 'Scribner',
    stock_quantity: 100,
    introduce: 'A novel set in the Jazz Age on Long Island.',
    remain_stock: 100,
    sold_stock: 0,
    arrival_date: new Date(),
    hashtags: ['init'],
  },
  {
    _id: 2,
    title: '1984',
    author: 'George Orwell',
    price: 8.99,
    genre: 'Dystopian',
    publisher: 'Secker & Warburg',
    stock_quantity: 50,
    introduce: 'A novel about a dystopian future under totalitarian rule.',
    remain_stock: 50,
    sold_stock: 0,
    arrival_date: new Date(),
    hashtags: ['bye'],
  },
  {
    _id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99,
    genre: 'Southern Gothic',
    hashtags: ['#안녕'],
    publisher: 'J.B. Lippincott & Co.',
    stock_quantity: 200,
    introduce: 'A novel about racial injustice in the Deep South.',
    remain_stock: 200,
    sold_stock: 0,
    arrival_date: new Date(),
  },
];

export const updateBook = {
  _id: 3,
  title: 'Update',
  author: 'Update',
  price: 12.99,
  genre: 'Southern Gothic',
  hashtags: ['#안녕'],
  publisher: 'J.B. Lippincott & Co.',
  stock_quantity: 200,
  introduce: 'A novel about racial injustice in the Deep South.',
  remain_stock: 200,
  sold_stock: 0,
  arrival_date: '2024-07-23T00:00:00Z',
};

export const newBook = {
  _id: 4,
  title: 'Create',
  author: 'Create',
  price: 12.99,
  genre: 'Southern Gothic',
  hashtags: ['#안녕'],
  publisher: 'J.B. Lippincott & Co.',
  stock_quantity: 200,
  introduce: 'A novel about racial injustice in the Deep South.',
  remain_stock: 200,
  sold_stock: 0,
  arrival_date: '2024-07-23T00:00:00Z',
};
