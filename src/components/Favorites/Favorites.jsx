import Card from '../tarjeta/Card';
import { connect } from "react-redux"
import styles from "../Favorites/Favorite.module.css"

export function Favorites({myfavorites}){
    return (
        <div className={styles.FlexContainer}>{
          myfavorites.map(fav=>(
            <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            />
          ))
        }</div>)
}

function mapStateToProps(isFav){
    return{
        myfavorites: isFav.myfavorites
    }
}

export default connect(mapStateToProps)(Favorites)

