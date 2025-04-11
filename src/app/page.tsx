"use client";

import { useState } from "react";
import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import TransactionCard from "@/components/transactionCard";
import Link from "next/link";
import { AddTransactionDialog } from "@/components/add-transaction-dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const transactions = [
    { success: false },
    { success: true },
    { success: false },
    { success: true },
    { success: false },
    { success: false },
    { success: true },
    { success: false },
  ];

  return (
    <section className="mt-2 pb-20">
      <div className="rounded">
        <SemiCircleProgressBar />
      </div>

      <div className="grid grid-cols-2 m-2 p-3 text-xs font-normal">
        <div>Recent Transactions</div>
        <div className="text-right underline decoration-white/25">
          <Link href="/">View All</Link>
        </div>
      </div>

      <div>
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} success={transaction.success} />
        ))}
      </div>

      <div className="fixed bottom-20 right-4 z-50">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="rounded-full w-14 h-14 bg-appbar-blue hover:bg-appbar-blue/90 shadow-lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <AddTransactionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
}
