"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  "阿里云",
  "腾讯云",
  "火山引擎",
  "华为云",
  "钉钉",
  "飞书",
  "企业微信",
  "千问办公",
  "WorkBuddy",
  "豆包企业版",
  "百度搭子",
  "DeepSeek",
  "智谱",
  "Kimi",
  "阶跃星辰",
  "MiniMax",
];

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium text-amber-600 mb-3">
            生态合作 · 携手共赢
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            合作伙伴
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            与行业领先的云服务商、AI 平台及企业协作工具深度合作，
            为企业提供稳定可靠的技术底座。
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {partners.map((name, index) => (
            <div
              key={name}
              className={`group flex items-center justify-center px-6 py-8 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 40}ms`,
              }}
            >
              <span className="text-base font-semibold text-[#1E293B] group-hover:text-amber-700 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#94A3B8]">
            更多合作伙伴持续加入中，欢迎
            <a
              href="/contact"
              className="text-amber-600 hover:text-amber-700 font-medium ml-1"
            >
              联系我们
            </a>
            洽谈合作
          </p>
        </div>
      </div>
    </section>
  );
}
