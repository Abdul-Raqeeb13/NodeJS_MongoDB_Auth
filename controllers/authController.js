const userValidator = require('../validator/userValidate')
const authModel = require('../models/authModel')
const {findUser , createUser} = require('../models/authModel')
exports.signup= async (req,res)=>{
    // console.log("test");
    try{
        const {error} =  await userValidator.validate(req.body)
       
        if(error){
            res.send({
                error : error.details[0].message
            })
        }
        else{
            const {email , password, userType} = req.body
            const checkUser = await authModel.findUser({email : email})
            // console.log(checkUser);
            if(checkUser){
                res.status(400).send({
                    message : "Email already exist",
                    status : false
                })
            }
            else{

                const user =  await createUser(req.body)
                await user.save()
                res.status(200).send({
                    message : "User account created successfully" 
                })
            }
            

          
        }
       
        
    }
    catch(e){
        res.send(e)   
    }
    
}