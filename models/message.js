import { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    message: {
      type: String,
      required: true,
    },
    replyTo: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Message || model("Message", messageSchema);
