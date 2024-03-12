import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    googleData: {
      type: Object,
      required: true,
    },
    googleSub: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", userSchema);
