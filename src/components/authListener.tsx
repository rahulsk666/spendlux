"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AuthListener() {
  useEffect(() => {
    const supabase = createClient();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "INITIAL_SESSION" && session?.user) {
          const user = session.user;
          const { error } = await supabase.from("profiles").upsert(
            {
              user_id: user.id, // assuming 'id' is PK and matches auth.users.id
              user_email: user.email,
              display_name: user.user_metadata?.name,
              last_login: new Date(),
            },
            { onConflict: "user_id" } // important for proper upsert
          );
          if (error) {
            toast.error(error.message);
          }
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return null;
}
