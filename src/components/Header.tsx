"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "AI 秘书", href: "/ai-mishu.html" },
  { label: "AI 销冠", href: "/ai-xiaoguan.html" },
  { label: "AI 销售助理", href: "/ai-zhuli.html" },
  { label: "AI 知识库", href: "/ai-zhishiku.html" },
  { label: "服务详情", href: "#details" },
  { label: "客户案例", href: "#cases" },
  { label: "服务团队", href: "#team" },
  { label: "价格方案", href: "#pricing" },
  { label: "联系我们", href: "/contact" },
];

export default function Header({
  onLoginClick,
  onRegisterClick,
}: {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9 text-[#0F172A]" />
            <span className="text-lg font-bold text-[#0F172A] tracking-tight">
              企智引擎
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[#64748B] hover:text-[#0F172A] transition-colors rounded-md hover:bg-[#F1F5F9]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - hidden */}
          <div className="hidden md:flex items-center gap-2" style={{ display: 'none' }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="text-[#64748B] hover:text-[#0F172A]"
            >
              登录
            </Button>
            <Button
              size="sm"
              onClick={onRegisterClick}
              className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-lg"
            >
              免费试用
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#64748B]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex gap-2 border-t border-border mt-3" style={{ display: 'none' }}>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  onLoginClick();
                  setMobileOpen(false);
                }}
              >
                登录
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-[#D97706] hover:bg-[#B45309] text-white"
                onClick={() => {
                  onRegisterClick();
                  setMobileOpen(false);
                }}
              >
                免费试用
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
