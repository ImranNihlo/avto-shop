import React from 'react'
import "./auth.css"

function Find (props) {
  return (
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
                <div className="row justify-content-between m-0 border-row rounded">
                  <div className="col-9 p-0">
                    <input type="email" className="form-control border-0"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                  </div>
                  <div className="col-3 align-self-center text-center">
                    <button type="button" className="btn btn-primary btn-sm radius-1v">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-start fw-bold">
                <label htmlFor="exampleInputPassword1" className="form-label">Verification code</label>
                <div className="row justify-content-between m-0 border-row rounded">
                  <div className="col-9 p-0">
                    <input type="email" className="form-control border-0"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                  </div>
                  <div className="col-3 align-self-center m-0 text-center">
                    <button type="button" className="btn btn-primary btn-sm radius-1v">
                      VERIFY
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-check mb-3 mt-3 p-0">
                <small id="emailHelp" className="form-text text-danger">
                  Your password should include at least one special character.
                </small>
              </div>
              <button type="submit" className="btn btn-primary w-100 radius-2v blue mb-5 fw-bold height">
                NEXT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find