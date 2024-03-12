"use client";

import { GoogleLogin } from "@react-oauth/google";
import { registerWithGoogle } from "@/actions/auth";

export default function login() {
  return (
    <div className="flex">
      register
      <GoogleLogin
        onSuccess={registerWithGoogle}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
