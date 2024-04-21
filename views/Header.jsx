// -------------- MENÚ HAMBURGUESA - SEGUNDA INTERFAZ

import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';


function Header() {

    const [showMenu, setShowMenu] = useState(null);

    function muestraMenu () {
      setShowMenu(!showMenu); 

    }
   
  return (
    <>
    <div className='header__div'>
     <nav className='header__nav'>
      <div className='header__divIcon'><Link to = '/'>&times;</Link></div>
      <div className='header__listDiv'>
      
      <ul className='header__list'>
        <li className='header__listItem'><button className='header__listButton' onClick={muestraMenu}>
          {showMenu ? '' : ' '} Collection</button>{showMenu ? <Menu/> : null}</li>
        <li className='header__listItem'><button className='header__listButton'>Design</button></li>
        <li className='header__listItem'><button className='header__listButton'>Craftmanship</button></li>
        <li className='header__listItem'><button className='header__listButton'>Ethics</button></li>
      </ul>
      </div>
     </nav>  
    </div>
    </>
  )
}

export default Header
