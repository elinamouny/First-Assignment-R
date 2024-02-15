import React from 'react'
import style from './Home.module.css'
import img from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <section className={`${style.backGround} d-flex align-items-center justify-content-center pt-5 pb-5 position-relative min-vh-100`}>
      <div className="text-center">
        <img src={img} className='w-50 mb-4' alt="" />
        <h1 className={`text-white text-uppercase fw-bold pb-4`}>start framework</h1>
        <div className={`${style.border} m-auto`}>
          <div className={`position-relative`}>
            <i className={`fa-solid fa-star text-white ${style.icon} rounded-circle d-flex align-items-center justify-content-center`}></i>
          </div>
        </div>
        <ul className={`list-unstyled pt-5 text-white`}>
          <li>Graphic Artist - Web Designer - Illustrator</li>
        </ul>
      </div>
    </section>
  )
}
