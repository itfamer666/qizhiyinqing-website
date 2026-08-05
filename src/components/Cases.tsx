"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Scale,
  ShoppingBag,
  Radio,
  Store,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const cases = [
  {
    icon: Bot,
    title: "超级AI助理",
    description: "日常杂事省 30%+，面客效率 +50%",
    clients: "知识博主 · 企智引擎CEO · 钉钉西南负责人",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    highlight: "30%+",
  },
  {
    icon: Scale,
    title: "大客户销售助手",
    description: "对客服务效率 +30%",
    clients: "律所（四川蜀格）· 家装品牌 · 中铁二院",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    highlight: "+30%",
  },
  {
    icon: ShoppingBag,
    title: "电商智能运营",
    description: "中台运营人力成本省 20%+",
    clients: "商城购 · 辛妮丝（全国闪购 TOP10）",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    highlight: "20%+",
  },
  {
    icon: Radio,
    title: "垂直行业智能体",
    description: "14 天上线\"直播通\"AI助手",
    clients: "觉海传媒",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    highlight: "14天",
  },
  {
    icon: Store,
    title: "门店小红书运营",
    description: "3 天实现引流到店转化",
    clients: "简一大理石",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    highlight: "3天",
  },
  {
    icon: Building2,
    title: "园区招商小红书",
    description: "60 天 70 个精准咨询",
    clients: "梵木文创（东郊记忆等园区）",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
    highlight: "70+",
  },
];

export default function Cases() {
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
    <section
      id="cases"
      className="py-20 lg:py-28 bg-[#F1F5F9] bg-grid-pattern"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#D97706] bg-amber-50 rounded-full border border-amber-100 mb-4">
            真实案例
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            已验证的 AI 落地成果
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            6 个真实服务案例，数据来自客户实际交付
          </p>
        </div>

        {/* Cases Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <div
                key={caseItem.title}
                className={`card-hover group bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 transition-all ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon & Highlight */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`h-11 w-11 rounded-xl ${caseItem.color} flex items-center justify-center`}
                  >
                    <Icon size={22} className={caseItem.iconColor} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-bold text-gradient-amber">
                      {caseItem.highlight}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[#D97706] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-[#64748B] mb-4">
                  {caseItem.description}
                </p>

                {/* Client */}
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <p className="text-xs text-[#94A3B8]">
                    <span className="font-medium text-[#64748B]">
                      客户：
                    </span>
                    {caseItem.clients}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
