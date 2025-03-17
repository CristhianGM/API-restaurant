import mongoose from "mongoose";

const localSchema = new mongoose.Schema({
    company: {type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    create: {type: Date},
    active: {type: Boolean},
    company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
});

localSchema.pre('save', function(next){
    this.create = new Date();
    next();
});
localSchema.methods.toJSON = function() {
    const {__v, _id, ...local} = this.toObject();
    return local;
}

export const Local = mongoose.model('Local', localSchema);