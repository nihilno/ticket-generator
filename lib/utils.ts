import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTicketDetails(data: string) {
  const stored = localStorage.getItem(data);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as {
      id: string;
      avatar: string;
      fullName: string;
      email: string;
      username: string;
    };
  } catch {
    return null;
  }
}
