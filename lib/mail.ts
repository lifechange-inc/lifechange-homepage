export type ContactPayload = {
  name: string;
  kana?: string;
  phone: string;
  email?: string;
  area?: string;
  service?: string;
  preferredContact?: string;
  message: string;
};

export function validateContactPayload(payload: Partial<ContactPayload>) {
  const errors: Record<string, string> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "お名前を入力してください。";
  }
  if (!payload.phone || payload.phone.trim().length < 8) {
    errors.phone = "電話番号を入力してください。";
  }
  if (!payload.message || payload.message.trim().length < 10) {
    errors.message = "お問い合わせ内容を10文字以上で入力してください。";
  }
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "メールアドレスの形式を確認してください。";
  }

  return errors;
}

export function renderContactEmail(payload: ContactPayload) {
  const subject = `【ライフチェンジHP】${payload.service || "お問い合わせ"} / ${payload.name}様`;
  const body = [
    "ホームページからお問い合わせがありました。",
    "",
    `お名前: ${payload.name}`,
    `フリガナ: ${payload.kana || "未入力"}`,
    `電話番号: ${payload.phone}`,
    `メール: ${payload.email || "未入力"}`,
    `対応エリア: ${payload.area || "未入力"}`,
    `相談サービス: ${payload.service || "未入力"}`,
    `希望連絡方法: ${payload.preferredContact || "未入力"}`,
    "",
    "お問い合わせ内容:",
    payload.message,
    "",
    "写真がある場合は、LINEでの追加共有をご案内してください。"
  ].join("\n");

  return { subject, body };
}
