import React, { ReactNode } from 'react'
import styles from '../styles/layout.module.css'

interface Props {
  children?: ReactNode
}

export const Footer = () => {
  return (
    <>
      <div>{'2022 > georgep9 > web3-frontend'}</div>
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
