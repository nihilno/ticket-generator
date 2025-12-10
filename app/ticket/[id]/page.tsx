import Logo from "@/components/logo";
import Ticket from "@/components/ticket";
import { Button } from "@/components/ui/button";
import { SECTION } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About your Ticket",
};

export default async function TicketPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <section className={cn(SECTION)}>
      <Logo />
      <Ticket id={id} />
      <Link href="/">
        <Button className="mt-12 h-[54px] w-fit rounded-xl bg-[#F57463] text-[20px] font-extrabold tracking-[-0.3px] text-[#0D082D] transition-all duration-300 ease-in-out hover:bg-[#E1604F] hover:shadow-xl">
          Generate another!
        </Button>
      </Link>
    </section>
  );
}
