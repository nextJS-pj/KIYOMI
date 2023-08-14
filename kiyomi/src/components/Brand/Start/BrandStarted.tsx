"use client";

import { motion } from "framer-motion";
import { StartSteps } from "./StartSteps";
import { startingFeatures } from "@/constants";
import { TitleText, TypingText } from "../CustomTexts";
import { fadeIn, brandVariants, staggerContainer } from "@/utils/motion";

const BrandStarted = () => (
  <section className={"sm:p-16 xs:p-8 px-6 py-12 relative z-10"}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"lg:w-[80%] w-[100%] mx-auto flex lg:flex-row flex-col gap-8"}
    >
      <motion.div
        variants={brandVariants("left")}
        className={"flex-1 flex justify-center items-center"}
      >
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNsb3RoJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="shopping"
          className="w-[90%] h-[90%] object-contain rounded-3xl"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| shopping" />
        <TitleText title={<> Brand-based shopping</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default BrandStarted;
