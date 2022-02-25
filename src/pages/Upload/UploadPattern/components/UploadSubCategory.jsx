import React from 'react'
import PricePerArea from './PricePerArea'
import CheckboxSubCategory from './CheckboxSubCategory'

function UploadSubCategory (props) {
  return (
    <>
      <div className="row justify-content-between pt-3 pb-3 border-bottom">
        <div className="col align-self-center">
          <h6 className="fw-bold m-0">
            Pattern 1.
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x-circle mx-2 cursor mb-1"
                 viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </h6>
        </div>
        <div className="col text-end">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-caret-down-fill cursor" viewBox="0 0 16 16">
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
      </div>
      <h6 className="fw-bold px-4 mt-4">
        Sub Category
      </h6>
      <div className="row justify-content-between px-4">
        <div className="btn-group bg-light p-0" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
          <label className="btn btn-outline-primary border-bottom-0 border-top border-end border-start height rounded-top"
                 htmlFor="btncheck1">
            Full Package
          </label>

          <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
          <label className="btn btn-outline-primary border-bottom-0 border-top border-end border-start height rounded-top"
                 htmlFor="btncheck2">
            Out Front
          </label>

          <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
          <label className="btn btn-outline-primary border-bottom-0 border-top border-end border-start height rounded-top"
                 htmlFor="btncheck3">
            Out Side
          </label>

          <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"/>
          <label className="btn btn-outline-primary border-bottom-0 border-top border-end border-start height rounded-top"
                 htmlFor="btncheck4">
            Out Rear
          </label>

          <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"/>
          <label className="btn btn-outline-primary border-bottom-0 border-top border-end border-start height rounded-top"
                 htmlFor="btncheck5">
            Inner
          </label>
        </div>
      </div>
      <CheckboxSubCategory />
    </>
  )
}

export default UploadSubCategory