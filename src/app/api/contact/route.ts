import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 邮件配置 - QQ 邮箱
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.qq.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // 使用 SSL
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
};

// 收件人邮箱（咨询信息发送到这里）
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    // 验证必填字段
    if (!name || !phone) {
      return NextResponse.json(
        { error: "姓名和电话为必填项" },
        { status: 400 }
      );
    }

    // 检查 SMTP 配置
    if (!SMTP_CONFIG.auth.user || !SMTP_CONFIG.auth.pass || !RECIPIENT_EMAIL) {
      console.warn("邮件配置不完整，请设置 SMTP_USER、SMTP_PASS 和 RECIPIENT_EMAIL 环境变量");
      return NextResponse.json(
        { error: "邮件服务未配置，请联系管理员" },
        { status: 503 }
      );
    }

    // 创建邮件 transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // 构建邮件内容
    const serviceText = service || "未选择";
    const messageText = message || "无留言内容";

    const mailOptions = {
      from: `"企智引擎官网" <${SMTP_CONFIG.auth.user}>`,
      to: RECIPIENT_EMAIL,
      subject: `【官网咨询】${name} - ${serviceText}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #D97706; padding-bottom: 10px;">新的客户咨询</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px 8px; color: #64748B; width: 100px;">姓名</td>
              <td style="padding: 12px 8px; color: #0F172A; font-weight: 600;">${name}</td>
            </tr>
            <tr style="background-color: #F8FAFC;">
              <td style="padding: 12px 8px; color: #64748B;">公司</td>
              <td style="padding: 12px 8px; color: #0F172A;">${company || "未填写"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; color: #64748B;">电话</td>
              <td style="padding: 12px 8px; color: #0F172A; font-weight: 600;">${phone}</td>
            </tr>
            <tr style="background-color: #F8FAFC;">
              <td style="padding: 12px 8px; color: #64748B;">邮箱</td>
              <td style="padding: 12px 8px; color: #0F172A;">${email || "未填写"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; color: #64748B;">咨询服务</td>
              <td style="padding: 12px 8px; color: #0F172A;">${serviceText}</td>
            </tr>
            <tr style="background-color: #F8FAFC;">
              <td style="padding: 12px 8px; color: #64748B; vertical-align: top;">留言内容</td>
              <td style="padding: 12px 8px; color: #0F172A;">${messageText}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0; color: #94A3B8; font-size: 12px;">
            <p>此邮件来自企智引擎官网咨询表单</p>
            <p>提交时间：${new Date().toLocaleString("zh-CN")}</p>
          </div>
        </div>
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "提交成功，我们将尽快与您联系" });
  } catch (error) {
    console.error("邮件发送失败:", error);
    return NextResponse.json(
      { error: "提交失败，请稍后重试或直接拨打电话联系我们" },
      { status: 500 }
    );
  }
}
