const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlenth: 2
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email is alraedy difined"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true
    },
    work:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})

const Employe = new mongoose.model('Employee',employeeSchema);
module.exports = Employe;