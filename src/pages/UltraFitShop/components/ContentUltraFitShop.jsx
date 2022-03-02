import React from 'react'
import BmwUltraShopCard from './BmwUltraShopCard'
import MercedesUltraShopCard from './MercedesUltraShopCard'
import MaserattiUltraShopCard from './MaserattiUltraShopCard'

function ContentUltraFitShop (props) {
  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-2">
          <div className="bg-light border radius-1v px-2 mx-1 pt-4 pb-4 shadow">
            <p className="fw-bold">
              Categories
            </p>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="ultraShopCheck"/>
              <label className="form-check-label" htmlFor="ultraShopCheck">
                Windshield protection(3)
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="ultraShopCheck1"/>
              <label className="form-check-label" htmlFor="ultraShopCheck1">
                Paint protection film (6)
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="ultraShopCheck2"/>
              <label className="form-check-label" htmlFor="ultraShopCheck2">
                Window film (3)
              </label>
            </div>
          </div>
        </div>
        <div className="row col-8 justify-content-between p-0">
          <BmwUltraShopCard />
          <MercedesUltraShopCard />
          <MaserattiUltraShopCard />
          <MaserattiUltraShopCard />
          <BmwUltraShopCard />
          <MercedesUltraShopCard />
        </div>
        <div className="col-2">

        </div>
      </div>
    </div>
  )
}

export default ContentUltraFitShop