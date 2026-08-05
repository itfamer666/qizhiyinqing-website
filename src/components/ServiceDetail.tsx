"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  TrendingUp,
  BookOpen,
  Code2,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const serviceDetails = [
  {
    id: 1,
    icon: Mic,
    title: "AI 秘书打造",
    headline: "开会帮记的 AI 小秘",
    tags: ["自动录音", "转写", "纪要", "待办"],
    painPoints: [
      "开会靠手写，关键信息记不全",
      "会后花 1.5h 整理纪要",
      "录音躺硬盘，录完没人回头翻",
    ],
    solutions: [
      "开会时自动录音、转成文字、提炼重点、列出待办",
      "开完会纪要就出来了，不用再加班整理",
      "还能跟钉钉日程打通，录音变成能查的数据",
    ],
    metrics: [
      { value: "1.5h → 5min", label: "会议纪要时间" },
      { value: "30%+", label: "日常杂事省时" },
      { value: "50%+", label: "面客效率提升" },
    ],
    gradient: "from-blue-50 to-transparent",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "AI 销售助手",
    headline: "客户想要啥帮你捋",
    tags: ["需求分析", "客户画像", "跟进提醒", "话术推荐"],
    painPoints: [
      "客户需求散落在聊天记录里",
      "跟进靠记忆，容易遗漏",
      "新人上手慢，话术不统一",
    ],
    solutions: [
      "自动梳理客户需求和偏好，生成客户画像",
      "智能提醒跟进节点，不遗漏任何商机",
      "根据场景推荐话术，新人也能专业应对",
    ],
    metrics: [
      { value: "+30%", label: "对客服务效率" },
      { value: "2x", label: "商机转化率" },
      { value: "50%", label: "新人上手提速" },
    ],
    gradient: "from-emerald-50 to-transparent",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "AI 知识库搭建",
    headline: "公司资料一搜就有还带出处",
    tags: ["统一沉淀", "精准检索", "全员复用"],
    painPoints: [
      "搜不到：换十几个关键词",
      "找不全：开四五个窗口拼",
      "管理难：数据像花园要人管",
    ],
    solutions: [
      "公司所有文档喂给它，以后谁问问题直接给答案",
      "告诉你答案来自哪个文件，不瞎编",
      "不用再翻四五个窗口拼凑两小时，10秒就搜到",
    ],
    metrics: [
      { value: "2h → 10s", label: "找项目数据" },
      { value: "全员", label: "复用复利" },
      { value: "100%", label: "答案带出处" },
    ],
    gradient: "from-violet-50 to-transparent",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    id: 4,
    icon: Code2,
    title: "AI 应用定制（FDE）",
    headline: "派工程师到你公司驻场干活",
    tags: ["需求诊断", "场景开发", "上线陪跑"],
    painPoints: [
      "通用工具不够用，你公司的场景它不懂",
      "Demo 上不了生产",
      "演示完就搁置了",
    ],
    solutions: [
      "不是给你个软件就完事，工程师直接到你公司驻场",
      "先搞清楚你到底要解决啥问题，再动手做",
      "做完保证能上线用，用了保证有效果",
    ],
    metrics: [
      { value: "14天", label: "上线行业智能体" },
      { value: "3天", label: "门店引流到店" },
      { value: "20%+", label: "运营人力省" },
    ],
    gradient: "from-amber-50 to-transparent",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "AI 应用培训",
    headline: "教全公司的人会用 AI",
    tags: ["认知升级", "实战演练"],
    painPoints: [
      "有工具不会用，买了AI放着吃灰",
      "有场景看不见，不知道哪能用",
    ],
    solutions: [
      "不是听课听个热闹，是一天之内让每个人都能动手搭一个自己岗位的AI助手",
      "从\"AI是啥\"到\"我明天就能用\"，中间不断层",
      "五大课程模块，按需组合",
    ],
    metrics: [
      { value: "1天", label: "打通能力断层" },
      { value: "每人1个", label: "岗位助手产出" },
      { value: "100%", label: "实战导向" },
    ],
    gradient: "from-rose-50 to-transparent",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

function DetailSection({
  detail,
  index,
}: {
  detail: (typeof serviceDetails)[0];
  index: number;
}) {
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

  const Icon = detail.icon;
  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      id={`detail-${detail.id}`}
      className={`scroll-mt-24 rounded-3xl bg-gradient-to-br ${detail.gradient} border border-[#E2E8F0] p-6 sm:p-10 lg:p-14 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Info */}
        <div className={isEven ? "lg:order-2" : ""}>
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`h-11 w-11 rounded-xl ${detail.iconBg} flex items-center justify-center`}
            >
              <Icon size={22} className={detail.iconColor} />
            </div>
            <div>
              <span className="text-xs text-[#94A3B8] font-medium">
                0{detail.id}
              </span>
              <h3 className="text-xl font-bold text-[#0F172A]">
                {detail.title}
              </h3>
            </div>
          </div>

          <h4 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5 leading-snug">
            {detail.headline}
          </h4>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {detail.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium text-[#64748B] bg-white/80 rounded-md border border-[#E2E8F0]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Pain points vs Solutions */}
          <div className="space-y-6">
            <div>
              <h5 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">
                以前多累
              </h5>
              <ul className="space-y-2">
                {detail.painPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-[#64748B]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#CBD5E1] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-[#D97706] uppercase tracking-wider mb-3">
                AI 帮你干啥
              </h5>
              <ul className="space-y-2">
                {detail.solutions.map((solution) => (
                  <li
                    key={solution}
                    className="flex items-start gap-2 text-sm text-[#1E293B]"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 text-[#D97706] shrink-0"
                    />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Metrics */}
        <div
          className={`flex flex-col justify-center ${isEven ? "lg:order-1" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {detail.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient-amber mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-[#64748B]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  return (
    <section id="details" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#D97706] bg-amber-50 rounded-full border border-amber-100 mb-4">
            服务详情
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            深入了解每项服务
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            从痛点到方案，看看AI能帮你省多少时间
          </p>
        </div>

        {/* Detail Sections */}
        <div className="space-y-8">
          {serviceDetails.map((detail, index) => (
            <DetailSection key={detail.id} detail={detail} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
