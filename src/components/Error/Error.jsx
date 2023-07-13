// import { useEffect } from "react";
// export default function Error(){
//     useEffect(() => {
//         window.alert('ERROR 404, la página buscada es incorrecta');
//      }, []);
//      return null
// }

export default function Error(){
    return(
    <div>
        <h1>ERROR 404</h1>
        <p>
        La pagina ingresada no existe
        </p>
    </div>
    )
   
}