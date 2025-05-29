// components/AuthProvider.tsx
"use client";

import { useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { useUserStore } from "@/store/userStore";
import { createClient } from "@/utils/supabase/client";

type AuthProviderProps = {
  initialUser: User | null;
};

export default function AuthProvider({ initialUser }: AuthProviderProps) {
  const supabase = createClient();
  const { setUser, clearUser } = useUserStore();

  useEffect(() => {
    if (initialUser) setUser(initialUser);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("Auth state changed:", _event, session);
        
        if (session?.user) setUser(session.user);
        else clearUser();
      }
    );

    return () => listener?.subscription.unsubscribe();
  }, [initialUser, setUser, clearUser, supabase.auth]);

  return null;
}
