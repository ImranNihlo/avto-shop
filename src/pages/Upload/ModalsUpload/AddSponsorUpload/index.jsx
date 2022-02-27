import React from 'react'
import "../modalsUpload.css"
import PayPalButton from '../../../MyPage/Subscription/components/PayPalButton'
import paypal from '../../../MyPage/Payment/Images/2381291.png'

function AddSponsorUpload (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content bg-light">
        <h5 className="text-white bg-black text-center pt-3 pb-3">
          ADD SPONSOR
        </h5>
        <div className="px-5">
          <p className="fw-bold mb-2 mt-4">
            Would you like to expose your patterns to more customers?
          </p>
          <p className="text-size mb-4">
            After registering this item as a  sponsored ad, will be displayed in the "Top5" <br/>Of the search results.<br/>
            If there are more  than 5 items registered for the same search query, the item will<br/> be displayed on a random
            basis.
          </p>
          <h5 className="fw-bold">
            Sponsor AD
          </h5>
          <div className="fw-bold">
           <div className="row justify-content-between mx-0 bg-colors border-primary border-top pt-2 pb-2">
             <div className="col-2 bg-colors">

             </div>
             <div className="col-4 text-center">
               Name
             </div>
             <div className="col-6 text-end px-4">
               Price
             </div>
           </div>
            <div className="row justify-content-between mx-0 pt-2 pb-2 border-bottom">
              <div className="col-6 text-end px-1">
                <input type="checkbox" className="form-check-input mx-4"/>
                15-DAYS EXPOSURE
              </div>
              <div className="col-6 text-end px-4">
                30 $
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-top mt-5 pt-3 pb-3">
          <button type="button" className="btn btn-light border-dark radius-2v px-5 mx-2 fw-bold">CANCEL</button>
          <button type="button" className="btn btn-primary radius-2v px-5 mx-2 fw-bold">PROFIT</button>
          <button type="button" className="btn btn-primary radius-2v px-5 mx-2 fw-bold">
            <p className="fst-italic m-0">
              <img src={paypal} alt="paypal" width={20} height={20}/>
              PayPal
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddSponsorUpload