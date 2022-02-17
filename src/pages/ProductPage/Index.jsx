import React from 'react'
import "./productPage.css"
import Navbar from './Navbar'
import ContentProduct from './ContentProduct'

function Index (props) {
  return (
    <div className='container-fluid product-container'>
      <Navbar />
      <ContentProduct />
    </div>
  )
}

export default Index