import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={`${style.backGroundColor} text-center pt-5 pb-5`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card border-0 bg-transparent text-white">
                <h3 className='text-uppercase'>location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card border-0 bg-transparent text-white">
                <h3 className='text-uppercase text-center mb-3'>around the web</h3>
                <ul className="links list-unstyled d-flex align-items-center justify-content-center">
                  <li className={`${style.linksIcon} me-3 rounded-circle d-flex align-items-center justify-content-center`}>
                    <i className="fa-brands fa-facebook fa-xl"></i>
                  </li>

                  <li className={`${style.linksIcon} me-3 rounded-circle d-flex align-items-center justify-content-center`}>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                  </li>

                  <li className={`${style.linksIcon} me-3 rounded-circle d-flex align-items-center justify-content-center`}>
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                  </li>

                  <li className={`${style.linksIcon} rounded-circle d-flex align-items-center justify-content-center`}>
                    <i className="fa-solid fa-globe fa-xl"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 bg-transparent text-white">
                <h3 className='text-uppercase'>about freelancer</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <div className={`copy-right text-center py-4 text-white ${style.backGroundColorFooter}`}>
        <p className='m-0'>Copyright &copy; Your Website 2021</p>
      </div>
    </>


  )
}
