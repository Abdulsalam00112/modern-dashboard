import React from 'react'

import styles from "../Styles/content.module.css"
import ContentHeader from './ContentHeader';
import TeacherList from './TeacherList';

import Card from './Card';
const Content = () => {
  return (
    <div className={styles.content}>
         <ContentHeader/>
         <Card/>
         <TeacherList/>
    </div>
  )
}

export default Content
