"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { trackEvent } from "@/lib/gtag";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = (await response.json()) as { ok: boolean; message?: string };

    if (response.ok && result.ok) {
      setStatus("success");
      setMessage(result.message || "送信しました。内容を確認してご連絡します。");
      event.currentTarget.reset();
      trackEvent("contact_form_submit", { status: "success" });
      return;
    }

    setStatus("error");
    setMessage(result.message || "送信できませんでした。電話またはLINEでご相談ください。");
    trackEvent("contact_form_submit", { status: "error" });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-card border border-forest-100 bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink-700">
          お名前
          <input name="name" required className="form-input" placeholder="山田 太郎" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink-700">
          フリガナ
          <input name="kana" className="form-input" placeholder="ヤマダ タロウ" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink-700">
          電話番号
          <input name="phone" required inputMode="tel" className="form-input" placeholder="電話番号" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink-700">
          メールアドレス
          <input name="email" type="email" className="form-input" placeholder="メールアドレス" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink-700">
          対応エリア
          <select name="area" className="form-input">
            <option value="">選択してください</option>
            {areas.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink-700">
          相談サービス
          <select name="service" className="form-input">
            <option value="">選択してください</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <fieldset className="grid gap-2">
        <legend className="text-sm font-bold text-ink-700">希望連絡方法</legend>
        <div className="flex flex-wrap gap-2">
          {["電話", "LINE", "メール"].map((method) => (
            <label key={method} className="rounded-card border border-forest-100 px-3 py-2 text-sm font-bold text-ink-700">
              <input className="mr-2" type="radio" name="preferredContact" value={method} />
              {method}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm font-bold text-ink-700">
        お問い合わせ内容・現在の設置状況
        <textarea
          name="message"
          required
          minLength={10}
          rows={7}
          className="form-input resize-y"
          placeholder="例: 松戸市でエアコン交換を検討しています。室外機はベランダ置きです。"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-card bg-forest-800 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "送信中" : "送信する"}
      </button>
      {message ? (
        <p className={status === "success" ? "text-sm font-bold text-forest-800" : "text-sm font-bold text-red-700"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
