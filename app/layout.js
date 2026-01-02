import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "leather Shop — Premium Shoes",
  description: "Stylish, comfortable shoes for every step.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen flex flex-col">
        <header className="w-full">
          <div className="border bg-[#C08081] app-container flex items-center justify-between py-6">
            <div className="text-2xl font-semibold text-indigo-600">
              <Link href="/" className="text-gray-600">
                Leather Shop
              </Link>
            </div>
            <nav className="space-x-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#673147]">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#673147]">
                About
              </Link>
              <Link href="/contact" className="hover:text-[#673147]">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 bg-[#fdf5e6]">{children}</main>

        <footer className="w-full bg-[#C08081]">
          <div className="app-container py-8 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Leather Shop — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
