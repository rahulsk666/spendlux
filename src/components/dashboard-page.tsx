"use client";

import Link from "next/link";
import { SemiCircleProgressBar } from "@/components/semiCircleProgressBar";
import TransactionCard from "@/components/transactionCard";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddTransactionDialog } from "@/components/add-transaction-dialog";
import { ScrollArea } from "./ui/scroll-area";

type Transaction = {
  id: number;
  title: string;
  description: string;
  amount: number;
  type: string;
  category_id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
};

type DashboardPageProps = {
  transaction: Promise<Transaction[]>;
};

export default function DashboardPage({ transaction }: DashboardPageProps) {
  const transactions = use(transaction);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <div className="rounded">
        <SemiCircleProgressBar
          totalAmount={30000}
          spentAmount={10000}
          safeToSpend={10000}
        />
      </div>

      <div className="grid grid-cols-2 m-2 p-3 text-xs font-normal">
        <div>Recent Transactions</div>
        <div className="text-right underline decoration-white/25">
          <Link href="/transactions">View All</Link>
        </div>
      </div>

      <ScrollArea className="rounded-md w-full h-svh max-w-full max-h-[60svh] md:max-h-[70svh] lg:max-h-[80svh]">
        <div>
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </ScrollArea>

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
    </>
  );
}
