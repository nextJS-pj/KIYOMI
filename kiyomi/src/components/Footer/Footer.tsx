import Link from "next/link";

export function Footer() {
  return (
    <div className="px-[38px] py-[35px]">
      <span className="text-[50px] font-bold">KIYOMI</span>
      <div className="pt-[20px] pb-[10px]">
        <Link href={"/"} className="px-1 hover:underline">
          회사정보
        </Link>
        |
        <Link href={"/"} className="px-1 hover:underline">
          이용약관
        </Link>
        |
        <Link href={"/"} className="px-1 hover:underline">
          개인정보 처리방침
        </Link>
        |
        <Link href={"/"} className="px-1 hover:underline">
          이용안내
        </Link>
      </div>
      <p className="px-[3.5px]">ⓒ Copyright KIYOMI All Rights Reserved</p>
    </div>
  );
}
