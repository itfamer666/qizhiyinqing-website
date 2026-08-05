import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "企智引擎 - 让 AI 真正走进你公司干活",
    template: "%s | 企智引擎",
  },
  description:
    "企智引擎五大AI服务：AI秘书、AI销售、AI知识库、AI定制、AI培训。帮助企业快速落地AI，日常省时30%+，最快14天上线。",
  keywords: [
    "企智引擎",
    "AI秘书",
    "AI销售",
    "AI知识库",
    "AI定制",
    "AI培训",
    "企业AI",
    "AI落地",
    "智能体",
    "企业智能化",
  ],
  authors: [{ name: "企智引擎" }],
  openGraph: {
    title: "企智引擎 - 让 AI 真正走进你公司干活",
    description:
      "五大AI服务覆盖企业核心业务场景，营销获客、客户服务、知识管理、财务风控、高效办公。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
