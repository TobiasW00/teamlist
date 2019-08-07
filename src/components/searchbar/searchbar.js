     
import React,{useContext} from 'react';
import styles from './searchbar.module.css';     
function Searchbar(props)
     {     
      return(
        <div className={styles.searchbarheader}>
          <a href="https://refra.coyocloud.com"><img src="/pics/refranet.jpg" alt="Zurück zum REFRA-Net" /></a>
          <input placeholder="Team suchen.." className={styles.searchbarinput} onChange={(e)=>{console.log(e);}} type="text" vaule="" />
        <img className={styles.refralogoimg} src="/pics/Refratechnik.svg" alt="Exprect the best." />
      </div>);     
      }
export default Searchbar;