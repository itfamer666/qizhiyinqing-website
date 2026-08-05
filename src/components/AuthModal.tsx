"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

type AuthMode = "login" | "register";

export default function AuthModal({
  mode,
  open,
  onOpenChange,
  onSwitchMode,
}: {
  mode: AuthMode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchMode: (mode: AuthMode) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submitted - in production this would call an API
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-[#E2E8F0] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0F172A]">
            {mode === "login" ? "欢迎回来" : "创建账户"}
          </DialogTitle>
          <DialogDescription className="text-[#64748B]">
            {mode === "login"
              ? "登录您的企智引擎账户"
              : "注册企智引擎，开启AI之旅"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {mode === "register" && (
            <>
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm text-[#64748B] mb-1.5"
                >
                  姓名
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="您的姓名"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="rounded-lg border-[#E2E8F0] focus:border-[#D97706] focus:ring-[#D97706]/20"
                />
              </div>
              <div>
                <Label
                  htmlFor="company"
                  className="text-sm text-[#64748B] mb-1.5"
                >
                  公司名称
                </Label>
                <Input
                  id="company"
                  placeholder="您的公司"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="rounded-lg border-[#E2E8F0] focus:border-[#D97706] focus:ring-[#D97706]/20"
                />
              </div>
            </>
          )}

          <div>
            <Label
              htmlFor="email"
              className="text-sm text-[#64748B] mb-1.5"
            >
              邮箱
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded-lg border-[#E2E8F0] focus:border-[#D97706] focus:ring-[#D97706]/20"
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="text-sm text-[#64748B] mb-1.5"
            >
              密码
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="至少8位密码"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="rounded-lg border-[#E2E8F0] focus:border-[#D97706] focus:ring-[#D97706]/20 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#64748B]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {mode === "login" && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#D97706] hover:underline"
              >
                忘记密码？
              </button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[#D97706] hover:bg-[#B45309] text-white rounded-lg h-11"
          >
            {mode === "login" ? "登录" : "注册"}
          </Button>

          <div className="text-center text-sm text-[#64748B]">
            {mode === "login" ? (
              <>
                还没有账户？{" "}
                <button
                  type="button"
                  className="text-[#D97706] font-medium hover:underline"
                  onClick={() => onSwitchMode("register")}
                >
                  立即注册
                </button>
              </>
            ) : (
              <>
                已有账户？{" "}
                <button
                  type="button"
                  className="text-[#D97706] font-medium hover:underline"
                  onClick={() => onSwitchMode("login")}
                >
                  立即登录
                </button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
