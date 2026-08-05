"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-4">
            联系我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            开始你的 AI 落地之旅
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            留下你的信息，我们的顾问会在 24 小时内联系你
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                联系方式
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Phone size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">电话咨询</p>
                    <p className="text-white font-medium">400-888-0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Mail size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">邮件联系</p>
                    <p className="text-white font-medium">
                      contact@qizhiyinqing.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">公司地址</p>
                    <p className="text-white font-medium">成都市高新区</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold text-white mb-3">
                为什么选择企智引擎？
              </h4>
              <ul className="space-y-2.5">
                {[
                  "工程师驻场，不是远程忽悠",
                  "14天快速上线，不拖泥带水",
                  "数据说话，效果可量化",
                  "售后陪跑，上线不是终点",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-amber-400 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  提交成功
                </h3>
                <p className="text-slate-400">
                  我们的顾问会在 24 小时内联系您
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">
                      姓名 *
                    </label>
                    <Input
                      required
                      placeholder="您的姓名"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">
                      公司名称 *
                    </label>
                    <Input
                      required
                      placeholder="您的公司"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">
                      手机号 *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="联系电话"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">
                      邮箱
                    </label>
                    <Input
                      type="email"
                      placeholder="工作邮箱"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">
                    感兴趣的服务
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(val) => handleChange("service", val)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-amber-500/50 focus:ring-amber-500/20">
                      <SelectValue placeholder="请选择服务类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secretary">AI 秘书打造</SelectItem>
                      <SelectItem value="sales">AI 销售助手</SelectItem>
                      <SelectItem value="knowledge">
                        AI 知识库构建
                      </SelectItem>
                      <SelectItem value="training">AI 应用培训</SelectItem>
                      <SelectItem value="custom">AI 应用定制</SelectItem>
                      <SelectItem value="all">全部了解</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">
                    补充说明
                  </label>
                  <Textarea
                    placeholder="简单描述您的需求或问题..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#D97706] hover:bg-[#B45309] text-white rounded-xl h-12 text-base"
                >
                  <Send size={18} className="mr-2" />
                  提交咨询
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
