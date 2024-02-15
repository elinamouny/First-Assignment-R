import React from 'react'

import style from './Portfolio.module.css'

export default function Item({ img,index }) {


  


  return (
    <>
      <div className="col-lg-4">
        <div data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`} className={`image position-relative overflow-hidden ${style.cursor}`}>
          <img  className='w-100 rounded' src={img} alt="" />
          <div className={`${style.overlay} w-100 h-100 position-absolute rounded d-flex align-items-center justify-content-center`}>
            <i className={`fa-solid fa-plus ${style.plusIcon} text-white`}></i>
            
          </div>
        </div>
      </div>
      <div className="modal fade" id={`exampleModal${index}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content align-items-center">
            <div className="modal-body">
              <img className='w-100' src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
