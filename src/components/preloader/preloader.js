import React from 'react';
import styles from  './preloader.module.css';
const loader = () =>
{
    return (<div className={styles.outerloader}>
    <div id="innerloader" className={styles.innerloader}> <img alt="Lade Teams." src="/favicon.ico" /><br/>Lade Teams.</div>
    </div>);
}

export default loader;