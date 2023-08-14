"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../CustomTexts";
import { staggerContainer } from "@/utils/motion";
import { insights } from "@/constants";
import { InsightCard } from "./InsightCard";

const Insights = () => (
  <section className={"sm:p-16 xs:p-8 px-6 py-12 relative z-10"}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"lg:w-[70%] w-[100%] mx-auto flex flex-col"}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about KIYOMI</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
