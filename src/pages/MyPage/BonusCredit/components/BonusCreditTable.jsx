import React from 'react'

function BonusCreditTable (props) {
  return (
    <div className="px-4 mb-5">
      <p className="m-0 fw-bold mb-1">
        Bonus Credits Criteria
      </p>
      <div className="row mx-0 border-top border-primary bg-colors pt-2 pb-2">
        <div className="col-4 text-center">
          {/*Bonus Credit (20%)*/}Roll inch
        </div>
        <div className="col-2 text-center">
          60" X 15M
        </div>
        <div className="col-2 text-center">
          48" x 30M
        </div>
        <div className="col-2 text-center">
          36" x 30M
        </div>
        <div className="col-2 text-center">
          24" x 30M
        </div>
      </div>
      <div className="row mx-0 border-top pt-2 pb-2">
        <div className="col-4 text-center">
          Sq.f
        </div>
        <div className="col-2 text-center">
          250
        </div>
        <div className="col-2 text-center">
          400
        </div>
        <div className="col-2 text-center">
          300
        </div>
        <div className="col-2 text-center">
          200
        </div>
      </div>
      <div className="row mx-0 border-top border-bottom pt-2 pb-2">
        <div className="col-4 text-center">
          Bonus Credit (20%)
        </div>
        <div className="col-2 text-center">
          50
        </div>
        <div className="col-2 text-center">
          80
        </div>
        <div className="col-2 text-center">
          60
        </div>
        <div className="col-2 text-center">
          40
        </div>
      </div>
    </div>
  )
}

export default BonusCreditTable