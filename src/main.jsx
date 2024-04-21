import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import '../css/styles.css'
import App from '../component/App'
import Header from '../views/Header'
import Element from '../views/Element'
import Producto from '../views/Producto'
import Menu from '../views/Menu'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router>
        <Routes>
            <Route path = '/' element = {<App/>}></Route>
            <Route path = '/menu' element = {<Header/>}></Route>
            <Route path = '/products' element = {<Element/>}></Route>
            <Route path = '/products/dunes-anthrazite-black' element = {<Producto/>}></Route>
            <Route path = '/show-menu' element = {<Menu/>}></Route>

        </Routes>
    </Router>
 
)
