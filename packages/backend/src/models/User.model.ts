import { Schema, model } from "mongoose";
export interface UserSchema {
  username: string;
  password: string;
  isValidPassword: any;
}

const UserSchema = new Schema<UserSchema>({
  username: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
});

const User = model<UserSchema>("User", UserSchema);
export default User;
