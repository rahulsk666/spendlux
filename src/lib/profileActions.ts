"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchProfile() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user profile:", error);
    throw new Error("Failed to fetch user profile");
  }

  return user;
}
