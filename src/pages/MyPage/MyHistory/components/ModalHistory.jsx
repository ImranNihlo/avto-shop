import React from 'react'
import Rating from '../../../HomePage/components/Rating'
import VerticalRating from './VerticalRating'

function ModalHistory (props) {
  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <h6 className="modal-title bg-black text-white pt-2 pb-2 text-center" id="exampleModalLongTitle">WRITE A REVIEW</h6>
          <div className="modal-body">
            <div className="row justify-content-between">
              <div className="col-6 text-center">
                <h6 className="fw-bold">
                  Customer rating
                </h6>
                <h4 className="fw-bold m-0">
                  4.1
                </h4>
                <Rating />
                <div className="font-block fw-bold mt-3">
                  (70 Customer reviews)
                </div>
              </div>
              <VerticalRating />
              <hr/>
              <div className="row justify-content-start mt-2 mb-4">
                <h6 className="fw-bold col-3">
                  My review
                </h6>
                <div className="col">
                  <Rating />
                </div>
              </div>
              <hr/>
              <div className="form-group fw-bold mb-5">
                <label htmlFor="exampleFormControlTextarea1">Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter...">

                  </textarea>
              </div>
              <hr/>
            </div>
          </div>
          <div className="align-self-center mb-3">
            <button type="button" className="btn btn-light text-black border border-secondary radius-1v fw-bold mx-1"
                    data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-primary radius-1v fw-bold mx-1">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalHistory