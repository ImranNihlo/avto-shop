import React from 'react'
import gclass from "../../Images/g-class.jpg"
import maseratti from "../../Images/masseratti.jpg"
import x7 from "../../Images/x7.jpg"

function OrderDetails (props) {
  return (
    <>
      <div className="border-bottom px-4 fw-bold pb-3">
        Order details
      </div>
      <div className="scroll">
        <div className="row px-2 mx-0 mt-3">
          <div className="col-4">
            <img src={gclass} alt="gclass" className="radius-1v w-100" height={90}/>
          </div>
          <div className="col-8 p-0 align-self-center">
            <p className="font-size-13 m-0">
              ULTRAFIT LICENSE PLATE COVER
            </p>
            <p className="m-0 font-size-13 fw-normal text-secondary">
              Window Film
            </p>
            <p className="m-0 font-size-12 fw-normal mt-1">
              Quarter :1EA
            </p>
            <p className="m-0 font-size-12 mt-2">
              $1,230
            </p>
          </div>
        </div>
        <div className="row px-2 mx-0 mt-3">
          <div className="col-4">
            <img src={maseratti} alt="maseratti" className="radius-1v w-100" height={90}/>
          </div>
          <div className="col-8 p-0 align-self-center">
            <p className="font-size-13 m-0">
              ULTRAFIT LICENSE PLATE COVER
            </p>
            <p className="m-0 font-size-13 fw-normal text-secondary">
              Window Film
            </p>
            <p className="m-0 font-size-12 fw-normal mt-1">
              Quarter :2EA
            </p>
            <p className="m-0 font-size-12 mt-2">
              $2,460
            </p>
          </div>
        </div>
        <div className="row px-2 mx-0 mt-3">
          <div className="col-4">
            <img src={x7} alt="x7" className="radius-1v w-100" height={90}/>
          </div>
          <div className="col-8 p-0 align-self-center">
            <p className="font-size-13 m-0">
              ULTRAFIT LICENSE PLATE COVER
            </p>
            <p className="m-0 font-size-13 fw-normal text-secondary">
              Window Film
            </p>
            <p className="m-0 font-size-12 fw-normal mt-1">
              Quarter :1EA
            </p>
            <p className="m-0 font-size-12 mt-2">
              $1,230
            </p>
          </div>
        </div>
        <div className="row px-2 mx-0 mt-3">
          <div className="col-4">
            <img src={gclass} alt="gclass" className="radius-1v w-100" height={90}/>
          </div>
          <div className="col-8 p-0 align-self-center">
            <p className="font-size-13 m-0">
              ULTRAFIT LICENSE PLATE COVER
            </p>
            <p className="m-0 font-size-13 fw-normal text-secondary">
              Window Film
            </p>
            <p className="m-0 font-size-12 fw-normal mt-1">
              Quarter :1EA
            </p>
            <p className="m-0 font-size-12 mt-2">
              $1,230
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails