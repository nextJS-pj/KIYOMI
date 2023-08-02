"use client";
import { ShopForm } from "@/components/ShopForm/ShopForm";

interface Product {
  imageUrl: string;
  title: string;
}

const items: Product[] = [
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

export default function FemaleItem() {

  return (
    <div>
      <ShopForm pageTitle={"여성"} items={items} />
    </div>
  );
}
