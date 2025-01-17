import { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type:string,
        required:[true,'Email is required'],
        unique:[true,'Email already exists']
    },
    username:{
        type:string,
        required:[true,'Username is required'],
        unique:[true,'Username already exists']
    },
    image:{
        type:string,
    },
    
});

const User=models.User || model("User",UserSchema);

export default User;
