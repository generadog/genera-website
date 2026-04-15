/*
 * Genera Software — 404 Page
 * Brand: Dark forest green, amber-gold, Poppins headings
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-grey px-4 text-center">
      <p
        className="text-sm font-semibold text-gold uppercase tracking-widest mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Page not found
      </p>
      <h1 className="text-6xl sm:text-8xl text-forest" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>
        404
      </h1>
      <p className="mt-6 text-charcoal/60 text-lg max-w-md leading-relaxed">
        Sorry, we could not find the page you are looking for. It may have been
        moved or no longer exists.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-forest text-white font-bold rounded-lg hover:bg-forest-light transition-all duration-200 shadow-md text-sm"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
