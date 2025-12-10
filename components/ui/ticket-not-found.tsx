import Link from "next/link";

function TicketNotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-6 text-center text-white">
      <h1 className="text-4xl font-bold tracking-tight">Ticket Not Found</h1>
      <p className="max-w-[34ch] text-lg text-white/70">
        It looks like we don’t have any data for this ticket. Please make sure
        you’ve generated one first.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-[#F57463] px-6 py-2 text-white transition hover:bg-[#e05c4f]"
      >
        Back to Form
      </Link>
    </section>
  );
}

export default TicketNotFound;
