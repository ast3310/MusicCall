import React from 'react';
import './navbar.scss';
import logo from '../../assets/img/logo.png';

class Navbar extends React.Component {
    render() {
        return (
          <header className="header">
            <div className="header__body container">
              <div className="header__logo">
                <img src={logo} alt="" className="header__logo-img"/>
              </div>
            </div>
          </header>
        );
      }
} 

export default Navbar