import { NextRequest, NextResponse } from "next/server";

// 钉钉 AI 表格 Webhook 地址
const DINGTALK_WEBHOOK =
  process.env.DINGTALK_WEBHOOK ||
  "https://connector.dingtalk.com/webhook/flow/103a9f9354e82108ba40000f";

// 服务名称映射
const SERVICE_MAP: Record<string, string> = {
  secretary: "AI 秘书",
  sales: "AI 销售",
  knowledge: "AI 知识库",
  customization: "AI 应用定制（FDE）",
  training: "AI 培训",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, company, email, service, message } = body;

    // 基本验证
    if (!name || !phone) {
      return NextResponse.json(
        { error: "姓名和电话为必填项" },
        { status: 400 }
      );
    }

    // 构造推送到钉钉 AI 表格的数据
    const dingtalkData = {
      name: name,
      company: company || "",
      phone: phone,
      email: email || "",
      service: SERVICE_MAP[service] || service || "",
      message: message || "",
      submitTime: new Date().toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
      }),
    };

    // 推送到钉钉 AI 表格 Webhook
    const response = await fetch(DINGTALK_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dingtalkData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("钉钉 Webhook 响应错误:", response.status, errorText);
      return NextResponse.json(
        { error: "数据推送失败，请稍后重试" },
        { status: 502 }
      );
    }

    const result = await response.json();
    console.log("钉钉 Webhook 推送成功:", result);

    return NextResponse.json({
      success: true,
      message: "提交成功，我们会尽快与您联系",
    });
  } catch (error) {
    console.error("咨询表单提交错误:", error);
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}
