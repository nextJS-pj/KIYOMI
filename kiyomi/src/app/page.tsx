"use client";

import { HomeItem } from "@/components/Home/HomeItem";
import { HomeBanner } from "@/components/Home/HomeBanner";
import { HomeMoreItem } from "@/components/Home/HomeMoreItem/HomeMoreItem";

// 더미데이터 -------------------------------------------------------------------------------------
const items = [
  {
    imageUrl:
      "https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2131250020230605122152.jpg",
    title: "여성 드레스",
  },
  {
    imageUrl:
      "https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2131251020230605122218.jpg",
    title: "여성 탑",
  },
  {
    imageUrl:
      "https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2131252020230605122245.jpg",
    title: "남성 셔츠",
  },
  {
    imageUrl:
      "https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2131253020230605122301.jpg",
    title: "남성 트라우저",
  },
];
// ---------------------------------------------------------------------------------------------------

export default function Home() {
  return (
    <div>
      Home
      <HomeBanner />
      <HomeItem items={items} />
      <HomeMoreItem />
    </div>
  );
}
