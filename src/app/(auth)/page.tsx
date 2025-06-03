import DashboardPage from "@/components/dashboard-page";
import { getTransactions } from "@/lib/transactionActions";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  const transactions = getTransactions();

  return (
    <section className="mt-2">
      <Suspense fallback={<Loading />}>
        <DashboardPage transaction={transactions} />
      </Suspense>
    </section>
  );
}
