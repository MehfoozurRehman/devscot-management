"use server";

const { cookies } = require("next/headers");

import User from "@/models/user.js";
import { jwtDecode } from "jwt-decode";

export const registerWithGoogle = async (credentialResponse) => {
  try {
    const cookie = cookies();
    const decodedResponse = jwtDecode(credentialResponse.credential);
    const user = await User.findOne({ googleSub: decodedResponse.sub });

    if (user) {
      cookie.set("token", user.sub, {
        path: "/",
      });

      console.log("User already registered");
      return;
    }

    const newUser = new User({
      googleData: decodedResponse,
      googleSub: decodedResponse.sub,
    });

    await newUser.save();

    cookie.set("token", newUser.sub, {
      path: "/",
    });

    console.log("User registered successfully");
  } catch (e) {
    console.log(e);
  }
};

export const loginWithGoogle = async (credentialResponse) => {
  try {
    const cookie = cookies();
    const decodedResponse = jwtDecode(credentialResponse.credential);
    const user = await User.findOne({ googleSub: decodedResponse.sub });

    if (!user) {
      console.log("User not registered");
      return;
    }

    cookie.set("token", user.sub, {
      path: "/",
    });

    console.log("User logged in successfully");
  } catch (e) {
    console.log(e);
  }
};
