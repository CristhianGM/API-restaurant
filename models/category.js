import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    create: {type: Date},
    active: {type: Boolean},
});

categorySchema.pre('save', function(next){
    this.create = new Date();
    next();
});

export const Category = mongoose.model('Category', categorySchema);