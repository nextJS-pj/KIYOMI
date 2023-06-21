import Link from "next/link";

export function Navbar() {
  return (
    <div className="px-[38px] py-[20px] flex items-center">
      <span className="text-[30px] font-bold">KIYOMI</span>
      <div className="px-[50px] space-x-8">
        <Link href={"/"}>신상품</Link>
        <Link href={"/"}>여성</Link>
        <Link href={"/"}>남성</Link>
        <Link href={"/"}>브랜드</Link>
      </div>
    </div>
  );
}
