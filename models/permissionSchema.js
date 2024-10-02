const mongoose = require("mongoose");
const { Schema } = mongoose;

const permissionSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  roles: [{ type: Schema.Types.ObjectId, ref: "Role" }], // Tableau de rôles
  deletedAt: { type: Date, default: null },
  deletedBy: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Permission", permissionSchema);
