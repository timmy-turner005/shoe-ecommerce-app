"use client";
import Link from "next/link";
import { use, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-12  flex justify-center px-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-xl">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        {sent ? (
          <div>
            <p className="mt-4 text-[#C08081] font-semibold">
              Thanks! We'll get back to you shortly.
            </p>
            <div className="text-right">
              <Link
                href="/"
                className="text-gray-800 hover:text-[#bb6a6c] cursor-pointer"
              >
                Back
              </Link>
            </div>
          </div>
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
                className="hover:bg-[#bb6a6c] bg-[#C08081] text-white px-4 py-2 rounded-md"
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
