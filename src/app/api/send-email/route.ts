import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/emails/WelcomeEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name = "Developer", to = "user@example.com" } = body;

    const emailHtml = await render(WelcomeEmail({ name, email: to }));

    const host = process.env.SMTP_HOST || "smtp.ethereal.email";
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER || "test_user";
    const pass = process.env.SMTP_PASS || "test_pass";
    const from = process.env.SMTP_FROM || '"Next.js 16 App" <no-reply@example.com>';

    // If using default placeholder, simulate dispatch for smooth local preview
    if (host === "smtp.ethereal.email" && (user === "test_user" || user === "user@example.com")) {
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Email generated successfully via React Email (SMTP simulated with ethereal placeholder).",
        recipient: to,
        previewHtmlLength: emailHtml.length,
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from,
      to,
      subject: `Welcome to the Platform, ${name}!`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      recipient: to,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  const emailHtml = await render(
    WelcomeEmail({ name: "Jane Doe", email: "jane@example.com" })
  );

  return new NextResponse(emailHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
