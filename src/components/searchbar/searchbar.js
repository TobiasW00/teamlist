     
import React,{useEffect,useRef} from 'react';
import styles from './searchbar.module.css';     
function Searchbar(props)
     { 
       const searchRef = useRef();
       useEffect(()=>
       {
        searchRef.current.focus();
      },[]);


      return(
        <div className={styles.searchbarheader}>
          <a href="https://refra.coyocloud.com"><img src="/pics/refranet.jpg" alt="Zurück zum REFRA-Net" /></a>
          <input ref={searchRef} placeholder="Team suchen.." className={styles.searchbarinput} onChange={(e)=>{props.setSearchTerm(e.target.value)}} type="text" vaule="" />
        <img className={styles.refralogoimg} src="/pics/Refratechnik.svg" alt="Exprect the best." />
      </div>);     
      }
export default Searchbar;