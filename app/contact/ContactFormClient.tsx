"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sec, setSec] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const labelClass =
    "mb-1 block type-base font-medium tracking-[0.035em] text-[color:var(--soft-ink)]";
  const fieldClass =
    "w-full rounded-xl bg-[color:var(--pill)] border border-[color:var(--hairline)] px-3 py-2.5 outline-none placeholder:text-[color:var(--soft-ink)] text-[color:var(--ink)] focus:border-[rgba(var(--accent-rgb),0.5)] focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.22)]";

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (disable) return;
    setDisable(true);

    if (sec.trim().toLowerCase() !== "white") {
      toast("That should have been easy 🤔", { type: "error" });
      setDisable(false);
      return;
    }

    const id = toast.loading("Sending…");
    try {
      const res = await fetch(`/api/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      toast.dismiss(id);

      if (res.status === 201) {
        toast("Thanks — I’ll get back to you soon!", { type: "success" });
        setName("");
        setEmail("");
        setSec("");
        setMessage("");
      } else {
        toast("Please recheck your inputs!", { type: "error" });
      }
    } catch {
      toast.dismiss(id);
      toast("Network error. Try again?", { type: "error" });
    } finally {
      setDisable(false);
    }
  }

  return (
    <>
      <form onSubmit={submitForm} autoComplete="off" className="grid gap-4">
        <label className="block">
          <span className={labelClass}>Full name</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Zebras are black and…</span>
          <input
            type="text"
            name="security"
            placeholder=""
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            required
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            rows={6}
            placeholder="Your message…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={fieldClass}
          />
        </label>

        <div className="pt-2">
          <button
            type="submit"
            disabled={disable}
            aria-disabled={disable}
            className="
              inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium tracking-[0.05em]
              bg-[color:var(--ink)] text-[#f6f2e8] border border-[color:rgba(48,68,51,0.45)]
              shadow-[0_16px_44px_-32px_rgba(34,40,34,0.7)]
              hover:shadow-[0_18px_50px_-28px_rgba(34,40,34,0.72)] hover:bg-[color:var(--muted-ink)]
              disabled:opacity-60 disabled:cursor-not-allowed
              dark:bg-[#e5e7eb] dark:text-[#0b0c0c] dark:border-[color:rgba(226,231,221,0.6)] dark:hover:bg-[#f5f7fa]"
          >
            Send message
          </button>
        </div>

        <p className="type-caption text-[color:var(--soft-ink)] dark:text-[color:var(--soft-ink)]">
          Happy to hear from you — I’ll get back shortly.
        </p>
      </form>

      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </>
  );
}
