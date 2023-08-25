import Card from '../tarjeta/Card';
import { connect, useDispatch } from "react-redux"
import styles from "../Favorites/Favorite.module.css"
import {filterFav, orderFav} from "../../redux/actions"
import { useState } from 'react';

export function Favorites({myfavorites}){

  const [aux,setAux]=useState(false)

  const dispatch= useDispatch()

  const handleOrder=(e)=>{
    dispatch(orderFav(e.target.value))
    setAux(!aux)
  }
  const handleFilter=(e)=>{
    dispatch(filterFav(e.target.value))
  }

  return (
    <> 
    <select className={styles.option} onChange={handleOrder}>
      <option value="A"> Ascendente</option>
      <option value="D"> Descendente</option>
    </select>

    <select className={styles.option} onChange={handleFilter}>
       <option value="All"> All </option>
      <option value="Male"> Male</option>
      <option value="Female"> Female</option>
      <option value="Genderless"> Genderless</option>
      <option value="Unknown"> Unknown</option>
     
    </select>

    <div className={styles.FlexContainer}>{
      myfavorites.map((fav)=>(
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
    }</div>
    </>
  )
}

function mapStateToProps(isFav){
    return{
        myfavorites: isFav.myfavorites
    }
}

export default connect(mapStateToProps)(Favorites)



