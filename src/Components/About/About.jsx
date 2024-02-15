import React from 'react'
import Heading from '../Global/Heading'

export default function About() {
  return (
    <>
      <section className="bg-color d-flex align-items-center justify-content-center position-relative min-vh-100">
        <div className='container'>
          <div className="text-center text-white">
            <Heading text="about component" textColor="#FFF" iconBackGround="#1abc9c" />
          </div>
          <div className=" text-white pt-4">
            <div className="row">
              <div className="col-lg-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-lg-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
