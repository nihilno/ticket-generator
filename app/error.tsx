"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative z-50 flex h-screen flex-col items-center justify-center gap-6 text-center text-white">
      <h1 className="text-4xl font-bold tracking-tight">
        Something Went Wrong
      </h1>
      <p className="max-w-[40ch] text-base text-white/70">
        We ran into an unexpected error. Please try again or return to the
        homepage.
      </p>

      <div className="max-w-[60ch] rounded-md bg-white/10 p-4">
        <p className="text-sm font-semibold text-[#F57463]">Error Message:</p>
        <p className="text-sm text-white/80">{error.message}</p>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => reset()}
          className="rounded-md bg-[#F57463] px-6 py-2 text-white transition hover:bg-[#e05c4f]"
        >
          Try Again
        </Button>
        <Link href="/">
          <Button className="rounded-md bg-white/20 px-6 py-2 text-white transition hover:bg-white/30">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
