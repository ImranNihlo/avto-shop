import React from 'react'
import mercedes from "../Images/g-class.jpg"
import maseratti from '../Images/masseratti.jpg'
import cart from '../Images/icon_cart.svg'

function MercedesUltraShopCard (props) {
  return (
    <div className="col-4">
      <div className="bg-light radius-1v pb-4 shadow">
        <img src={mercedes} alt="mercedes" className="w-100 card-radius"/>
        <div className="px-3">
          <h6 className="m-0 mt-4">
            ULTRAFIT SUPREME TOP
          </h6>
          <p className="text-secondary mb-4">
            Windshield protection
          </p>
          <button type="button" className="btn btn-outline-primary w-100 radius-1v fw-bold">BUY</button>
        </div>
      </div>
      <div className="border col-width rounded-circle shadow bg-light">
        <img src={cart} alt="cart" className="pt-2 pb-2 px-2"/>
      </div>
    </div>
  )
}

export default MercedesUltraShopCard