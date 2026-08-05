"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  TrendingUp,
  BookOpen,
  Code2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Mic,
    title: "AI 秘书",
    subtitle: "开会帮记的AI小秘",
    metric: "日常省 30%+",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "AI 销售",
    subtitle: "客户想要啥帮你捋",
    metric: "对客效率 +30%",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-200",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "AI 知识库",
    subtitle: "资料一搜就有带出处",
    metric: "2h → 10s",
    color: "from-violet-500/10 to-violet-600/5",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    borderColor: "hover:border-violet-200",
  },
  {
    id: 4,
    icon: Code2,
    title: "AI 定制",
    subtitle: "工程师驻场给你干",
    metric: "14天上线",
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "hover:border-amber-200",
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "AI 培训",
    subtitle: "教全公司会用AI",
    metric: "1天打通",
    color: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "hover:border-rose-200",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`card-hover group relative rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 transition-all ${service.borderColor} ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <div className="absolute top-6 right-6 text-5xl font-bold text-[#F1F5F9] group-hover:text-[#E2E8F0] transition-colors select-none">
        0{service.id}
      </div>

      {/* Icon */}
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} mb-5`}
      >
        <Icon size={24} className={service.iconColor} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#0F172A] mb-1.5">
        {service.title}
      </h3>
      <p className="text-sm text-[#64748B] mb-4">{service.subtitle}</p>

      {/* Metric */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gradient-amber">
          {service.metric}
        </span>
        <a
          href={`#detail-${service.id}`}
          className="inline-flex items-center gap-1 text-sm text-[#94A3B8] hover:text-[#D97706] transition-colors"
        >
          详情 <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAF9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#D97706] bg-amber-50 rounded-full border border-amber-100 mb-4">
            五大服务
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            每个服务一句话讲清楚
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            帮你干啥、省多少时间，不讲术语只讲人话
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Coverage */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#94A3B8]">
            覆盖企业核心业务场景
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              "营销获客",
              "客户服务",
              "知识管理",
              "财务风控",
              "高效办公",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm text-[#64748B] bg-white border border-[#E2E8F0] rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
