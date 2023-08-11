// const http = require ("http")
// const getCharById= require("./controllers/getCharById")


// http.createServer((req,res)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*") //Acceso desde cualquier pc para usar la app
//    const{url} = req
//   if(url.includes("/rickandmorty/character")){ //Nos fijamos si la url incluye "characters"
//     const id= Number(url.split("/").pop()) //o at(-1) que trae el ultimo valor 
//                                          //Separamos la url en cada "/", sacamos el ultimo dato {id} y lo pasamos a Numero porque es un str
//     getCharById(res, id)
//   }

//   //     const character=data.find((characters)=>characters.id=== id)

//   //     if(character?.id){
//     //         res.writeHead(200,{"content-type":"application/json"})
//     //         res.end(JSON.stringify(character))
//     //     }else{
//     //         res.writeHead(404,{"content-type":"text/plain"})
//     //         res.end("tu personaje no fue encontrado")
//     //     }
//     //     return
//     // }
// }).listen(3001, "localhost")


const express = require('express');
const server = express();
const routes=require('./routes')
const PORT = 3001;


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
server.use(express.json())
server.use("/rickandmorty", routes)

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

