import React from 'react'
import "./auth.css"

function Login (props) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-5 col-center mt-5 text-center radius-1v'>
          <h2 className='mt-5 mb-3 fw-bold'>
            LOGIN
          </h2>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <form>
                <div className="form-group">
                  <input type="email" className="form-control w-100 rounded-0 rounded-top border-bottom-0"
                         id="exampleInputEmail1" aria-describedby="emailHelp"
                         placeholder="E-mail"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control w-100 rounded-0 rounded-bottom"
                         id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check text-end">
                  <small id="emailHelp" className="form-text text-secondary">Forgot your password?</small>
                </div>
                <div className="form-check mb-3 mt-3 p-0">
                  <small id="emailHelp" className="form-text text-danger">
                    Incorrect password. Please try again.
                  </small>
                </div>
                <button type="submit" className="btn btn-primary w-100 radius-2v blue fw-bold height">LOGIN</button>
              </form>
              <div className='row justify-content-between pt-4 pb-2'>
                <div className='col-5'>
                  <hr/>
                </div>
                <p className='col text-secondary'>
                  Or
                </p>
                <div className='col-5'>
                  <hr/>
                </div>
              </div>
              <div className="row justify-content-between m-0 red radius-2v border border-danger height">
                <div className='col-8 text-start text-start-top'>
                  <div className='row justify-content-between m-0'>
                    <div className='col-1 border rounded-circle back-red p-0 text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                           className="bi bi-google pb-2" viewBox="0 0 16 16">
                        <path
                          d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                      </svg>
                    </div>
                    <div className='col-10 p-0 fw-bold'>
                      Sign in with Google
                    </div>
                  </div>
                </div>
                <div className='col-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </div>
              <div className="row justify-content-between m-0 blue border border-primary radius-2v mt-2 mb-4 height">
                <div className='col-8 text-start text-start-top'>
                  <div className='row justify-content-between m-0'>
                    <div className='col-1 border rounded-circle back-blue p-0 text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                           className="bi bi-facebook pb-2 text-start-top" viewBox="0 0 16 16">
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </div>
                    <div className='col-10 p-0 fw-bold'>
                      Sign in with Facebook
                    </div>
                  </div>
                </div>
                <div className='col-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </div>
              <div className="form-check mb-2">
                <small id="emailHelp" className="form-text text-secondary">
                  Don't have an accaunting?
                  <span className='text-warning'>
                    Sign up.
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login