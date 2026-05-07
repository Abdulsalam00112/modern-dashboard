import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from "react-icons/bi";

import styles from "../Styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <BiBookAlt className={styles.logoIcon}/>
        <h2>EduFlex</h2>
      </div>

      <div className={styles.menuList}>
        <a href="a" className={`${styles.item} ${styles.active}`}>
          <BiHome className={styles.icon}/>
          Dashboard
        </a>

        <a href="a" className={styles.item}>
          <BiTask className={styles.icon}/> 
          Assignment
        </a>

        <a href="a" className={styles.item}>
          <BiStats className={styles.icon}/>
          Stats
        </a>

        <a href="a" className={styles.item}>
          <BiSolidReport className={styles.icon}/>
          Report
        </a>

        <a href="a" className={styles.item}>
          <BiMessage className={styles.icon}/>
          Message
        </a>

        <a href="a" className={styles.item}>
          <BiHelpCircle className={styles.icon}/>
          Help
        </a>
      </div>
    </div>
  );
};

export default Sidebar;