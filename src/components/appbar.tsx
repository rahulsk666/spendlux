"use client";

import React, { useEffect, useState } from "react";
// import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";

export default function AppBar() {
  const [activeNav, setActiveNav] = useState("profile")
  const handleNav = (currentNav: string) => {
    setActiveNav(currentNav);
  };
  useEffect(() => {
    setActiveNav("home");
  }, []);
  const linkItems = [
    { label: "Dashboard", id: "home", icon: "/home.svg", href: "/" },
    { label: "Add New", id: "create", icon: "/plus.svg", href: "/" },
    { label: "Analytics", id: "analytics", icon: "/bar_chart.svg", href: "/" },
    { label: "All Transactions", id: "list", icon: "/list.svg", href: "/" },
  ];
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
              iconName={item.id}
              text={item.label}
              className="p-0"
              spanClass="text-xs font-normal"
              handleNav={handleNav}
              activeNav={activeNav}
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
