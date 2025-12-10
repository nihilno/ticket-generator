import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-accent/50 bg-accent/15 hover:bg-accent/40 h-[54px] w-full min-w-0 rounded-xl border-2 px-4 py-1 text-base text-[18px] font-normal text-white/70 shadow-xs backdrop-blur-xs transition-all duration-200 ease-in-out outline-none placeholder:text-white/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
