"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion, Variants } from "framer-motion";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

interface TitleTextProps {
  title: string | JSX.Element;
  textStyles?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  title,
  textStyles = "",
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText: React.FC<TitleTextProps> = ({
  title,
  textStyles = "",
}) => (
  <motion.h2
    variants={textVariant2 as Variants}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold sm:text-[24px] md:text-[30px] text-[40px]  text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
