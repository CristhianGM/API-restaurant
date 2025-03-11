import { Schema, model } from "mongoose";
//Investicar JSON SCHEMA
const userSchema = new Schema({ 
    create: {type: Date},
    name: {type: String},
    email: {type: String, unique: true},
    active: {type: Boolean},
    rol: {type: String, enum: ["ADMIN", "COOK", "WAITER", "CASHIER"]}, //TODO: Manejo de roles: admin, cook, waiter, cashier
    password: {type: String},
});

userSchema.pre('save', function(next) {
    this.create = new Date();
    next();
});

userSchema.methods.toJSON = function() {
    const {__v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

export const User = model('User', userSchema);