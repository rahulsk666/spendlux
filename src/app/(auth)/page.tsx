import DashboardPage from "@/components/dashboard-page";
// import { getTransactions } from "@/lib/transactionActions";
import { Suspense } from "react";
import Loading from "./loading";
import { getTransactions } from "@/lib/db/transactions";

export default async function Home() {
  const data = getTransactions();

  return (
    <section className="mt-2">
      <Suspense fallback={<Loading />}>
        <DashboardPage data={data} />
      </Suspense>
    </section>
  );
}
