const mongoose = require("mongoose");
const { Schema } = mongoose;

const rolePermissionSchema = new Schema({
  role: { type: Schema.Types.ObjectId, ref: "Role" },
  permission: { type: Schema.Types.ObjectId, ref: "Permission" },
});

module.exports = mongoose.model("RolePermission", rolePermissionSchema);
