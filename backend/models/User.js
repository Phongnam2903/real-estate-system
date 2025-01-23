const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["tenant", "landlord", "admin"],
    default: "tenant",
  },
  status: { type: String, enum: ["active", "banned"], default: "active" }, // Giá trị default phải thuộc enum
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
