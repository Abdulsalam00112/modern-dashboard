import React from 'react'
import styles from '../Styles/content.module.css'
import {BiNotification, BiSearch} from 'react-icons/bi'
const ContentHeader = () => {
  return (
    <div className={styles.contentHeader}>
   <h1 className={styles.headerTitle}>Dashboard</h1>
   <div className={styles.headerActivity}>
    <div className={styles.searchBox}>
 <input type="text" placeholder='Search anything here'/>
 <BiSearch className={styles.icon}/>
    </div>
    <div className={styles.notify}>
        <BiNotification className={styles.icon}/>
    </div>
   </div>

    </div>
  )
}

export default ContentHeader
