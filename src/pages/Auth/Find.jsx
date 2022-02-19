import React from 'react'
import "./auth.css"

function Find (props) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-5 col-center mt-5 text-center radius-1v'>
          <h2 className='mt-5 mb-5 fw-bold'>
            FIND PASSWORD
          </h2>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <form>
                <div className="text-start fw-bold">
                  <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <button type="button" className="btn btn-primary btn-sm btn-position radius-1v">
                    <span className='btn-span'>
                      SEND
                    </span>
                  </button>
                </div>
                <div className="text-start fw-bold">
                  <label htmlFor="exampleInputPassword1" className="form-label">Verification code</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                  <button type="button" className="btn btn-primary btn-sm btn-position radius-1v">
                    <span className='btn-span'>
                      VERIFY
                    </span>
                  </button>
                </div>
                <button type="submit" className="btn btn-primary w-100 radius-2v blue mt-5 mb-5 fw-bold height">
                  NEXT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find