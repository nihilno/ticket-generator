import MainForm from "@/components/form";
import Logo from "@/components/logo";
import Title from "@/components/title";
import { SECTION } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className={cn(SECTION)}>
      <Link href="/">
        <Logo />
      </Link>
      <Title />
      <MainForm />
    </section>
  );
}
