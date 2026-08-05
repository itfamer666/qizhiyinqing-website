# AGENTS.md - 企智引擎官网

## 项目概览

企智引擎官网，面向企业客户的AI服务展示网站。基于 Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui 构建。

## 构建与运行

```bash
pnpm install        # 安装依赖
pnpm run dev        # 开发环境
pnpm run build      # 构建生产版本
pnpm run start      # 生产环境启动
pnpm ts-check       # TypeScript 类型检查
pnpm lint           # ESLint 检查
```

## 目录结构

```
src/
├── app/
│   ├── layout.tsx          # 根布局（SEO metadata）
│   ├── page.tsx            # 首页（组合所有模块）
│   └── globals.css         # 全局样式 + 设计变量
├── components/
│   ├── Header.tsx          # 固定导航栏（响应式 + 移动端菜单）
│   ├── Hero.tsx            # 首屏（数据计数动画 + CTA）
│   ├── ServicesOverview.tsx # 五大服务概览卡片
│   ├── ServiceDetail.tsx   # 服务详情（痛点/方案/效果）
│   ├── Cases.tsx           # 客户案例展示
│   ├── Pricing.tsx         # 价格体系
│   ├── Consultation.tsx    # 在线咨询表单
│   ├── AuthModal.tsx       # 登录/注册弹窗
│   ├── Footer.tsx          # 页脚
│   └── ui/                 # shadcn/ui 组件库
└── lib/
    └── utils.ts            # 工具函数
```

## 设计规范

详见 `DESIGN.md`。核心要点：
- 主色：墨蓝 #0F172A + 琥珀金 #D97706
- 背景：暖白 #FAFAF9
- 动效：克制、流畅、滚动淡入
- 禁忌：不用蓝紫渐变、不用霓虹效果

## 代码规范

- TypeScript strict 模式
- 函数参数必须标注类型
- 使用 'use client' 处理客户端交互
- 组件使用 IntersectionObserver 实现滚动动画
- 响应式设计：mobile-first，支持 sm/md/lg/xl 断点
