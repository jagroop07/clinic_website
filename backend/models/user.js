import mongoose, { Schema } from "mongoose";

//email, password , role

export default mongoose.models.Users || mongoose.model('Users', new Schema({
    email: String,
    password: String,
    role: String   // 1 for admin and 2 for user
}, {
    timestamps: true
}));
