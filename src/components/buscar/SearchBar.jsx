import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div >
         <input className= {"styles.search"} type='search' />
         <button className={styles.btn} onClick={props.onSearch}>BUSCAR</button>
      </div>
   );
}
