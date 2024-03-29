import React from 'react'
import styles from './Wrapper.module.scss'

const Wrapper = ({ children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Wrapper