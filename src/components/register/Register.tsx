import React, {useState,useRef} from 'react'
import './register.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'
import emailjs from 'emailjs-com'


    let name: String;
    let email: String;
    let pass: String;
    let conf: String;
   

const Register = () => {
  
  
  const form = useRef();
  const Register = (e) => {
    e.preventDefault();
   
      name= e.target.name.value;
      email= e.target.email.value;
      pass= e.target.password.value;
      conf= e.target.password1.value;
    
    ///console.log(name,' ',email, ' ', pass,' ', conf);
    if (name !== null && email !== null && (pass === conf)) {
    e.target.reset();
    }
  };




  return (
    <section id='contact'>
      <h5>Become A Client</h5>
      <h2>Register Your Account</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact-icon'/>
            <h4>Our Email</h4>
            <h5>smthstore@gmail.com</h5>
            <a href="mailto:smthstore@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaTelegramPlane className='contact-icon'/>
            <h4>Telegram</h4>
            <h5>@smthstore</h5>
            <a href="https://t.me/smthstore" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <SiUpwork className='contact-icon'/>
            <h4>UpWork</h4>
            <h5>Vensan Drot</h5>
            <a href="https://www.upwork.com/freelancers/~013d38b18a0d01544c" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form}  onSubmit={Register}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <input type="password" name='password' placeholder='Your Password' required/>
          <input type="password" name='password1' placeholder='Confirm Your Password' required/>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Register