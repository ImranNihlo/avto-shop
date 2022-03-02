import React from 'react'

function ResetPassword (props) {
  return (
    <div className='row justify-content-center'>
      <div className='col-5 col-center mt-5 text-center radius-1v'>
        <h2 className='mt-5 fw-bold'>
          RESET PASSWORD
        </h2>
        <div className="form-check mb-4">
          <small id="emailHelp" className="form-text text-secondary">
            Please enter a mixture of one or more special characters, numbers and  alphanets.
          </small>
        </div>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <form>
              <div className="text-start fw-bold mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="text-start fw-bold">
                <label htmlFor="exampleInputPassword1" className="form-label">Retype password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="form-check mb-3 mt-5 p-0">
                <small id="emailHelp" className="form-text text-danger">
                  Your password should include at least one special character.
                </small>
              </div>
              <button type="submit" className="btn btn-primary w-100 radius-2v blue mb-5 fw-bold height">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword