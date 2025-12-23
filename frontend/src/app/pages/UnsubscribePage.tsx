import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { useI18n } from "../i18n";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function UnsubscribePage() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = searchParams.get("email");
    if (email) {
      setEmail(email);
      handleUnsubscribe(email);
    }
  }, [searchParams]);

  const handleUnsubscribe = async (targetEmail?: string) => {
    const emailToUse = (targetEmail || email).trim();
    if (!emailToUse) {
      setStatus("error");
      setMessage("No email provided. Please enter your email to unsubscribe.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`/api/unsubscribe?email=${encodeURIComponent(emailToUse)}&lang=${encodeURIComponent(t("lang.code") || "en")}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Unsubscribe failed");
      setStatus("success");
      setMessage("You have been unsubscribed from our mailing list.");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to unsubscribe. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full px-4"
      >
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Unsubscribe</h1>
            <p className="text-muted-foreground">Enter your email to stop receiving updates.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUnsubscribe();
            }}
            className="space-y-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60 cursor-pointer"
            >
              {status === "loading" ? "Processing..." : "Unsubscribe"}
            </button>
          </form>

          {status === "success" && (
            <div className="rounded-lg border border-border bg-card p-4 text-left">
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
                <CheckCircle className="w-5 h-5" />
                <span>Unsubscribed</span>
              </div>
              <p className="text-sm text-muted-foreground">{message}</p>
            </div>
          )}

          {status === "error" && (
            <div className="rounded-lg border border-border bg-card p-4 text-left">
              <div className="flex items-center gap-2 text-red-600 font-semibold mb-2">
                <AlertCircle className="w-5 h-5" />
                <span>Error</span>
              </div>
              <p className="text-sm text-muted-foreground">{message}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
