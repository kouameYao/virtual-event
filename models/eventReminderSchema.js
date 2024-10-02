const mongoose = require("mongoose");
const { Schema } = mongoose;

const twoFactorAuthSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    code: { type: String, required: true }, // Code d'authentification à deux facteurs
    expiresAt: { type: Date, required: true }, // Date d'expiration du code
  },
  { timestamps: true }
);

module.exports = mongoose.model("TwoFactorAuth", twoFactorAuthSchema);
