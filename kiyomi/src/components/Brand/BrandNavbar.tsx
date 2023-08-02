"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const BrandNavbar = () => (
  <>
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[80%] w-[100%] mx-auto flex flex-col"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-black"
          >
            KIYOMI
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center mt-4"
          >
            <p className="text-center text-lg text-gray-500">
              트렌디한 디자인과 높은 품질로 당신만의 스타일을 완성하세요
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full "
        >
          <div className="absolute w-full h-[300px] lg:h-[500px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <img
            src="/assets/img/brandMain.jpg"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] lg:h-[500px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  </>
);

export default BrandNavbar;
