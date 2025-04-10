'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useAuth } from "@/context/AuthContext";
import { ProfileSkeleton } from "@/components/profile-skeleton";

export default function Profile() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth);
      
      // Clear the session cookie
      deleteCookie('session', {
        path: '/',
      });

      // Use Next.js router to navigate
      router.replace('/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="justify-self-center">
      <div className="rounded p-4 m-3">
        <Avatar className="w-44 h-44">
          <AvatarImage src={user.photoURL || undefined} />
          <AvatarFallback>
            {user.displayName?.charAt(0) || user.email?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="pt-4 text-center font-bold text-lg">
          <span>{user.displayName || 'User'}</span>
        </div>
        <div className="pt-2 text-center text-[10px]">
          <span>{user.email}</span>
        </div>
        <div className="mt-6 p-3 px-5 text-center bg-appbar-blue rounded-full">
          <button 
            onClick={handleLogout}
            className="font-semibold text-xs"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
