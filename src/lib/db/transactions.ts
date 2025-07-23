import { createClient } from "@/utils/supabase/server";
import { getAuthenticatedUser } from "../auth";
import { transactionCardTypes } from "@/components/transactionCard";

export const getTransactions = async (
  currentPage: number = 1,
  limit: number = 10,
  groupBy: string = "daily"
): Promise<{
  transactions: transactionCardTypes[];
  totalItems: number;
  error: string | null;
}> => {
  const supabase = await createClient();
  const user = await getAuthenticatedUser();
  console.log(groupBy);

  const from = (currentPage - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from("expenses")
    .select("*", { count: "exact" }) // count: "exact" fetches total rows
    .eq("user_id", user.id)
    .range(from, to)
    .order("created_at", { ascending: false });

  return {
    transactions: data || [],
    totalItems: count || 0,
    error: error ? error.message : null,
  };
};

export async function createTransaction(transaction: {
  title: string;
  description: string;
  category: string;
  amount: number;
  type: "expense" | "income";
  user_id: string;
}) {
  const supabase = await createClient();

  const payload = {
    title: transaction.title,
    description: transaction.description,
    amount: transaction.amount,
    type: transaction.type,
    user_id: transaction.user_id,
    category_id: Number(transaction.category),
  };

  const { data, error } = await supabase
    .from("expenses")
    .insert([payload])
    .select()
    .single();

  return { data, error };
}
