import React from 'react'

function Coupon (props) {
  return (
    <>
      <div className="border-bottom px-4 fw-bold pt-4 pb-3">
        Coupon
      </div>
      <div className="px-4 pt-2">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Country</label>
        <div className="row">
          <div className="form-group col-10">
            <form>
              <select id="inputState" className="form-control text-secondary">
                <option selected>Select coupon</option>
                <option>coupon 1</option>
                <option>coupon 2</option>
                <option>coupon 3</option>
              </select>
            </form>
            <span className="position-arrow-coupon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
          </span>
          </div>
          <div className="col-2 p-0">
            <button type="button" className="btn btn-primary fw-bold">APPLY</button>
          </div>
        </div>
      </div>
      <div className="px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">
          Credit
          <span className="text-secondary font-size-13 fw-normal mx-1">
            (My credit:
            <span className="text-primary fw-bold">
              1,250
            </span>
            )
          </span>
        </label>
       <div className="row">
         <form className="col-6">
           <div className="form-group">
             <input type="text" className="form-control"/>
           </div>
         </form>
         <div className="form-check col font-size-14 text-secondary fw-normal p-0 m-0 align-self-center">
           <input className="form-check-input mx-1" type="checkbox" id="checkUseAll"/>
           <label className="form-check-label" htmlFor="checkUseAll">
             Use all
           </label>
         </div>
       </div>
      </div>
      <div className="px-4 pt-2 pb-2">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">
          Profit
          <span className="text-secondary font-size-13 fw-normal mx-1">
            (My profit:
            <span className="text-primary fw-bold">
              50,000
            </span>
            )
          </span>
        </label>
        <div className="row">
          <form className="col-6">
            <div className="form-group">
              <input type="text" className="form-control"/>
            </div>
          </form>
          <div className="form-check col font-size-14 text-secondary fw-normal p-0 m-0 align-self-center">
            <input className="form-check-input mx-1" type="checkbox" id="checkUseAll2"/>
            <label className="form-check-label" htmlFor="checkUseAll2">
              Use all
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupon