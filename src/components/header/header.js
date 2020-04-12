import React ,{Component}from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    
 render(){

     return(
     <>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Density Calculator</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/rawMaterial" exact>RAW MATERIAL NAME</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/rawMaterialType" exact>RAW MATERIAL TYPE</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  className="nav-link" to="/bomCalculation" exact>BOM CALCULATION</NavLink>
                    </li>
                </ul>
 
        </nav>
    </>);
 }
}

export default Header;