"use client";
import { getTicketDetails } from "@/lib/utils";
import TicketImage from "@/public/images/pattern-ticket.svg";
import { Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "./logo";
import TicketNotFound from "./ui/ticket-not-found";

type ParsedTicketType = {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  username: string;
};

function Ticket({ id }: { id: string }) {
  const [ticketData, setTicketData] = useState<ParsedTicketType | null>();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const ticket = getTicketDetails("ticket-details");
    if (ticket?.id === id) {
      setTicketData(ticket);
      setIsValid(true);
    } else {
      setTicketData(null);
      setIsValid(false);
    }
  }, [id]);

  if (!isValid || !ticketData) return <TicketNotFound />;

  return (
    <>
      <article className="mt-10 flex flex-col items-center gap-8 text-center">
        <h1 className="max-w-[25ch] text-[30px] leading-[110%] font-extrabold tracking-tight text-white md:text-[60px]">
          Congrats,{" "}
          <span className="bg-linear-to-r from-[#F57463] to-white bg-clip-text text-transparent">
            {ticketData.fullName.split(" ").at(0)}
          </span>{" "}
          <span className="bg-linear-to-r from-[#F57463] to-white bg-clip-text text-transparent">
            {ticketData.fullName.split(" ").at(1)}
          </span>
          ! Your ticket is ready.
        </h1>
        <p className="max-w-[34ch] leading-8 text-white/70 md:max-w-[40ch] md:text-[24px]">
          We&apos;ve emailed your ticket to{" "}
          <span className="text-[#F57463]">{ticketData.email}</span> and will
          send updates in the run up to the event.
        </p>
      </article>

      <div className="relative mt-24 grid h-40 w-full max-w-[343px] grid-cols-[4.22fr_1fr] backdrop-blur-xl md:h-[280px] md:max-w-150">
        <Image
          src={TicketImage}
          alt="Your Ticket"
          fill
          className="object-contain select-none"
          sizes="(min-width: 768px) 600px, 343px"
          priority
        />
        <div className="flex flex-col p-4 md:px-6 md:py-10">
          <div className="md:pl-22">
            <div className="md:scale-150">
              <Logo />
            </div>
            <p className="mt-2 text-sm font-normal text-white/80 md:-translate-x-7.5 md:text-lg">
              Jan 31, 2026 / Austin, TX
            </p>
          </div>
          <div className="mt-auto flex items-center gap-4">
            <div className="relative h-9 w-9 md:h-20 md:w-20">
              <Image
                src={ticketData.avatar}
                alt="Thats You!"
                fill
                className="rounded-md object-cover"
                sizes="(min-width: 768px) 80px, 36px"
              />
            </div>
            <div className="md:space-y-2">
              <h2 className="text-white md:text-[30px]">
                {ticketData.fullName}
              </h2>
              <div className="flex items-center gap-1 md:gap-2">
                <Github className="h-4 w-4 text-white/80 md:h-5 md:w-5" />
                <span className="text-sm font-light text-white/80 md:text-[20px]">
                  @{ticketData.username}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="rotate-90 text-[22px] tracking-tight text-white/30 uppercase">
            #{ticketData.id}
          </p>
        </div>
      </div>
    </>
  );
}

export default Ticket;
