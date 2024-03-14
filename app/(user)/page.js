"use client";
import "@/styles/login.css";

import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";

export default function login() {
  return (
    <div className="container__main">
      <div className="container__main__login">
        <div className="container__main__login__heading">Login</div>
        <div className="container__main__login__text">
          Login in to your account if you have an account.
        </div>
        <div className="container__main__login__google">
          <GoogleLogin
            shape="pill"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="container__main__login__text">
          Don't have an account? <Link href={"register"}>Register</Link>
        </div>
      </div>
    </div>
  );
}
