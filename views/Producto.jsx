// -------------- PÁGINA DE INICIO - PRIMERA INTERFAZ - PRODUCTO 02

import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Producto() {

  const [element, setElement] = useState([]);
  
  const { VITE_ELEMENT } = import.meta.env;

  useEffect(() => {

    let controller = new AbortController();

    let options = {
      method: 'GET', 
      headers: { 'Content-Type' : 'application/json'},
      signal: controller.signal
    }
    
    fetch ( VITE_ELEMENT, options)
      .then (res => res.json())
      .then (data => setElement(data))
      .catch (error => console.log(error))
      .finally (() => {controller.abort()}); 

      console.log(VITE_ELEMENT);
  }, []) 

  function showHeader() {
      window.location.replace ('/menu'); 
  }
  
  function firstProduct(){

    window.location.replace ('/products'); 
  }

  function secondProduct(){
    window.location.replace ('/products/dunes-anthrazite-black'); 
  }

return (
  <>
      <header className='element__header'>
        <div className='element__headerDiv'><p className='element__headerText'>mater</p>
        <button onClick={showHeader} className='element__button'><Link to = '/menu' className='element__link'>&raquo;</Link></button>
        </div>
    
      </header>

      <main className='element__main'> 
      <div className='element__mainDiv'>

      {element.map ((producto, index) => {
        return (
          <>
          <div className='product__divText'>
          <p key = {index} className='divText__p'>{producto.author}</p>
          <h3 key = {index} className='divText__title'>{producto.title}</h3>
          <p key = {index} className='divText__text'>{producto.description}</p>
          <button className='button'>Product Details</button>
          </div>
          </>
        )
      })}

            
        {element.map((producto) => {
          return <div className='product__divImg'>
            <picture><img src={producto.image} alt="dunes-anthrazite-black" className='divImg__img' /></picture>
          </div>
        })}

      

    </div>
  </main>

  <footer className='element__footer'>
  
    <div className='element__footerDiv'>
    <button onClick={firstProduct} className='footer__button'><p className='footer__p footer__pNum'>01</p><Link to = '/products' className='footer__link'><p className='footer__p'>Shell Dining Chair</p></Link></button>
        <button onClick={secondProduct} className='footer__button'><p className='footer__p footer__pNum'>02</p><Link to = '/products/dunes-anthrazite-black' className='footer__link'><p className='footer__p'>Dunes Anthrazite Black</p></Link></button>
    </div>
  </footer>  

  </>
)
}

export default Producto
