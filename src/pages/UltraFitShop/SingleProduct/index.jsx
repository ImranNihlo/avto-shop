import React from 'react'
import product_merc from "./Images/product_thumnail@3x.jpg"
import "./singleProduct.css"
import "../../Upload/upload.css"
import Review from './Review'
import SingleProductRightBlock from './components/SingleProductRightBlock'

function SingleProduct (props) {
  return (
    <div className="row justify-content-center pt-4">
      <div className="col-8 row justify-content-between">
        <div className="col-7">
          <img src={product_merc} alt="product_merc" className="w-100 radius-1v"/>
        </div>
        <SingleProductRightBlock />
      </div>
      <div className="col-8 row justify-content-between mt-5 px-4 mb-4">
        <div className="col-6 bg-primary text-center text-white pt-2 pb-2 rounded-start cursor border border-end-0">
          Information
        </div>
        <div className="col-6 bg-light text-center text-secondary pt-2 pb-2 rounded-end cursor border border-start-0">
          Reviews
        </div>
      </div>
      <Review />
    </div>
  )
}

export default SingleProduct