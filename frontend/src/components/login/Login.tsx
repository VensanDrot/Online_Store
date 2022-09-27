import React, { useState, useRef, useEffect } from "react";
import "../register/register.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { stringify } from "querystring";

//interface

const Login = () => {
  // constants
  const form = useRef();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setErr] = useState("");

  function check() {
    if (error !== "") {
      return <h5 className="h5_err">{error}</h5>;
    }
  }

  // button click register function
  const Registerer = async (e) => {
    e.preventDefault();

    setEmail(e.target.name.value);
    setPass(e.target.password.value);

    //console.log(user.login);
    //console.log(login, " ", email, " ", pass, " ", conf);
    if (email !== null && pass !== null) {
      const response = await fetch("http://localhost:3001/getuser", {
        method: "post",
        body: JSON.stringify({ email, pass }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      // console.log(response[0]);
      
      //user is found
      if (response[0] !== null) {
        const id = response[0].id;
        console.log(response[0]);
        //e.target.reset();
        //setEmail('');
        //setPass('');
        //setErr("");
      }

      // cant find a user
      if (response[0] === undefined) {
        setErr("Wrong email or password");
      }
    }
  };

  return (
    <section id="contact">
      <h5>Sign in</h5>
      <h2>Sign in your account</h2>
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
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            name="name"
            placeholder="Your Email"
            maxLength='50'
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
            maxLength='50'
            required
          />

          {check()}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
