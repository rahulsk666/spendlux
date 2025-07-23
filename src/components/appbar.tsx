"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";
import { usePathname } from "next/navigation";
import { linkItems } from "@/constants/navLinks";

type NavId = "home" | "create" | "analytics" | "transactions" | "";

export default function AppBar() {
  const pathName = usePathname();
  const [activeNav, setActiveNav] = useState<NavId>("");

  useEffect(() => {
    if (pathName === "/profile") {
      setActiveNav("");
    } else {
      const currentItem = linkItems.find((item) => item.href === pathName);
      if (currentItem) setActiveNav(currentItem.id as NavId);
    }
  }, [pathName]);

  return (
    <nav
      className="fixed bottom-2 bg-appbar-primary inset-x-0 flex flex-row rounded-full justify-self-center p-2"
      role="navigation"
      aria-label="Main navigation"
    >
      {linkItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="p-0 rounded-full min-w-fit"
          aria-current={activeNav === item.id ? "page" : undefined}
        >
          <IconButton
            iconName={item.id as NavId}
            text={item.label}
            className="p-0"
            spanClass="text-xs font-normal"
            handleNav={setActiveNav}
            activeNav={activeNav}
          >
            <Image
              src={item.icon}
              alt={`${item.label} icon`}
              width={25}
              height={25}
              className="p-1"
              priority={activeNav === item.id}
              loading={activeNav === item.id ? "eager" : "lazy"}
            />
          </IconButton>
        </Link>
      ))}
    </nav>
  );
}
