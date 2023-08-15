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

const axios = require("axios");
 const URL = "https://rickandmortyapi.com/api/character";

const getCharById=async(req, res)=>{
    try{const {id}=req.params
    const {data}=await axios(`${URL}/${id}`)
    if({id}){
        res.json({id:id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status})
    }else{
        res.end(404,"Not fount")
    }

    }catch(error){
        res.status(500).json({ error: error.message });
        
    }
    
}
module.exports = getCharById;
