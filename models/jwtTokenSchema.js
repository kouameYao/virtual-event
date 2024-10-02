const mongoose = require("mongoose");
const { Schema } = mongoose;

const jwtTokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  token: { type: String, required: true },
  isRevoked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JwtToken", jwtTokenSchema);
