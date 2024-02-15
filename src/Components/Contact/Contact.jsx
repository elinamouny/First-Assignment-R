import React, { useState } from 'react'
import Heading from '../Global/Heading'
import Styles from './Contact.module.css'

export default function Contact() {
  const [inputText, setInputText] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  return (
    <section className='pt-5 pb-5'>
      <div className="container">
        <div className="text-center">
          <Heading text="contact section" textColor="#2c3e50" iconBackGround="#FFF" />
          <form className={`${Styles.form} w-50 mx-auto py-5`}>
            <div className="userName mb-2">
              <input className='form-control' type="text" placeholder='userName' onChange={(e) => {
                setInputText(e.target.value)
              }
              } />
              <span className={`text-start ${Styles.label} ${inputText !== "" ? Styles.labelOne : ""} mb-0 d-block`}>userName:</span>
            </div>




            <div className="userEmail mb-2">
              <input className='form-control' type="text" placeholder='userAge' onChange={(e) => {
                setInputAge(e.target.value)
              }
              } />
              <span className={`text-start ${Styles.label} ${inputAge !== "" ? Styles.labelOne : ""} mb-0 d-block`}>userAge:</span>
            </div>



            <div className="userEmail mb-2">
              <input className='form-control' type="email" placeholder='userEmail' onChange={(e) => {
                setInputEmail(e.target.value)
              }
              } />
              <span className={`text-start ${Styles.label} ${inputEmail !== "" ? Styles.labelOne : ""} mb-0 d-block`}>userEmail:</span>
            </div>


            <div className="userEmail mb-2">
              <input className='form-control' type="password" placeholder='userPassword' onChange={(e) => {
                setInputPassword(e.target.value)
              }
              } />
              <span className={`text-start ${Styles.label} ${inputPassword !== "" ? Styles.labelOne : ""} mb-0 d-block`}>userPassword:</span>
            </div>


            <button onClick={(e) => e.preventDefault()} type='submit' className={`btn ${Styles.bgColor} text-start text-white d-flex`}>Send Message</button>
          </form>
        </div>
      </div>
    </section>

  )
}
