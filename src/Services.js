import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export const Services = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    
                </ul>
            </nav>
        </header>

        <h2>Services</h2>
        <p>
            this  is my lamp instutite of kakutapalli  this  is my lamp instutite of kakutapalli
            this  is my lamp instutite of kakutapalli  this  is my lamp instutite of kakutapalli
            this  is my lamp instutite of kakutapalli  this  is my lamp instutite of kakutapalli
            this  is my lamp instutite of kakutapalli  this  is my lamp instutite of kakutapalli

        </p>
    </div>
  )
}