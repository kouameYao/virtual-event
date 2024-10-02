const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
    deletedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", roleSchema);
