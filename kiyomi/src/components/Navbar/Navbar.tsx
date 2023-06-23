"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pl-[38px] py-[20px] flex items-center">
      <span className="text-[30px] font-bold">KIYOMI</span>
      <div className="lg:px-[50px] lg:space-x-8 md:px-[35px] md:space-x-6 sm:text-[0px] ">
        <Link href={"/"}>신상품</Link>
        <Link href={"/"}>여성</Link>
        <Link href={"/"}>남성</Link>
        <Link href={"/"}>브랜드</Link>
        <button
          className="lg:text-[0px] md:text-[0px] sm:absolute top-[93px] right-[25px] text-[25px]"
          onClick={handleClick}
        >
          <GiHamburgerMenu />
        </button>
        {isMenuOpen && (
          <div className="transition-all duration-300 ease-in-out absolute top-0 right-0 w-full h-screen bg-white z-10 text-black text-[20px] font-bold">
            <span className="">로그인</span>
            <AiOutlineRight />
            <button onClick={handleClick}>
              <AiOutlineClose />
            </button>
            <div className="">
              <p>가입하고 10% 쿠폰을 바로 사용해보세요.</p>
              <Link href={"/"}>회원가입</Link>
            </div>
            <Link href={"/"}>신상품</Link>
            <hr />
            <Link href={"/"}>여성</Link>
            <hr />
            <Link href={"/"}>남성</Link>
            <hr />
            <Link href={"/"}>브랜드</Link>
            <img src="/assets/menu_AD.jpg" alt="AD" />
            <Link href={"/"}>고객센터</Link>
            <Link href={"/"}>공지사항</Link>
          </div>
        )}
      </div>
    </div>
  );
}
