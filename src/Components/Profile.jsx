import React from "react";
import styles from "../Styles/profile.module.css";
import ProfileHeader from "./ProfileHeader";
import userImage from "../../assets/Image.jpg";
import { BiBook } from "react-icons/bi";

const courses = [
  {
    title: "HTML CSS",
    duration: "2 hours",
    icon: <BiBook />,
  },
  {
    title: "JavaScript",
    duration: "2 hours",
    icon: <BiBook />,
  },
  {
    title: "React",
    duration: "2 hours",
    icon: <BiBook />,
  },
];
const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <div className={styles.userProfile}>
        <div className={styles.userDetail}>
          <img src={userImage} width={250} alt="" />
          <h3 className={styles.userName}>Jhone Doe</h3>
          <span className={styles.profession}>Teacher</span>
        </div>

        <div className={styles.userCourses}>
          {courses.map((courses) => (
            <div className={styles.courses}>
              <div className={styles.courseDetail}>
                <div className={styles.courseCover}>{courses.icon}</div>
              </div>
              <div className={styles.courseName}>
                <h5 className={styles.title}>{courses.title}</h5>
                <span className={styles.duration}>{courses.duration}</span>
              </div>
              <div className={styles.action}>:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
