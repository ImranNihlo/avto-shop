import React from 'react'

function SingleProductRightBlock (props) {
  return (
    <div className="col-5">
      <div className="col bg-light border radius-1v pt-3 pb-4">
        <h5 className="m-0 fw-bold px-4">
          ULTRAFIT VF
        </h5>
        <p className="text-secondary px-4">
          Window film
        </p>
        <p className="fw-bold px-4 mb-1">
          Option
        </p>
        <div className="form-group px-4">
          <form>
            <select id="inputState" className="form-control">
              <option selected>Size</option>
              <option>Size 1</option>
              <option>Size 2</option>
              <option>Size 3</option>
            </select>
          </form>
          <span className="arrow-position">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi-caret-down-fill m-0" viewBox="0 0 16 16">
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </span>
        </div>
        <div className="border-top border-bottom text-center">
          <h4 className="m-0 mt-4 mb-4 text-primary fw-bold">
            20 Credit
          </h4>
        </div>
        <div className="text-center mt-4">
          <button type="button" className="btn btn-light col-5 radius-2v mx-1 border-dark fw-bold pt-2 pb-2">
            ADD TO CART
          </button>
          <button type="button" className="btn btn-primary col-5 radius-2v mx-1 fw-bold pt-2 pb-2">BUY</button>
        </div>
      </div>
    </div>
  )
}

export default SingleProductRightBlock