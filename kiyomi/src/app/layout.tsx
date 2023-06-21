import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KIYOMI",
  description: "next.js를 활용항 옷 쇼핑몰 구현",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
