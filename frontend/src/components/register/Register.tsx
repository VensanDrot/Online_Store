import React, { useState, useRef } from "react";
import "./register.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";


//interface

const Register = () => {
  // constants
  const form = useRef();
  let num = 0;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  const [error1, setErr1] = useState("");
  const [error2, setErr2] = useState("");
  const [error3, setErr3] = useState("");
  const [error4, setErr4] = useState("");

  // button click register function
  const Registerer = async (e) => {
    e.preventDefault();
    setErr1('');
    setErr2('');
    setErr3('');
    setErr4('');
    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setPass(e.target.password.value);
    setConf(e.target.password1.value);

    const response = await fetch("http://localhost:3001/getuser", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    if (response[0] !== undefined) {
      setErr4("This email is already registered");
      num++;
      e.target.reset();
    } 
    if (response[0] === undefined)
    {

      if (name.length < 2  ) {
        setErr1('Name is too short'); 
        num++;
      }

      if (pass !== conf) {
        setErr3('Passwords does not match');
        num++;
      }

      if (pass.length < 8) {
        setErr2('Password is too short');
        num++;
      }
      


      if (name !== null && email !== null && pass === conf && num < 1) {
        const response = await fetch("http://localhost:3001/createuser", {
          method: "post",
          body: JSON.stringify({ name, email, pass }),
          headers: { "Content-Type": "application/json" },
        });
        setEmail('');
        setName('');
        setPass('');
        setConf('');
        setErr1('');
        setErr2('');
        setErr3('');
        setErr4('');
        //.then(res=> res.json())
        //console.log(response[0].email);
      }
    }
  };

  return (
    <section id="contact">
      <h5>Become A Client</h5>
      <h2>Register Your Account</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Our Email</h4>
            <h5>smthstore@gmail.com</h5>
            <a href="mailto:smthstore@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaTelegramPlane className="contact-icon" />
            <h4>Telegram</h4>
            <h5>@smthstore</h5>
            <a href="https://t.me/smthstore" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <SiUpwork className="contact-icon" />
            <h4>UpWork</h4>
            <h5>Vensan Drot</h5>
            <a
              href="https://www.upwork.com/freelancers/~013d38b18a0d01544c"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form onSubmit={Registerer}>
          {error1}
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            name="name"
            placeholder="Your Login"
            maxLength={50}
            required
          />
          {error4}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            name="email"
            placeholder="Your Email"
            maxLength={50}
            required
          />
           {error2}
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
            type="password"
            name="password"
            placeholder="Your Password"
            maxLength={50}
            required
          />
          {error3}
          <input
            onChange={(e) => {
              setConf(e.target.value);
            }}
            value={conf}
            type="password"
            name="password1"
            placeholder="Confirm Your Password"
            maxLength={50}
            required
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
