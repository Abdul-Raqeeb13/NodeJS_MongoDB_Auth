const mongoose = require("mongoose")
const { model } = require("mongoose")

const authSchema = mongoose.Schema({
    email : {
        type:String,
        required : true
    } ,
    password : {
        type:String,
        required : true
    } ,
    userType : {
        type:String,
        required : true, 
        enum : ["user","admin"]
    } ,

    isVerify : {
        type : Boolean,
        default : false
    },

    isComplete : {
        type : Boolean,
        default : false
    }

})

const authModel = model('auth' , authSchema)

// to create user account
exports.createUser = (obj)=> authModel.create(obj)

// to check if email already exist
exports.findUser = (query) => authModel.findOne(query) 
