import React, { useState, useRef } from "react";
import "./register.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { stringify } from "querystring";

//interface

const Register = () => {
  // constants
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  const [err_log, setLog] = useState("");
  const [err_email, setEemail] = useState("");
  const [err_pass, setEpas] = useState("");

  // button click register function
  const Registerer = async (e) => {
    e.preventDefault();

    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setPass(e.target.password.value);
    setConf(e.target.password1.value);

    // old way of getting variable
    // let name= e.target.name.value;
    // let email= e.target.email.value;
    // let pass= e.target.password.value;
    // let conf= e.target.password1.value;

    // err checker
    if (name.length < 4) {
      setLog("Login is too short");
    }
    if (pass.length < 8) {
      setLog("Login is too short");
      if (pass !== conf) {
        setLog("Passwords doesnt match");
      }
    }

    //console.log(user.login);
    //console.log(login, " ", email, " ", pass, " ", conf);
    if (name !== null && email !== null && pass === conf) {
      const response = await fetch("http://localhost:3001/createuser", {
        method: "post",
        body: JSON.stringify({ name, email, pass }),
        headers: { "Content-Type": "application/json" },
      });
      //.then(res=> res.json())
      //console.log(response[0].email);
      e.target.reset();
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
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            name="name"
            placeholder="Your Login"
            required
          />

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />

          <input
            onChange={(e) => {
              setConf(e.target.value);
            }}
            value={conf}
            type="password"
            name="password1"
            placeholder="Confirm Your Password"
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
