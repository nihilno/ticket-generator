import BgImage from "@/public/images/background-desktop.png";
import CircleImage from "@/public/images/pattern-circle.svg";
import LinesImage from "@/public/images/pattern-lines.svg";
import LineTwo from "@/public/images/pattern-squiggly-line-bottom-desktop.svg";
import LineOne from "@/public/images/pattern-squiggly-line-top.svg";
import Image from "next/image";

function Images() {
  return (
    <>
      <Image
        src={BgImage}
        alt=""
        fill
        className="overflow-hidden object-cover"
      />
      <Image
        src={LinesImage}
        alt=""
        fill
        className="overflow-hidden object-cover"
      />
      <div className="absolute bottom-0 left-0 h-80 w-80 md:h-100 md:w-100 lg:h-140 lg:w-140">
        <Image
          src={LineTwo}
          alt=""
          fill
          className="overflow-hidden object-contain object-bottom"
        />
      </div>
      <div className="absolute -top-10 -left-10 h-40 w-40 md:-top-30 md:h-60 md:w-60 lg:-top-40 lg:left-10 lg:h-80 lg:w-80">
        <Image
          src={CircleImage}
          alt=""
          fill
          className="overflow-hidden object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 h-50 w-50 md:h-70 md:w-70 lg:h-100 lg:w-100">
        <Image
          src={LineOne}
          alt=""
          fill
          className="overflow-hidden object-contain"
        />
      </div>
    </>
  );
}

export default Images;
