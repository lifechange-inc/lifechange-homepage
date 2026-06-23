import { NextResponse } from "next/server";
import { renderContactEmail, validateContactPayload, type ContactPayload } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;
    const errors = validateContactPayload(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: Object.values(errors)[0],
          errors
        },
        { status: 400 }
      );
    }

    const normalizedPayload: ContactPayload = {
      name: String(payload.name || "").trim(),
      kana: String(payload.kana || "").trim(),
      phone: String(payload.phone || "").trim(),
      email: String(payload.email || "").trim(),
      area: String(payload.area || "").trim(),
      service: String(payload.service || "").trim(),
      preferredContact: String(payload.preferredContact || "").trim(),
      message: String(payload.message || "").trim()
    };
    const email = renderContactEmail(normalizedPayload);

    if (process.env.CONTACT_WEBHOOK_URL) {
      const webhookResponse = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.CONTACT_TO_EMAIL,
          ...email,
          payload: normalizedPayload
        })
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            message: "送信先への連携に失敗しました。電話またはLINEでご相談ください。"
          },
          { status: 502 }
        );
      }
    } else if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          message: "送信設定が未完了です。電話またはLINEでご相談ください。"
        },
        { status: 503 }
      );
    } else {
      console.info("Contact form submission received in development", {
        subject: email.subject,
        area: normalizedPayload.area,
        service: normalizedPayload.service
      });
    }

    return NextResponse.json({
      ok: true,
      message: "送信しました。内容を確認してご連絡します。"
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "送信できませんでした。時間をおいて再度お試しください。"
      },
      { status: 500 }
    );
  }
}
