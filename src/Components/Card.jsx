import React from "react";
import styles from "../Styles/content.module.css"
import { BiLogoHtml5, BiLogoAndroid, BiBuilding,  } from "react-icons/bi";
const courses = [
  {
    title: "web development",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App development",
    duration: "2 hours",
    icon: <BiLogoAndroid />,
  },
  {
    title: "UX & UI",
    duration: "2 hours",
    icon: <BiBuilding />,
  },
];

const Card = () => {
  return <div className={styles.container}> 
{courses.map((item)=>(
    <div className={styles.card}>
        <div className={styles.cardCover}>{item.icon}</div>
        <div className={styles.cardTitle}><h2>{item.title}</h2></div>
        
    </div>
))}
  </div>;
};

export default Card;
