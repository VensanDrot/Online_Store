import React, {useState,useRef} from 'react'
import './register.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'
import emailjs from 'emailjs-com'


    

const Register = () => {
  const form = useRef();
  const [name, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  
  
  const Registerer = (e) => {
    e.preventDefault();
 
    setUser(e.target.name.value);
    setEmail(e.target.email.value);
    setPass(e.target.password.value);
    setConf(e.target.password1.value);


    // let name= e.target.name.value;
    // let email= e.target.email.value;
    // let pass= e.target.password.value;
    // let conf= e.target.password1.value;
    
    console.log(name,' ',email, ' ', pass,' ', conf);
    if (name !== null && email !== null && (pass === conf)) {
     
     //e.target.reset();
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
        <form  onSubmit={Registerer}>

          <input onChange={(e)=> {
            setUser( e.target.value );
          }} value={name} type="text" name='name' placeholder='Your Full Name' required/>

          <input onChange={(e)=> {
            setEmail( e.target.value );
          }} value={email}
           type="email" name='email' placeholder='Your Email' required/>

          <input onChange={(e)=> {
            setPass( e.target.value );
          }} value={pass}
           type="password" name='password' placeholder='Your Password' required/>
          
          <input onChange={(e)=> {
            setConf( e.target.value );
          }} value={conf}
           type="password" name='password1' placeholder='Confirm Your Password' required/>
           
          <button type='submit' className='btn btn-primary' >Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Register