import React from 'react'

function ShippingAddress (props) {
  return (
    <>
      <div className="row justify-content-between border-bottom px-3 pt-4 pb-3 mx-0">
        <div className="fw-bold col">
          Shipping address
        </div>
        <div className="form-check col font-size-14 text-secondary fw-normal text-end m-0">
          <input className="form-check-input mx-0" type="checkbox" id="checkShippingAddress"/>
            <label className="form-check-label" htmlFor="checkShippingAddress">
              Same as a Customer Information
            </label>
        </div>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Name</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Email</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Mobile Phone</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Country</label>
        <form>
          <select id="inputState" className="form-control text-secondary">
            <option selected>Select</option>
            <option>Sweden</option>
            <option>Canada</option>
            <option>Turkey</option>
          </select>
        </form>
        <span className="position-arrow-order">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
              </span>
      </div>
      <div className="form-group px-4 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Address 1</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Address 2</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Town / City</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">State / Province / Region</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Zip / Postal Code</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
      <div className="form-group px-4 pt-2 pb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">
          VAT / TAX ID
          <span className="text-secondary font-size-13 mx-1 fw-normal">
            (Options)
          </span>
        </label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
    </>
  )
}

export default ShippingAddress