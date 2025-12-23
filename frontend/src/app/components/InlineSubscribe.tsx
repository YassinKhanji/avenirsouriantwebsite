import { useState } from "react";
import { useI18n } from "../i18n";

type InlineSubscribeProps = {
  courseId?: number;
  courseTitle?: string;
  compact?: boolean; // for card usage
  source?: string; // e.g., "inline", "card", "course-detail"
  hideCopy?: boolean; // hide heading/description copy
};

export default function InlineSubscribe({ courseId, courseTitle, compact, source, hideCopy }: InlineSubscribeProps) {
  const { t, lang } = useI18n();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          lang,
          source: source || (compact ? "card" : "inline"),
          course_id: courseId ?? null,
          course_title: courseTitle ?? null,
          page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={compact ? "w-full" : "max-w-xl mx-auto"}>
      {!compact && !hideCopy && (
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold mb-2">{t("updates.title")}</h3>
          <p className="text-sm text-muted-foreground">{t("updates.desc")}</p>
        </div>
      )}
      <form onSubmit={onSubmit} className="flex gap-3 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("updates.email")}
          required
          className="flex-1 px-4 py-3 rounded-xl border border-border bg-background"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60 cursor-pointer"
        >
          {compact ? t("updates.subscribe") : t("updates.subscribe")}
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">{t("updates.success")}</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">{t("updates.error")}</p>
      )}
    </div>
  );
}
