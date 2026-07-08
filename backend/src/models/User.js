import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerrkId: {
        type: String,
        requiree: true,
        unique: true
    },
    email: {
        type: String,
        requiree: true,
        unique: true
    },
    fullName: {
        type: String,
        requiree: true,
        unique: true
    },
    profilePic: {
        type: String,
        default:'',
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;