const {Favorite}= require("../DB_connection")

const postFav = async(req, res)=>{
    try{
        const {name, origin, status, image, species, gender}= req.body
        
        //if([name,origin,status,image,gender,species].every())//Valida que cada elemento cumpla con una condicion, por ejemplo, sea tru; y devuelve lo que recibe (un bool)
        
        //Si las propiedades no existen
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({message:"Faltan datos"})
        }

        //Busca si existe sino lo crea
        const fav = await Favorite.findOrCreate({
            where:{name, origin, status, image, species, gender}
        })

        //Busca a los personajes favoritos
        const todosFav = await Favorite.findAll()
        return res.status(200).json(todosFav)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}
module.exports= postFav;