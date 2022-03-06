import React from 'react'
import x7 from "../Images/x7.jpg"
import mers from "../Images/g-class.jpg"
import "../../Upload/ModalsUpload/modalsUpload.css"
import "../../Upload/upload.css"
import OrderHistoryHeader from './components/OrderHistoryHeader'
import OrderHistoryCards from './components/OrderHistoryCards'

function OrderHistory (props) {
  return (
    <div className="row justify-content-center pt-4 pb-4">
      <div className="col-8 row">
        <h2 className="fw-bold mb-3">
          Order history
        </h2>
        <div className="row mx-0">
          <hr className="bg-secondary"/>
        </div>
        <div>
          <div className="row border mx-0 bg-light border radius-1v">
            <OrderHistoryHeader />
            <div className="row justify-content-between mx-0 fw-bold border-top pt-3 pb-3">
              <div className="col">
                Date of purchase: 2021.12.28
              </div>
              <div className="col text-warning text-end cursor">
                LEARN MORE
              </div>
            </div>
            <OrderHistoryCards />
            <div className="row justify-content-between mx-0 fw-bold border-top pt-3 pb-3">
              <div className="col">
                Date of purchase: 2021.12.28
              </div>
              <div className="col text-warning text-end cursor">
                LEARN MORE
              </div>
            </div>
            <OrderHistoryCards />
          </div>
          <button type="button" className="btn btn-light border-dark fw-bold mt-3">
            CANCEL SELECTED ORDERS
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
