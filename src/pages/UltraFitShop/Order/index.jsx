import React from 'react'
import "../ultraFitShop.css"
import "../../Upload/upload.css"
import CustomerInformation from './components/CustomerInformation'
import ShippingAddress from './components/ShippingAddress'
import Coupon from './components/Coupon'
import OrderDetails from './components/OrderDetails'
import OrderSummary from './components/OrderSummary'
import GrandTotalAndPay from './components/GrandTotalAndPay'

function Order (props) {
  return (
    <div className="row justify-content-center pt-4 pb-4">
      <div className="col-8 row justify-content-between">
        <h2 className="fw-bold mb-3">
          ORDER
        </h2>
        <div className="row mx-0">
          <hr className="bg-secondary"/>
        </div>
        <div className="col-7">
          <div className="border bg-light radius-1v fw-bold pt-4 pb-4">
            <CustomerInformation />
            <ShippingAddress />
            <Coupon />
          </div>
        </div>
        <div className="col-5">
          <div className="border bg-light radius-1v fw-bold pt-4 pb-4">
            <OrderDetails />
            <OrderSummary />
            <GrandTotalAndPay />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order