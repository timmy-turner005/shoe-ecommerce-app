import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-12">
      <div className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold">About ShoeCo</h2>
        <p className="mt-4 text-gray-600">
          Founded on a love for footwear, ShoeCo combines modern design with
          lasting comfort. We source premium materials and design every pair to
          be worn daily.
        </p>

        <h3 className="mt-6 font-semibold">Our Values</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>Quality materials</li>
          <li>Responsible manufacturing</li>
          <li>Customer-first policies</li>
        </ul>

        <p className="mt-6">
          <Link href="/" className="text-indigo-600">
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
