import Image from "next/image";

type Item = {
  imageUrl: string;
  title: string;
};

type ShopItemProps = {
  pageTitle: string;
  items: Item[];
};

export function ShopItem({ pageTitle, items }: ShopItemProps) {
  return (
    <>
      <h2 className="text-center text-[40px] pt-3 mt-10 ">{pageTitle}</h2>
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 transition-all duration-500 ease-in-out">
        {items.map((item, index) => (
          <div className="p-2 mt-4" key={index}>
            <Image
              src={item.imageUrl}
              alt=""
              width={300}
              height={300}
              className="w-full rounded"
            />
            <p className="text-sm font-bold mt-4">{item.title}</p>
            <button className="text-black hover:text-secondary py-1 mt-1 text-xs">
              쇼핑하기
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
