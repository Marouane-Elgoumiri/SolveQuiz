const mongoose = require('mongoose').default;
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: '',
    }
},{
    timestamps: true,
});
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;