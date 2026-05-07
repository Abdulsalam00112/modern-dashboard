import React from "react";
import styles from "../Styles/profile.module.css";
import { BiEdit } from "react-icons/bi";
const ProfileHeader = () => {
  return (
    <div>
      <div className={styles.profileHeader}>
        <h2 className={styles.headerTitle}>Profile</h2>
        <div className={styles.edit}>
          <BiEdit className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
