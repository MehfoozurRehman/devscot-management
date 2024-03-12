"use client";
import { GoogleLogin } from "@react-oauth/google";
import "../../styles/register.css";

function page() {
  return (
    <div className="container__main">
      <div className="container__main__register">
        <h2>Register</h2>
        <div className="container__main__register__text">
          You can connect your google account to this user account to login with
          google.
        </div>
        <GoogleLogin
          theme="filled_black"
          shape="pill"
          size="large"
          auto_select={false}
          onSuccess={() => {
            console.log("success");
          }}
          onError={() =>
            toast("Something went wrong", {
              type: "error",
            })
          }
        />
      </div>
    </div>
  );
}

export default page;
