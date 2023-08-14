"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "../CustomTexts";
import { brandExplore } from "../../../constants/index";
import BrandExploreCard from "./BrandExploreCard";

interface Brand {
  id: string;
  imgUrl: string;
  title: string;
  subTitle: string;
}

const brandExploreData: Brand[] = brandExplore;

const BrandExplore: React.FC = () => {
  const [active, setActive] = useState<string>("world-2");

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[80%] w-[100%] mx-auto flex flex-col"
      >
        <TypingText title="| The Brand" textStyles="text-center" />
        <TitleText title={<>Choose your Items</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {brandExploreData.map((world, index) => (
            <BrandExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BrandExplore;
