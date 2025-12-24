import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900">
          Step Into Comfort — Leather Shop
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Premium shoes crafted for everyday comfort and timeless style.
          Discover your next favorite pair.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <Link
            href="/about"
            className="inline-block bg-[#C08081] text-white px-5 py-3 rounded-lg shadow"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-[#C08081] text-white px-5 py-3 rounded-lg shadow"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Handcrafted</h3>
            <p className="text-sm text-gray-500">
              Carefully made with the finest materials.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-semibold">All-day Comfort</h3>
            <p className="text-sm text-gray-500">
              Cushioning and support for every step.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Free Returns</h3>
            <p className="text-sm text-gray-500">
              Not the right fit? Return easily within 7 days.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-8 md:my-6">
        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/hero-shoe.jpg"
            alt="Shoe sample"
            className="w-full h-auto object-cover"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
}
