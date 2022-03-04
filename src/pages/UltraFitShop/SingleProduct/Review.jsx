import React from 'react'
import mers from "./Images/mers.jpg"
import steve from "./Images/img_profile (2).jpg"
import ReviewComments from './components/ReviewComments'

function Review (props) {
  return (
    <div className="col-8 px-4">
      <div className="border bg-light radius-1v pt-4 pb-4">
        <div className="row justify-content-between px-4">
          <div className="col-6">
            <img src={mers} alt="mers"/>
            <span className="fw-bold mx-1">
              mercedesbenzz
            </span>
          </div>
          <div className="col-6 text-end align-self-center">
            <button type="button" className="btn btn-primary">REGISTER</button>
          </div>
          <div className="form-group mt-2">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Leave a product review after your purchase...">
            </textarea>
          </div>
        </div>
        <div className="col-12 border-top mt-3 pt-3">
          <p className="fw-bold px-4 m-0">
            Reviews (15)
          </p>
          <ReviewComments />
        </div>
      </div>
    </div>
  )
}

export default Review