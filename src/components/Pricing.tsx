"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "AI 秘书打造",
    standardPrice: "3,680",
    standardUnit: "元/个 起",
    privatePrice: "含 AI 硬件",
    privateUnit: "",
    features: ["自动录音转写", "智能会议纪要", "待办自动提取", "钉钉日程打通"],
    popular: false,
  },
  {
    name: "AI 销售助手",
    standardPrice: "2,580",
    standardUnit: "元/个 起",
    privatePrice: "—",
    privateUnit: "",
    features: ["客户需求分析", "智能跟进提醒", "话术推荐", "客户画像生成"],
    popular: false,
  },
  {
    name: "AI 知识库构建",
    standardPrice: "6,800",
    standardUnit: "元 起",
    privatePrice: "12,800",
    privateUnit: "元 起",
    features: ["文档统一沉淀", "精准语义检索", "答案带出处", "全员复用"],
    popular: true,
  },
  {
    name: "AI 应用培训",
    standardPrice: "9,800",
    standardUnit: "元/天 起",
    privatePrice: "—",
    privateUnit: "",
    features: ["五大课程模块", "实战演练", "每人产出1个助手", "按需组合"],
    popular: false,
  },
  {
    name: "AI 应用定制（FDE）",
    standardPrice: "2,000",
    standardUnit: "元/天 起",
    privatePrice: "30,000",
    privateUnit: "元 起",
    features: ["工程师驻场", "需求诊断", "场景开发", "上线陪跑"],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#D97706] bg-amber-50 rounded-full border border-amber-100 mb-4">
            价格方案
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            收费明明白白
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            五步把 AI 装进你生意里，以下均为起步价
          </p>
        </div>

        {/* Pricing Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
                plan.popular
                  ? "border-[#D97706] bg-gradient-to-b from-amber-50/50 to-white shadow-lg shadow-amber-500/5"
                  : "border-[#E2E8F0] bg-white card-hover"
              } ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white bg-[#D97706] rounded-full">
                    <Star size={12} /> 最受欢迎
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#0F172A]">
                    ¥{plan.standardPrice}
                  </span>
                  <span className="text-sm text-[#94A3B8]">
                    {plan.standardUnit}
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-1">标准服务</p>
              </div>

              {plan.privatePrice !== "—" && (
                <div className="mb-2 pt-3 border-t border-[#F1F5F9]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-[#D97706]">
                      ¥{plan.privatePrice}
                    </span>
                    <span className="text-sm text-[#94A3B8]">
                      {plan.privateUnit}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-1">私有化部署</p>
                </div>
              )}

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-[#64748B]"
                  >
                    <Check size={16} className="text-[#D97706] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact"
                className={`mt-8 block w-full text-center py-3 rounded-xl text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-[#D97706] hover:bg-[#B45309] text-white shadow-md shadow-amber-500/20"
                    : "bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A]"
                }`}
              >
                立即咨询
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-sm text-[#94A3B8]">
          * 以上价格不含算力、三方云服务费用。标准服务可组合定制，按业务场景与部署方式灵活报价。
        </p>
      </div>
    </section>
  );
}
