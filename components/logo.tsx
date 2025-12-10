import LogoFull from "@/public/images/logo-full.svg";
import Image from "next/image";

function Logo() {
  return <Image src={LogoFull} alt="Logo" width={166} height={24} />;
}

export default Logo;
