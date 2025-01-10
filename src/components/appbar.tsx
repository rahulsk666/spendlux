import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

export default function AppBar() {
  return (
    <div className="fixed bottom-16 max-w-60 max-h-48 inset-x-0 mx-auto z-50">
      <Card className="border-none rounded-full bg-appbar-primary flex flex-row place-content-center p-1">
        <div
          id="home"
          className="rounded-full w-fit bg-appbar-secondary shadow-black m-1 p-3"
        >
          <Image
            src={`/home.svg`}
            alt="home"
            width={30}
            height={30}
            style={{ width: "auto" }}
          />
        </div>
        <div
          id="create"
          className="rounded-full w-fit bg-appbar-secondary shadow-black m-1 p-3"
        >
          <Image
            src={`/plus.svg`}
            alt="home"
            width={30}
            height={30}
            style={{ width: "auto" }}
          />
        </div>
        <div
          id="analytics"
          className="rounded-full w-fit bg-appbar-secondary shadow-black m-1 p-3"
        >
          <Image
            src={`/bar_chart.svg`}
            alt="home"
            width={30}
            height={30}
            style={{ width: "auto" }}
          />
        </div>
        <div
          id="list"
          className="rounded-full w-fit bg-appbar-secondary shadow-black m-1 p-3"
        >
          <Image
            src={`/list.svg`}
            alt="home"
            width={30}
            height={30}
            style={{ width: "auto" }}
          />
        </div>
      </Card>
    </div>
  );
}
