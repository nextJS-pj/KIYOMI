import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  imgUrl,
  title,
  subtitle,
  index,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-row sm:flex-col  gap-6"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-4/12 sm:w-full w-4/12 h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 flex flex-col max-w-[650px]">
        <h4 className=" lg:text-[28px] sm:text-[22px] text-[26px] font-semibold text-black">
          {title}
        </h4>
        <p className="mt-[16px] text-[#B0B0B0] font-normal lg:text-[16px] text-[14px]">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);
