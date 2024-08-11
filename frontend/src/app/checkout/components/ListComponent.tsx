import Image from "next/image";
import { BookOrder } from "../../context/OrderContext";

//TODO 수량도 추가해야 한다
interface ItemInfoProps extends Pick<BookOrder, "_id" | "title" | "price" | "amount"> {}

export default function ListItemComponent({ ...itemInfoProps }: ItemInfoProps) {
  return (
    <div className="w-full flex items-center my-2">
      <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200 relative">
        <Image
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-grow pl-3">
        <h6 className="font-semibold uppercase text-gray-600">
          {itemInfoProps.title}
        </h6>
        <p className="text-gray-400">x {itemInfoProps.amount}</p>
      </div>
      <div>
        <span className="font-semibold text-gray-600 text-xl">
          ₩{itemInfoProps.price * itemInfoProps.amount}
        </span>
      </div>
    </div>
  );
}
