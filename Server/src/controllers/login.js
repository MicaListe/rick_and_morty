const users= require("../utils/users")

// const login = (req, res)=>{
//     const{email, password}=req.query
//     let access=false

//     users.forEach(user=>{
//         if(user.email === email && user.password === password){
//             access=true
//         }
//     })
//     res.json({access})
    
    
//     if(access){
//         res.status(200).json({access:true})
//     }else{
//          res.status(200).json({access:false})
//     }
// }


// module.exports= login
// const login = (req, res) => {
//     const { email, password } = req.query;
//     let access = false;

//     users.forEach(user => {
//         if (user.email === email && user.password === password) {
//             access = true;
//         }
//     })

//     if (access) {
//         return res.status(200).json({ access: true });
//     } else {
//         return res.status(200).json({ access: false });
//     }
// };

const {User}=require("../DB_connection")

const login = async(req, res)=>{
    try{
        const{email, password}= req.query

        //Si no hay email o password
        if(!email || !password){
            return res.status(400).json({message:"Faltan datos"})    
        }

        //Busca el email
        const user = await User.findOne({
            where:{email} //Donde email:email
        })

        //Si no encuentra al usuario
        if(!user){
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        
        //Si la contraseña es invalida
        if(user.password !== password){
            return res.status(403).json({message:"Contraseña incorrecta"}) 
        }
        return res.status(200).json({access:true})

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = login;






