import Link from "next/link";
import { Navbar } from "../Navbar/Navbar";

export function Header() {
  return (
    <div>
      <div className="w-100 bg-black py-2 ">
        <p className="text-xs text-white text-center">
          여름의 시작을 알리는 신상품 |{" "}
          <Link href={"/"} className="underline hover:bg-slate-500">
            여성 컬렉션
          </Link>
          &nbsp;
          <Link href={"/"} className="underline hover:bg-slate-500">
            남성 컬렉션
          </Link>
        </p>
      </div>
      <div className="w-100 bg-gray-300 py-2">
        <p className="text-xs text-center">
          KIYOMI 퀄티드 백 팝업 스토어 오픈 |{" "}
          <Link
            href={"/"}
            className="underline hover:bg-slate-500 hover:text-white "
          >
            이벤트 자세히 보기
          </Link>
        </p>
      </div>
      <Navbar />
    </div>
  );
}
