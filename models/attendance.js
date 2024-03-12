import { Schema, model, models } from "mongoose";

const attendanceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Attendance || model("Attendance", attendanceSchema);
