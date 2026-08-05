"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-50 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100 via-transparent to-transparent rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-sm mb-8">
            <Sparkles size={14} className="text-amber-500" />
            <span>五大AI服务，让AI真正走进企业</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0F172A] leading-[1.15] tracking-tight">
            让 AI 真正走进
            <br />
            <span className="text-gradient-amber">你公司干活</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animate-delay-200 mt-6 text-lg sm:text-xl text-[#64748B] max-w-2xl leading-relaxed">
            不讲术语，只讲人话。五大AI服务覆盖企业核心业务场景，
            从会议记录到知识管理，从销售助手到全员培训，
            帮你把AI装进生意里。
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-xl px-8 h-12 text-base shadow-lg shadow-amber-500/20"
            >
              预约演示
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl h-12 px-8 text-base border-[#E2E8F0] text-[#0F172A] hover:bg-[#F1F5F9]"
              asChild
            >
              <a href="#services">了解服务</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animate-delay-400 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: 5, suffix: "大服务", label: "核心AI能力" },
              { value: 30, suffix: "%+", label: "日常省时" },
              { value: 14, suffix: "天", label: "最快上线" },
              { value: 1, suffix: "天", label: "全员上手" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
