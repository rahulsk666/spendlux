"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { linkItems } from "@/constants/navLinks";

export default function Header() {
  const pathName = usePathname();
  const [pageName, setPageName] = useState({
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    linkItems.map((items) => {
      if (items.href == pathName) {
        setPageName({
          title: items.title,
          subtitle: items.subtitle,
        });
      } else if ("/profile" == pathName) {
        setPageName({
          title: "Profile",
          subtitle: "your",
        });
      }
    });
  }, [pathName]);
  return (
    <div>
      <div className="grid grid-cols-3 text-white">
        <div className="col-span-2 text-left text-xs p-5">
          <p className="font-montserrat tracking-wider">Welcome!</p>
          <p>
            {pageName.subtitle}<span className="font-bold text-lg pl-2">{pageName.title}</span>
          </p>
        </div>
        <a href="/profile" className="flex justify-end p-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </a>
      </div>
    </div>
  );
}
