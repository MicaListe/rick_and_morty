import { useState } from "react"
import styles from "./Forms.module.css"
import validation from "./validation"

export default function Form({login}){

    const [userData, setUserData]= useState({
        email: "",
        password: ""
    })

  
    const [errors, setErrors]=useState({
        email: "",
        password: ""
    })


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validation({ ...userData, [property]: value }));
        setUserData({ ...userData, [property]: value });
    };

    
    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p>Login</p>
            <div className={styles.group}>
                <label className={styles.lebalEmail}></label>
                <input className={styles.mainInput} required="true" placeholder="Email" type="text" name="email"  value={userData.email} onChange={handleChange}></input> 
                <span className={styles.highlightSpan}></span>
                <p className={styles.p}>
                    {errors.email}
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.group}>
                <label className={styles.lebalPassword}></label>
                <input className={styles.main} placeholder="Password" type="password" name="password" value={userData.password} onChange={handleChange}></input> 
                <span className={styles.highlightSpan}></span>
                <p className={styles.p}>{errors.password}</p>
            </div>
            </div>
            <button className={styles.submit} type="submit">Login</button>
        </form>
        
    )
}

