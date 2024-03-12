"use client";

import { GoogleLogin } from "@react-oauth/google";

export default function login() {
  return (
    <div className="flex">
      login
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
