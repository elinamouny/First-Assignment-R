import React from 'react'
import style from './Heading.module.css'

export default function Heading({ text, textColor, iconBackGround }) {
  return (
    <>
      <h1 style={{ color: textColor }} className={`text-uppercase fw-bold pb-3`}>{text}</h1>
      <div style={{ borderColor: textColor }} className={`${style.border} m-auto `}>
        <div className={`position-relative`}>
          <i style={{backgroundColor: iconBackGround, color: textColor}} className={`fa-solid fa-star ${style.icon} rounded-circle d-flex align-items-center justify-content-center`}></i>
        </div>
      </div >
    </>
  )
}
