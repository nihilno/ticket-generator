"use client";

import { CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "./ui/shadcn-io/dropzone";

function DropFile({
  value,
  onChange,
}: {
  value?: File[];
  onChange?: (files: File[] | undefined) => void;
}) {
  const [filePreview, setFilePreview] = useState<string | undefined>();

  function handleDrop(files: File[]) {
    onChange?.(files);

    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFilePreview(e.target?.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  }

  function handleRemove() {
    onChange?.(undefined);
    setFilePreview(undefined);
  }

  return (
    <section className="relative">
      <Dropzone
        accept={{ "image/*": [".png", ".jpg"] }}
        maxSize={512 * 512 * 10}
        minSize={512}
        onDrop={handleDrop}
        onError={console.error}
        src={value}
        className="bg-accent/15 border-accent/50 hover:bg-accent/15 group z-20 mt-2.5 h-32 rounded-xl border-2 border-dashed p-4 backdrop-blur-[2px]"
      >
        <DropzoneEmptyState>
          <div className="flex flex-col items-center gap-3">
            <div className="border-accent bg-accent/25 group-hover:bg-accent/50 grid h-[50px] w-[50px] place-items-center rounded-xl border transition-colors">
              <CloudUpload className="scale-150 text-[#F57463]" />
            </div>
            <p className="text-base text-white/80 sm:text-lg">
              Drag and drop or click to upload
            </p>
          </div>
        </DropzoneEmptyState>
        <DropzoneContent>
          {filePreview && (
            <div className="border-accent relative -mt-8 h-14 w-14 overflow-hidden rounded-xl border-2">
              <Image
                src={filePreview}
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
          )}
        </DropzoneContent>
      </Dropzone>
      {value && value.length > 0 && (
        <Button
          type="button"
          onClick={handleRemove}
          className="bg-accent/20 hover:bg-accent/50 absolute bottom-4 left-1/2 z-50 h-6 -translate-x-1/2 rounded-sm px-2 text-sm leading-[120%] tracking-[-0.2px] underline"
        >
          Remove image
        </Button>
      )}
    </section>
  );
}

export default DropFile;
