import { useState } from "react";

type Item = {
  imageUrl: string;
  title: string;
};

type ShopFormProps = {
  pageTitle: string;
  items: Item[];
};

export function ShopForm({ pageTitle, items }: ShopFormProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // 페이지당 보여줄 제품 수

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(items.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="text-center text-[40px] pt-3 mt-10 ">{pageTitle}</h2>
      {/* 제품 목록 표시 */}
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 transition-all duration-500 ease-in-out">
        {currentProducts.map((product, index) => (
          <div className="p-2 mt-4" key={index}>
            <img
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full rounded"
            />
            <p className="text-sm font-bold mt-4">{product.title}</p>
            <button className="text-black hover:text-secondary py-1 mt-1 text-xs">
              쇼핑하기
            </button>
          </div>
        ))}
      </div>
      {/* 페이지네이션 */}
      <div className="text-center space-x-3">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "text-orange-400 font-bold"
                  : "text-black"
              } hover:text-blue-600`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
}
