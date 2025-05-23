"use client";

import React from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { setCookie } from "cookies-next";

const Login = () => {
  // const router = useRouter();

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const user = await signInWithGoogle();
  //     const idToken = await user.getIdToken();
      
  //     // Set cookie with proper options
  //     setCookie("session", idToken, {
  //       maxAge: 30 * 24 * 60 * 60, // 30 days
  //       path: "/",
  //       sameSite: "lax",
  //       secure: process.env.NODE_ENV === "production",
  //     });

  //     // Use Next.js router with replace to prevent back-button issues
  //     router.replace("/");
  //   } catch (error) {
  //     console.error("Error during sign in:", error);
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="justify-center items-center flex">
        <Image src="/title.png" alt="logo" width={300} height={300} />
      </div>
      <button
        onClick={() => {console.log("Google Sign In Clicked")}}
        className="justify-center items-center flex rounded-full bg-white text-black p-4 px-6 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <div>
          <Image src="/google_logo.png" alt="login" width={25} height={25} />
        </div>
        <div className="font-poppins font-light text-lg pl-1 pr-4">
          Sign in with Google
        </div>
      </button>
    </div>
  );
};

export default Login;
