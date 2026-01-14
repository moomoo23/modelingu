import Link from "next/link";
import "./globals.css";
import { Rosarivo } from "next/font/google";
import Image from "next/image";

const rosarivo = Rosarivo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rosarivo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rosarivo.variable}>
      <body>
        <header className="fixed top-6 right-8 z-50">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="opacity-90 hover:opacity-100 transition w-20 mix-blend-multiply"
            />
          </Link>
        </header>
        {children}
        <footer className="mt-32 pb-24">
          <div className="mx-auto max-w-6xl px-6 flex flex-col items-center">
            {/* subtle line */}
            <div className="mb-12 h-px w-full bg-neutral-200" />

            {/* logo */}
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={300}
              height={300}
              className=" grayscale"
            />

            {/* colophon text */}
            <p className="font-serif text-xs tracking-wide text-neutral-500">
              © 2026 — All works by the author
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
