const {User} = require("../DB_connection") //Ver si esta bien importado

const postUser = async(req, res)=>{
    try{
        //Trae de body los parametros email/password
        const{email, password} = req.body

        //Si no hay email ni password
        if(email !== "" && password !== ""){
           return res.status(400).json({error:"Faltan datos"})
        }   

        // Guarda los datos dentro del modelo User
        const [user, created] = await User.findOrCreate({ //Si encuentra el mail te devuelve un bool y si esta creado tambien
            where: {email},
            //where:{email,password}
            default: {password}
        })
        // return res.status(201).json(user)

        //Si ya esta creado
        if(created){
           return res.status(201).json(user)
        }
        return res.status(400).json({message:"El usuario ya existe"})


    }catch(error){
        res.status(500).json({error:error.message})
    }

}

module.exports=postUser;