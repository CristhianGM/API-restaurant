import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    local: {type: mongoose.Schema.Types.ObjectId, ref: "Local"},
    description: {type: String, required: true},
    active: {type: Boolean},
});

companySchema.pre('save', function(next){
    this.create = new Date();
    next();
});

companySchema.methods.toJSON = function() {
    const {__v, _id, ...company} = this.toObject();
    company.uid = _id;
    return company;
}

export const Company = mongoose.model('Company', companySchema);