import Logo from "@/components/Logo";

const serviceLinks = [
  { label: "AI 秘书", href: "/ai-mishu.html" },
  { label: "AI 销冠", href: "/ai-xiaoguan.html" },
  { label: "AI 销售助理", href: "/ai-zhuli.html" },
  { label: "AI 知识库", href: "/ai-zhishiku.html" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="h-9 w-9 text-white" />
              <span className="text-lg font-bold text-white tracking-tight">
                企智引擎
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              让 AI 真正走进企业的业务场景交付价值。
              <br />
              让所有企业实现 AGI。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">服务</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">公司</h4>
            <ul className="space-y-2.5">
              {["关于我们", "客户案例", "合作伙伴", "加入我们"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">支持</h4>
            <ul className="space-y-2.5">
              {["帮助中心", "隐私政策", "服务条款"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  联系我们
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} 企智引擎. All rights reserved.
            </p>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-400 transition-colors"
            >
              蜀ICP备2026045215号-1
            </a>
          </div>
          <p className="text-sm text-slate-500">
            让所有企业实现 AGI
          </p>
        </div>
      </div>
    </footer>
  );
}
