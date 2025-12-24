"use client";
import { use, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-12 border ">
      <div className="bg-white p-8 rounded-xl shadow max-w-2xl">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        {sent ? (
          <p className="mt-4 text-[#C08081] font-semibold">
            Thanks! We'll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <input
                name="name"
                placeholder="Your name"
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="w-full border rounded-md px-3 py-2"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#C08081] text-white px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
