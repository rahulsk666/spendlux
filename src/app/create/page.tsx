import React from "react";
import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="">
      <div className="rounded mt-2">
        <SemiCircleProgressBar />
      </div>
      <div className="grid grid-cols-2 m-2 p-3 text-xs font-normal">
        <div className="col-span-1">Recent Transactions</div>
        <div className="text-right underline decoration-white/25">
          <Link href={"/"}>View All</Link>
        </div>
      </div>
    </div>
  );
}
