import React from 'react';
import './nav.css';
import { useState } from 'react';
import {Link} from "react-router-dom";


const Nav = () => {

  const [status, setStatus] = useState('close');
  const [statusdiv, setStatusdiv] = useState('out');

  function stche() {
    setStatus(status === 'open' ? 'close' : 'open');
        setStatusdiv(statusdiv === 'in' ? 'out' : 'in');
  }

  return (
    <>
    <nav> 
      <Link to="/" className='vensan'>VensanStore</Link>
      <ul className='div'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Main" >Main</Link></li>
      </ul>
      
      <div
        className="BurgerMenu__container"
        role="button"
        onClick={() => stche()}
    
      >
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>
      
      <ul className='div-mobile' className={statusdiv}>
      <li><Link to="/" onClick={() => {
                    setStatusdiv(statusdiv === 'in' ? 'out' : 'in');
                  }
                  }>Home</Link></li>
      <li><Link to="/Main" onClick={() => {
                    setStatusdiv(statusdiv === 'in' ? 'out' : 'in');
                  }
                  } >Main</Link></li>
      </ul>
       
    </nav>
    </>
  )
}

export default Nav