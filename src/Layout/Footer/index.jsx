import './index.css'
import React from 'react'
import {
  secondFootElem,
  thirdFootElem,
  fourthFootElem,
} from '../../utils/constants'

const Footer = (styleFooter) => {
  return (
    <div className="Footer" style={styleFooter}>
      <div className="firstFooter">
        <h1>
          <i className="fa fa-light fa-paw fa-2xl"></i>
          DogFood
        </h1>
        <p>
          <i className="fa fa-light fa-shield-dog fa-xl"></i>
          <span>"Интернет-магазин DogFood.ru"</span>
        </p>
      </div>
      <nav className="secondFooter">
        <ul>
          {secondFootElem.map((elemLink) => {
            return (
              <li key={elemLink.title}>
                <a href={elemLink.href}>{elemLink.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className="thirdFooter">
        <ul>
          {thirdFootElem.map((elemLink) => {
            return (
              <li key={elemLink.title}>
                <a href={elemLink.href}>{elemLink.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      <ul className="fourthFooter">
        <li className="BoldText">Мы на связи</li>
        <li className="BoldText">8 (999) 00-00-00</li>
        <li>
          <a href="">dogfood.ru@gmail.com</a>
        </li>
        <li className="social">
          {fourthFootElem.map((elemLink) => {
            return (
              <div key={elemLink.iClName}>
                <i className={elemLink.iClName}></i>
              </div>
            )
          })}
        </li>
      </ul>
    </div>
  )
}

export const MemoFooter = React.memo(Footer)
