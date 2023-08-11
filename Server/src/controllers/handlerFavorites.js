let myFavorites=[]

 const postFav=(req,res)=>{
    myFavorites.push(req.body)//Mejor manera: ? req.body =>{id, name, status}=req.body
    res.json(myFavorites)      //ojo si viene un id repetido 

}

 const deleteFav=(req, res)=>{
    const eliminar=parseInt(req.params.id)
    myFavorites=myFavorites.filter((characters)=>characters.id !== eliminar)
    res.json(myFavorites)

    // OTRA MANERA
    // const{id}=req.params
    // const filtered=myFavorites.filter(fav=>fav.id !== numbrer(id))
    // myFavorites=filtered
    // res.json(myFavorites)

}
module.exports= {postFav ,deleteFav}



