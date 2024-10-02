const mongoose = require("mongoose");
const { Schema } = mongoose;

const userEventSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    isReminderSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserEvent", userEventSchema);
