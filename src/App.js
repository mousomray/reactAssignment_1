import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Product from './Components/Product'
import Productdetails from './Components/Productdetails'
import Footer from './Components/Footer'


const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Product />} />
                    <Route path='/productdetails/:id' element={<Productdetails />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
