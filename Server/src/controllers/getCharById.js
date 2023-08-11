// const axios= require("axios")

// const getCharById=((res,id)=>{
// axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data})=>{
//         const characterInfo={
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species:data.species,
//             origin: data.origin,
//             image:data.image,
//             status:data.status}
//         res.writeHead(200,{"content-type":"application.json"})
//         res.end(JSON.stringify(characterInfo))
//     })
//     .catch((error)=>{
//         res.writeHead(500,{"content-type":"text/plain"})
//         res.end(error.message)    
//     })
// })

const axios=require("axios")
const URL="http://rickandmortyapi.com/api/character/"

const getCharById=((req,res)=>{
    const{id}=req.params
    axios(`${URL}${id}`).then(({data})=>{
        if({id}){
            res.json({id:id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status})
        }else{
            res.end(404,"Not fount")
        }
        // if (data.error) {
        //     res.status(404).json({ message: "Not found" });
        // } else {
        //     const { id, status, name, species, origin, image, gender } = data;
        //     res.json({ id, status, name, species, origin, image, gender });
        // }
    }) 
    .catch((error)=>{
        console.error("error al obtener la informacion del personaje: ",error.message)
        res.end(500,error.message)
    })
})
module.exports= getCharById


