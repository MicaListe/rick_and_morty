const {Favorite}=require("../DB_connection")

const deleteFav= async(req, res)=>{
    try{
        const{id}= req.params

        //Elimina el id de favoritos 
        await Favorite.destroy({
            where:{id}
        })

        //Trae a todos los favoritos
        const todosLosFav=await Favorite.findAll()
        return res.status(200).json(todosLosFav)
        
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports= deleteFav;