import React from 'react';
import { NavLink , useLocation } from 'react-router-dom';
import '../Styles/HeaderStyles.scss';
import Magnetic from '../Utils/Magnetic';

const Header = () => {
  const location = useLocation();

  const textColor = location.pathname === '/contact' ? 'white' : '#111';
  const indicatorColor = location.pathname === '/contact' ? 'white' : '#111';

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: location.pathname === '/contact' ? '#111' : 'white'  }}>
      <div className="container-fluid">
        <div className='name1'>
        <NavLink className="navbar-brand name2" to="/" style={{ fontWeight: "700", marginLeft: "30px", fontSize: '33px', color: textColor  }}>
         <p className='codeBy'>Aranyam</p>
         <p className='dennis'>Design</p>
         <p className='snellenberg'>& Art</p> 
          </NavLink>
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mihir-nav" style={{ fontSize: "22px", marginRight: "42px" }}>
            <Magnetic>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={{ color: textColor }}>About</NavLink>
                <div style={{backgroundColor : indicatorColor}} className='indicator'></div>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="nav-item">
                <NavLink className="nav-link" to="/work" style={{ color: textColor }}>Work</NavLink>
                <div style={{backgroundColor : indicatorColor}} className='indicator'></div>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={{ color: textColor }}>Contact</NavLink>
                <div style={{backgroundColor : indicatorColor}} className='indicator'></div>
              </li>
            </Magnetic>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;



