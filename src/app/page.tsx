"use client";

import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import TransactionCard from "@/components/transactionCard";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="mt-2">
        <div className="rounded">
          <SemiCircleProgressBar />
        </div>
        <div className="grid grid-cols-2 m-2 p-3 text-xs font-normal">
          <div className="col-span-1">Recent Transactions</div>
          <div className="text-right underline decoration-white/25">
            <Link href={"/"}>View All</Link>
          </div>
        </div>
        <div>
          <TransactionCard success={false} />
          <TransactionCard success={true} />
          <TransactionCard success={false} />
          <TransactionCard success={true} />
          <TransactionCard success={false} />
        </div>
      </div>
    </section>
  );
}
