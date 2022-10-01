import React, { ReactNode } from 'react'
import styles from '../styles/layout.module.css'

interface Props {
  children?: ReactNode
}

export const Footer = () => {
  return (
    <>
      <div>{'<web3-frontend> (C) 2022 georgep9'}</div>
    </>
  )
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
      <div className={styles.container}>
        <Footer />
      </div>
    </>
  )
}

export default Layout
