"use client";

import { formSchema, formType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { nanoid } from "nanoid";
import DropFile from "./drop-file";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

function MainForm() {
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: undefined,
      fullName: "",
      email: "",
      username: "",
    },
  });

  const { replace } = useRouter();

  function onSubmit(formData: formType) {
    const id = nanoid(5);

    let avatarBase64: string | undefined;
    if (formData.avatar?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        avatarBase64 = reader.result as string;

        const ticketDetails = {
          id,
          avatar: avatarBase64, // base64 string
          fullName: formData.fullName,
          email: formData.email,
          username: formData.username,
        };

        localStorage.setItem("ticket-details", JSON.stringify(ticketDetails));
        replace(`/ticket/${id}`);
      };
      reader.readAsDataURL(formData.avatar[0]);
    }
  }

  return (
    <Form {...form}>
      <form
        className="mt-10 w-full max-w-[522px] space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Avatar</FormLabel>
                <FormControl>
                  <DropFile value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-2 flex items-center gap-1">
            <Info className="h-4 w-4 text-white/70" />
            <small className="text-xs text-white/70">
              Upload your photo (JPG or PNG, max size: 512x512px).
            </small>
          </div>
        </div>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} maxLength={64} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="@yourusername"
                  {...field}
                  maxLength={39}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-4 h-[54px] w-full rounded-xl bg-[#F57463] text-[20px] font-extrabold tracking-[-0.3px] text-[#0D082D] transition-all duration-300 ease-in-out hover:bg-[#E1604F] hover:shadow-xl"
        >
          Generate My Ticket
        </Button>
      </form>
    </Form>
  );
}

export default MainForm;
