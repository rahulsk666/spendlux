"use client";

import { SemiCircleProgressBar } from "@/components/semiCircleProgressBar";
import TransactionCard from "@/components/transactionCard";
import Link from "next/link";
import { useState } from "react";
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
    <section className="mt-2">
      <div className="rounded">
        <SemiCircleProgressBar
          totalAmount={30000}
          spentAmount={20000}
          safeToSpend={250}
        />
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

      <div className="fixed bottom-24 right-4">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="rounded-full bg-appbar-blue hover:bg-appbar-blue/90 h-14 w-14"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <AddTransactionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        className="transition-transform duration-300 ease-in-out transform"
      />
    </section>
  );
}
