"use client";

import { useEffect, useRef, useState } from "react";
import { Target } from "lucide-react";

const industries = [
  "电商",
  "B2B",
  "化工",
  "建筑",
  "教育",
  "图书出版",
];

const expertise = [
  "企业 AI 应用战略设计",
  "AI 应用规划",
  "AI 产品设计",
  "AI 落地培训",
  "AI 应用实战陪跑",
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#D97706] bg-amber-50 rounded-full border border-amber-100 mb-4">
            服务团队
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            资深 AI 应用专家领衔
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            擅长企业全链路 AI 数智化，从战略规划到落地执行
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-10 lg:gap-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Profile Card */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 sm:p-10 overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

              {/* Avatar placeholder */}
              <div className="relative mb-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-amber-500/20">
                  企
                </div>
              </div>

              <h3 className="relative text-2xl font-bold text-white mb-2">
                阿里钉钉 AI 应用专家
              </h3>


              <div className="relative space-y-3">
                {[
                  "10 年产品总监经验",
                  "5 年 AI 产品设计与管理经验",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="relative mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-amber-400">1 亿+</div>
                  <div className="text-xs text-slate-400 mt-1">累计 2C 用户</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-amber-400">5 万+</div>
                  <div className="text-xs text-slate-400 mt-1">累计 2B 用户</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Experience */}
            <div>
              <h4 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
                核心经历
              </h4>
              <p className="text-[#1E293B] leading-relaxed">
                负责过 0-1-100 设计的 AI 产品，累计 2C 用户超 1 亿，2B 用户超 5 万。
                熟悉电商、B2B、化工、建筑、教育、图书出版等产业。
              </p>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
                熟悉产业
              </h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3.5 py-2 text-sm text-[#64748B] bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
                擅长领域
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAFAF9] border border-[#E2E8F0]"
                  >
                    <div className="h-8 w-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <Target size={16} className="text-[#D97706]" />
                    </div>
                    <span className="text-sm font-medium text-[#1E293B]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
