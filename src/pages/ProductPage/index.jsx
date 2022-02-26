import React from 'react'
import "./productPage.css"
import Navbar from './Navbar'
import ContentProduct from './ContentProduct'

function ProductPage (props) {
  return (
    <div className='container-fluid product-container pb-5'>
      <Navbar />
      <ContentProduct />
    </div>
  )
}

export default ProductPage