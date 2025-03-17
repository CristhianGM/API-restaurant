import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    price: {type: Number, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
    local: {type: mongoose.Schema.Types.ObjectId, ref: "Local"},
    company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
    create: {type: Date},
    active: {type: Boolean},
});

productSchema.pre('save', function(next){
    this.create = new Date();
    next();
})

export const Product = mongoose.model('Product', productSchema);