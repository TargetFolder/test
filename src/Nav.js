import React from "react";
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <div className="header">
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Students">Students</Link></li>
                <li><Link to="/AddStudent">Add Students</Link></li>

                

            </ul>


        </div>
    );
}
export default Nav;