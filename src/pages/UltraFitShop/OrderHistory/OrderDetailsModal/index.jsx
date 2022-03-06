import React from 'react'
import "./orderDetailsModal.css"
import x7 from "../../Images/x7.jpg"
import mers from "../../Images/g-class.jpg"
import ModalOrderDetails from './components/ModalOrderDetails'
import ModalOrderSummary from './components/ModalOrderSummary'
import ModalGrandTotal from './components/ModalGrandTotal'
import ModalShippingAddress from './components/ModalShippingAddress'

function OrderDetailsModal (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content col-4 bg-light">
        <h5 className="text-white bg-black text-center pt-3 pb-3 m-0">
          ORDER DETAILS
        </h5>
        <div className="px-5">
          <ModalOrderDetails />
          <ModalOrderSummary />
          <ModalGrandTotal />
          <ModalShippingAddress />
        </div>
        <div className="border-top text-center">
          <button type="button" className="btn btn-light border-dark radius-2v col-4 fw-bold mt-3 mb-3">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsModal