import React from 'react'
import { useEffect } from 'react'


function Menu() {


    useEffect(()=>{
        console.log('Mostrar');

        return ()=>{
            console.log('Esconder');
        }
})
  return (
    <>
    <ul className='menu__list'>
        <li className='menu__listItem'><button className='menu__button'>Furniture</button></li>
        <li className='menu__listItem'><button className='menu__button'>Lighting</button></li>
        <li className='menu__listItem'><button className='menu__button'>Accesories</button></li>
    </ul>
   
    </>
  )
}

export default Menu
