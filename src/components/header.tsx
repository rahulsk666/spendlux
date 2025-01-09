import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header (){
  return (
    <div>
      <div className="grid grid-cols-3 text-white">
        <div className="col-span-2 text-left text-xs p-5">
          <p className="font-montserrat tracking-wider">Welcome!</p>
          <p>
            your<span className="font-bold text-lg pl-2">Dashboard</span>
          </p>
        </div>
        <div className="flex justify-end p-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};