// let myFavorites=[]

//  const postFav=(req,res)=>{
//     myFavorites.push(req.body)
//     res.json(myFavorites)     

// }

//  const deleteFav=(req, res)=>{
//     const eliminar=parseInt(req.params.id)
//     myFavorites=myFavorites.filter((characters)=>characters.id !== eliminar)
//     res.json(myFavorites)

//     // OTRA MANERA
//     // const{id}=req.params
//     // const filtered=myFavorites.filter(fav=>fav.id !== numbrer(id))
//     // myFavorites=filtered
//     // res.json(myFavorites)

// }

module.exports= {postFav ,deleteFav}


