import React from 'react'
import steve from '../Images/img_profile (2).jpg'
import mers from '../Images/mers.jpg'

function ReviewComments (props) {
  return (
    <>
      <div className="row justify-content-between border-bottom mx-0 px-3 mt-3">
        <div className="col-10">
          <img src={steve} alt="steve"/>
          <span className="fw-bold mx-1">
                Steve sole
              </span>
        </div>
        <div className="col-2 text-end align-self-center text-secondary">
          3days ago
        </div>
        <p className="mt-3 fw-bold">
          I've been looking for a lot of sites, but i've found the product i want here!
        </p>
      </div>
      <div className="row justify-content-between border-bottom mx-0 px-3 mt-3">
        <div className="col-10">
          <img src={mers} alt="mers"/>
          <span className="fw-bold mx-1">
                Lovecar
              </span>
        </div>
        <div className="col-2 text-end align-self-center text-secondary">
          8days ago
        </div>
        <p className="mt-3 fw-bold">
          It has been 5 years since i used this product! Thank you for always making great products. You will
          know once use this product! Really good. I will continue to purchase in the future!
        </p>
      </div>
    </>
  )
}

export default ReviewComments