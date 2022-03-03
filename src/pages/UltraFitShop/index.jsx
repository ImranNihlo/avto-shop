import React from 'react'
import "./ultraFitShop.css"
import ContentUltraFitShop from './components/ContentUltraFitShop'
import DropdownUltraFitShop from './components/DropdownUltraFitShop'

function UltraFitShop (props) {
  return (
    <div className="row pb-5">
      <div className="ultra-fit-shop-back">

      </div>
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-8 row justify-content-between ultra-position">
            <div className="row justify-content-between border shadow radius-1v bg-light mx-0 pt-3 pb-3">
              <div className="col align-self-center">
                <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-search text-secondary"
                       viewBox="0 0 16 16">
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <input type="search" className="border-0" placeholder="Product search"/>
                </label>
              </div>
              <div className="col text-end">
                <button type="button" className="btn btn-primary radius-2v">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DropdownUltraFitShop />
      <ContentUltraFitShop />
      <div className="text-center fw-bold">
        <button type="button" className="btn btn-primary mx-1">1</button>
        <button type="button" className="btn btn-light mx-1">2</button>
      </div>
    </div>
  )
}

export default UltraFitShop