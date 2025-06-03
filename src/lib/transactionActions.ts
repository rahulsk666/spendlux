import { createClient } from "@/utils/supabase/server";

export const getTransactions = async () => {
    const supabase = await createClient();
   const {data, error} = await supabase.from("expenses").select("*");

  if (error) {
    throw new Error("Failed to fetch transactions",error);
  }
  if (!data) {
    return [];
  }
  return data;
}