import Images from "@/components/images";
import { inconsolata } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticket Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-[20px] leading-[120%] font-medium tracking-[-0.5px] antialiased",
          inconsolata.className,
        )}
      >
        <main className="relative min-h-dvh overflow-hidden">
          <Images />
          {children}
        </main>
      </body>
    </html>
  );
}
