import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import React from 'react'
import { navLinkMass } from '../../utils/constants'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shopName}>
        <h1>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/products"
          >
            <i className="fa fa-light fa-paw fa-2xl"></i>
            <span className={styles.DogFood}>DogFood</span>
          </NavLink>
        </h1>
      </div>
      {/* <div className="search"> */}
      <input
        type="text"
        id="product"
        className={styles.search}
        placeholder="Введите наименование продукта"
      />
      {/* </div> */}
      <nav className={styles.navigationWrapper}>
        <ul className={styles.navigation}>
          {navLinkMass.map((elemLink) => {
            return (
              <li key={elemLink.pValue}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  to={elemLink.to}
                >
                  <i className={elemLink.iClName}>
                    <p className={styles.navText}>{elemLink.pValue}</p>
                  </i>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export const MemoHeader = React.memo(Header)
