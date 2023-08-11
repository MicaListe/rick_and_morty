const users= require("../utils/users")

const login = (req, res)=>{
    const{email, password}=req.query
    let access=false

    users.forEach(users=>{
        if(users.email === email && users.password === password){
            access=true
        }
    })
    res.json({access})
    
    
    if(access){
        res.status(200).json({access:true})
    }else{
         res.status(200).json({access:false})
    }
}


module.exports= login