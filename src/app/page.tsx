import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import TransactionCard from "@/components/transactionCard";
import Link from "next/link";

export default function Home() {
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
    </section>
  );
}
