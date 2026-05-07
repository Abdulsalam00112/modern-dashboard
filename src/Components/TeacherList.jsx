import React from "react";
import styles from "../Styles/teacherList.module.css";
import Image from "../../assets/Image.jpg";
const teachers = [
  {
    image: Image,
    name: "Prof. Jhone Doe",
    duration: "20 hours lesson",
    cost: "100",
  },
  {
    image: Image,
    name: "Prof. Jhone Doe",
    duration: "20 hours lesson",
    cost: "100",
  },
  {
    image: Image,
    name: "Prof. Jhone Doe",
    duration: "20 hours lesson",
    cost: "100",
  },
  {
    image: Image,
    name: "Prof. Jhone Doe",
    duration: "20 hours lesson",
    cost: "100",
  },
];

const TeacherList = () => {
  return (
    <div className={styles.teacherList}>
      <div className={styles.listHeader}>
        <h2>Teachers</h2>
        <select name="" id="">
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Yoruba">Yoruba</option>
        </select>
      </div>
      <div className={styles.listContainer}>
        {teachers.map((teacher) => (
          <div className={styles.list}>
            <div className={styles.teacherDetail}>
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>${teacher.cost}/hr.</span>
            <span className={styles.teacherTodo}>:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
