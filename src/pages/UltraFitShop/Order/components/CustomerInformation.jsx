import React from 'react'

function CustomerInformation (props) {
  return (
    <>
      <div className="border-bottom px-4 fw-bold pb-3">
        Customer Information
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
      <div className="form-group px-4 pb-2">
        <label htmlFor="exampleInputEmail1" className="form-label mb-1 font-size-14">Address</label>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
    </>
  )
}

export default CustomerInformation