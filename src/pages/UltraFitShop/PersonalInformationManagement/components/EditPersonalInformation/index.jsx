import React from 'react'
import mers from '../../../SingleProduct/Images/mers.jpg'

function EditPersonalInformation (props) {
  return (
    <div className='col-5 bg-light text-center radius-1v'>
      <h2 className='mt-5 mb-5 fw-bold'>
        EDIT PERSONAL INFORMATION
      </h2>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <div className='form-group text-start mb-3'>
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Profile</label>
            <form className="border rounded">
              <div className="row m-0 mt-3 mb-3">
                <div className='col-3'>
                  <img src={mers} alt="mers" className="w-100 align-self-center"/>
                </div>
                <div className="col-9 pt-3 p-0">
                  <input type="file" className="custom-file-input file-input bg-primary radius-1v text-white"
                         id="customFile"/>
                  <div className="form-check p-0">
                    <small id="emailHelp" className="form-text text-secondary fw-normal">
                      You can upload files by PNG, JPG, GIF
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group row mx-0 border-top bg-white height">
                <div className="col-4 border-end align-self-center text-secondary">
                  User name
                </div>
                <input type="text" className="form-control border-0 col"/>
              </div>
            </form>
          </div>
          <div className="form-group mt-3">
            <div className="row justify-content-between mx-0 mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label col text-start p-0 fw-bold m-0">
                Email
              </label>
              <div className="form-text text-danger fw-normal col text-end p-0">
                Cannot be modified
              </div>
            </div>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label mb-0 fw-bold">Password</label>
            <div className="form-check p-0 line-height">
              <small id="emailHelp" className="form-text text-secondary fw-normal">
                Set a least 8 characters using a combination of Enflish letters, numbers,
                and special characters.
              </small>
            </div>
            <form>
              <div className="form-group row mx-0 border border-bottom-0 bg-white height mt-2 rounded-top">
                <div className="col-5 border-end align-self-center text-secondary">
                  Password
                </div>
                <input type="password" className="form-control border-0 col"/>
              </div>
              <div className="form-group row mx-0 border bg-white height rounded-bottom">
                <div className="col-5 border-end align-self-center text-secondary">
                  Retype password
                </div>
                <input type="password" className="form-control border-0 col"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <div className="row justify-content-between mx-0 mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label col text-start p-0 fw-bold m-0">
                Name
              </label>
              <div className="form-text text-danger fw-normal col text-end p-0">
                Cannot be modified
              </div>
            </div>
            <form>
              <div className="form-group row mx-0 border border-bottom-0 bg-white height mt-2 rounded-top">
                <div className="col-4 border-end align-self-center text-secondary">
                  Name
                </div>
                <input type="text" className="form-control border-0 col"/>
              </div>
              <div className="form-group row mx-0 border bg-white height rounded-bottom">
                <div className="col-4 border-end align-self-center text-secondary">
                  Last name
                </div>
                <input type="text" className="form-control border-0 col"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Mobile Phone</label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Company name</label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Address 1</label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Address 2</label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Town / City</label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
              State / Province / Region
            </label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">ZIP / Postal Code</label>
            <form>
              <div className="form-group">
                <input type="text" className="form-control height"/>
              </div>
            </form>
          </div>
          <div className="form-group text-start mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Country</label>
            <form>
              <select id="inputState" className="form-control height">
                <option selected>United States of America</option>
                <option>Sweden</option>
                <option>Canada</option>
                <option>Turkey</option>
              </select>
            </form>
            <div className="arrow-management">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </div>
          </div>
          <button type="button" className="btn btn-primary radius-2v col-5 height mb-4">
            CORRECTION
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditPersonalInformation