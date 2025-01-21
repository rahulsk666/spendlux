import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function Profile() {
  return (
    <section about="profile" className="justify-self-center">
      <div className="rounded p-4 m-3">
        <Avatar className="w-44 h-44">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="pt-4 text-center font-bold text-lg">
          <span>John Doe</span>
        </div>
        <div className="pt-2 text-center text-[10px]">
          <span>john.doe@example.com</span>
        </div>
        <div className="mt-6 p-3 px-5 text-center bg-appbar-blue rounded-full">
          <button className="font-semibold text-xs">logout</button>
        </div>
      </div>
    </section>
  );
}
