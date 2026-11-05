"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, CheckCircle2, X } from "lucide-react";

const TIMES = [
  "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const emptyForm = { name: "", phone: "", date: "", time: "", guests: "2", notes: "" };

export default function ReservationButton({ className, children }: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [today, setToday] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm(emptyForm);
    }, 250);
  };

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const prettyDate = form.date
    ? new Date(form.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
    : "";

  const input =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children ?? "Make Reservation"}
      </button>

      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="reservation-title"
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl text-left"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="p-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-600" />
                  <h2 id="reservation-title" className="mb-2 text-2xl font-bold text-gray-900">
                    You&apos;re all set, {form.name.split(" ")[0]}!
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Table for <strong>{form.guests}</strong> on <strong>{prettyDate}</strong> at{" "}
                    <strong>{form.time}</strong>. We&apos;ll text {form.phone} to confirm.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-secondary"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2.5">
                      <CalendarCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 id="reservation-title" className="text-2xl font-bold text-gray-900">
                        Reserve a Table
                      </h2>
                      <p className="text-sm text-gray-500">We hold tables for 15 minutes.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1 block text-sm font-medium text-gray-700">Name</span>
                        <input name="name" required value={form.name} onChange={update} className={input} />
                      </label>
                      <label className="block">
                        <span className="mb-1 block text-sm font-medium text-gray-700">Phone</span>
                        <input name="phone" type="tel" required value={form.phone} onChange={update} className={input} />
                      </label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <label className="block">
                        <span className="mb-1 block text-sm font-medium text-gray-700">Date</span>
                        <input name="date" type="date" min={today} required value={form.date} onChange={update} className={input} />
                      </label>
                      <label className="block">
                        <span className="mb-1 block text-sm font-medium text-gray-700">Time</span>
                        <select name="time" required value={form.time} onChange={update} className={input}>
                          <option value="">Select</option>
                          {TIMES.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-1 block text-sm font-medium text-gray-700">Guests</span>
                        <select name="guests" value={form.guests} onChange={update} className={input}>
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1 block text-sm font-medium text-gray-700">Special requests (optional)</span>
                      <textarea name="notes" rows={2} value={form.notes} onChange={update} className={input} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-secondary"
                  >
                    Request Reservation
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </>
  );
}
