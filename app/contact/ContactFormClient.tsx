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
          <span className="mb-1 block text-sm font-medium">Full name</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
              w-full rounded-xl bg-white/60 border border-[#dfe6d3] px-3 py-2.5 
              outline-none placeholder:text-[#a3ad9a] dark:bg-[#1c211d]/60 
              dark:border-[#3b463c] dark:placeholder:text-[#98a391]"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full rounded-xl bg-white/60 border border-[#dfe6d3] px-3 py-2.5 
              outline-none placeholder:text-[#a3ad9a] dark:bg-[#1c211d]/60 
              dark:border-[#3b463c] dark:placeholder:text-[#98a391]"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">
            Zebras are black and…
          </span>
          <input
            type="text"
            name="security"
            placeholder=""
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            required
            className="
              w-full rounded-xl bg-white/60 border border-[#dfe6d3] px-3 py-2.5 
              outline-none placeholder:text-[#a3ad9a] dark:bg-[#1c211d]/60 
              dark:border-[#3b463c] dark:placeholder:text-[#98a391]"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Message</span>
          <textarea
            name="message"
            rows={6}
            placeholder="Your message…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="
              w-full rounded-xl bg-white/60 border border-[#dfe6d3] px-3 py-2.5 
              outline-none placeholder:text-[#a3ad9a] dark:bg-[#1c211d]/60 
              dark:border-[#3b463c] dark:placeholder:text-[#98a391]"
          />
        </label>

        <div className="pt-2">
          <button
            type="submit"
            disabled={disable}
            aria-disabled={disable}
            className="
              inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium
              bg-[#2f6d47] text-white hover:bg-[#295e3e]
              disabled:opacity-60 disabled:cursor-not-allowed transition
              dark:bg-[#b9c6ac] dark:text-[#1b1d18] dark:hover:bg-[#a9b99f]"
          >
            Send message
          </button>
        </div>

        <p className="text-xs text-[#7a8578] dark:text-[#aeb9a6]">
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
