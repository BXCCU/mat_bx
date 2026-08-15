import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李记包子（王郎前街店） | 鲜香麻辣烫",
  description: "李记包子王郎前街店，地址：邯郸市复兴区董蒙幼儿园复兴分园西南门旁，电话：13653303836。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
