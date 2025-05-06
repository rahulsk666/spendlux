"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { linkItems } from "@/constants/navLinks";
import { useAuth } from "@/context/AuthContext";
import { HeaderSkeleton } from "./header-skeleton";

export default function Header() {
  const pathName = usePathname();
  const { user, loading } = useAuth();
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

  if (loading) {
    return <HeaderSkeleton />;
  }

  return (
    <div>
      <div className="grid grid-cols-3 text-white">
        <div className="col-span-2 text-left text-xs p-5">
          <p className="font-montserrat tracking-wider">
            Welcome!
            <span className="font-bold text-base pl-1">
              {user?.displayName || "User"}
            </span>
          </p>
          <p>
            {pageName.subtitle}
            <span className="font-bold text-lg pl-2">{pageName.title}</span>
          </p>
        </div>
        <a href="/profile" className="flex justify-end p-4">
          {loading ? (
            <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse"></div>
          ) : (
            <Avatar className="w-12 h-12">
              <AvatarImage src={user?.photoURL || undefined} loading="lazy" />
              <AvatarFallback>
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          )}
        </a>
      </div>
    </div>
  );
}
