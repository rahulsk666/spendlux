"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";
import { usePathname } from "next/navigation";
import { linkItems } from "@/constants/navLinks";

export default function AppBar() {
  const [activeNav, setActiveNav] = useState("profile");
  const handleNav = (currentNav: string) => {
    setActiveNav(currentNav);
  };
  const pathName = usePathname();
  useEffect(() => {
    linkItems.map((item) => {
      if (item.href == pathName) {
        setActiveNav(item.id);
      }
    });
  }, [pathName]);
  return (
    <div className="fixed bottom-2 bg-appbar-primary inset-x-0 flex flex-row rounded-full justify-self-center p-2">
      {linkItems.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.href}
            className="p-0 rounded-full min-w-fit"
          >
            <IconButton
              key={item.id}
              text={item.label}
              className="p-0"
              spanClass="text-xs font-normal"
            >
              <Image
                src={item.icon}
                alt={item.id}
                width={25}
                height={25}
                className="p-1"
              />
            </IconButton>
          </Link>
        );
      })}
    </div>
  );
}
