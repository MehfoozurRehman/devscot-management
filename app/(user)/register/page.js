"use client";
import "@/styles/login.css";

import { GoogleLogin } from "@react-oauth/google";
import { registerWithGoogle } from "@/actions/auth";
import Link from "next/link";

export default function Register() {
  return (
    <div className="container__main">
      <div className="container__main__login">
        <div className="container__main__login__heading">Register</div>
        <div className="container__main__login__text">
          Register your account.
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
          Already have an account? <Link href={"login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
