import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative z-50 flex h-screen flex-col items-center justify-center gap-6 text-center text-white">
      <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
      <p className="max-w-[30ch] text-lg text-white/70">
        Sorry, the page you’re looking for doesn’t exist. Please check the URL
        or go back.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-[#F57463] px-6 py-2 text-white transition hover:bg-[#e05c4f]"
      >
        Back to Home
      </Link>
    </section>
  );
}
