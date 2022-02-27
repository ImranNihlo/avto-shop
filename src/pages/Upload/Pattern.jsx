import React from 'react'
import Navbar from '../ProductPage/Navbar'
import ContentProduct from '../ProductPage/ContentProduct'
import "../ProductPage/productPage.css"

function Pattern (props) {
  return (
    <div className='container-fluid product-container pb-5'>
      <Navbar />
      <ContentProduct />
    </div>
  )
}

export default Pattern