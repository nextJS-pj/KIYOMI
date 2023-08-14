"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer } from "@/utils/motion";

function BrandAbout() {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title="| About" textStyles="text-center" />
        <TitleText title={<>About KIYOMI</>} textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[14px] text-[16px] text-center w-9/12 text-[#B0B0B0]"
        >
          <span className="font-extrabold">쇼핑몰</span>은 미래의 새로운
          트렌드로, 다양한 상품을 쉽게 찾고 구매할 수 있는 곳입니다. 이{" "}
          <span className="font-extrabold">온라인 쇼핑 세상</span>
          에서는 집에서 편안하게 쇼핑을 즐길 수 있으며, 원하는 상품을 찾기 위해
          수많은 가게를 방문할 필요가 없습니다.{" "}
          <span className="font-extrabold">모바일 기기</span>만 있으면 언제
          어디서나 쇼핑을 할 수 있어 너무나 편리합니다. 더 나아가, 다양한{" "}
          <span className="font-extrabold">할인 혜택</span>과 이벤트를 통해
          소비자들은 똑똑하게 쇼핑을 할 수 있게 됩니다. 그럼 이제 스크롤을 내려
          이 쇼핑몰의 흥미로운 세계를 함께{" "}
          <span className="font-extrabold">탐험</span>해봅시다.
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/assets/img/brand/arrow-down.svg"
          alt="아래로가는 화살표"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
}
export default BrandAbout;
