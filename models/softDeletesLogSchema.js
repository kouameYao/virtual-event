const mongoose = require("mongoose");
const { Schema } = mongoose;

const softDeletesLogSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: "Event" },
  deletedAt: { type: Date, default: Date.now },
  deletedBy: { type: Schema.Types.ObjectId, ref: "User" }, // Référence à l'utilisateur ayant effectué la suppression
});

module.exports = mongoose.model("SoftDeletesLog", softDeletesLogSchema);
