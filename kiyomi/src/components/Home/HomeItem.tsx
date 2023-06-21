import Image from "next/image";

type Item = {
  imageUrl: string;
  title: string;
};

type HomeItemProps = {
  items: Item[];
};

export function HomeItem({ items }: HomeItemProps) {
  return (
    <>
      <h2 className="text-center text-[40px] pt-3 mt-10 ">2023 여름 컬렉션</h2>
      <div className="grid grid-cols-2 tablet:grid-cols-4 transition-all duration-500 ease-in-out">
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
