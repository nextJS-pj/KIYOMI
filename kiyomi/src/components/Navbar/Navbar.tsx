"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AccordionButton } from "../Button/AccordionButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="absolute space-x-1 right-0 text-[9px] pr-[38px] pt-[15px] md:text-[5px] md:pr-[25px]  sm:text-[0px]">
        <Link href={"/user/login"}>로그인</Link> |
        <Link href={"/user/register"}>회원가입</Link>
        {/* <Link href={"/"}>마이페이지</Link> |<Link href={"/"}>로그아웃</Link> */}
      </div>
      <div className="px-[38px] py-[20px] flex items-center">
        <span className="text-[30px] font-bold">KIYOMI</span>
        <div className="flex items-center">
          <div className="lg:px-[50px] lg:space-x-8 md:px-[35px] md:space-x-4 md:text-[12px] sm:text-[0px]">
            <Link href={"/"}>신상품</Link>
            <Link href={"/femaleitem"}>여성</Link>
            <Link href={"/maleItem"}>남성</Link>
            <Link href={"/brand"}>브랜드</Link>
          </div>
          <div className="flex space-x-3 absolute right-0 text-[18px] font-bold pr-[38px] md:text-[14px] md:space-x-2 sm:pr-[60px]">
            <button>
              <AiOutlineUser />
            </button>
            <button>
              <AiOutlineShopping />
            </button>
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <button
            className="lg:text-[0px] md:text-[0px] sm:absolute top-[93px] right-[25px] text-[25px]"
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </button>
          {isMenuOpen && (
            <div className="transition-all duration-300 ease-in-out absolute top-0 right-0 w-full h-full px-5 z-100 bg-white z-10 text-black text-[20px] font-bold">
              <button className="flex items-center py-6">
                <span className="">로그인</span>
                <AiOutlineRight />
              </button>
              <button
                className="absolute top-5 right-4 text-[35px]"
                onClick={handleClick}
              >
                <AiOutlineClose />
              </button>
              <div className="text-center text-[16px] py-5 bg-slate-100">
                <p className="pb-3">가입하고 10% 쿠폰을 바로 사용해보세요.</p>
                <button className="p-1 border-solid border-2 border-gray-700 rounded">
                  회원가입
                </button>
              </div>
              <div className="py-3">
                <AccordionButton
                  buttonText="신상품"
                  content={
                    <div className="flex flex-col">
                      <Link href={"/"}>여성</Link>
                      <span className="text-[10px] text-slate-100">공백</span>
                      <Link href={"/"}>남성</Link>
                    </div>
                  }
                />
                <hr />
                <AccordionButton
                  buttonText="여성"
                  content={
                    <div className="flex flex-col">
                      <Link href={"/"}>베스트</Link>
                      <span className="text-[10px] text-slate-100">공백</span>
                      <Link href={"/"}>의류</Link>
                      <span className="text-[10px] text-slate-100">공백</span>
                      <Link href={"/"}>악세서리</Link>
                    </div>
                  }
                />
                <hr />
                <AccordionButton
                  buttonText="남성"
                  content={
                    <div className="flex flex-col">
                      <Link href={"/"}>베스트</Link>
                      <span className="text-[10px] text-slate-100">공백</span>
                      <Link href={"/"}>의류</Link>
                      <span className="text-[10px] text-slate-100">공백</span>
                      <Link href={"/"}>악세서리</Link>
                    </div>
                  }
                />
                <hr />
                <AccordionButton
                  buttonText="브랜드"
                  content={
                    <div className="flex flex-col">
                      <Link href={"/"}>소개</Link>
                      <span className="text-[10px] text-slate-100">공백</span>
                      <Link href={"/"}>공지사항</Link>
                    </div>
                  }
                />
              </div>
              <img src="/assets/menu_AD.jpg" alt="AD" />
              <Link href={"/"}>고객센터</Link>
              <Link href={"/"}>공지사항</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
