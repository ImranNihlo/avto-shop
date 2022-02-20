import React from 'react'

function SignUp (props) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-5 col-center mt-5 text-center radius-1v'>
          <h2 className='mt-5 fw-bold'>
            SIGN UP
          </h2>
          <div className="form-check mb-4 p-0">
            <small id="emailHelp" className="form-text text-secondary">
              Welcome to your Ultrafit Regisyration.
            </small>
          </div>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <div className='form-group text-start mb-3'>
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Profile</label>
                <form className="form-profile">
                  <div className="row m-0 mt-3 mb-3">
                    <div className='col-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor"
                           className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg>
                    </div>
                    <div className="col-9 pt-3">
                      <input type="file" className="custom-file-input file-input bg-primary radius-1v text-white"
                             id="customFile"/>
                      <div className="form-check p-0">
                        <small id="emailHelp" className="form-text text-secondary fw-normal">
                          You can upload files by PNG, JPG, GIF
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control border-0 border-top" placeholder="Nick name"/>
                  </div>
                </form>
                <div className="form-check p-0">
                  <small id="emailHelp" className="form-text text-danger fw-normal">
                    Enter Nick name.
                  </small>
                </div>
              </div>
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
                  <div className="form-check mb-3 p-0">
                    <small id="emailHelp" className="form-text text-danger fw-normal">
                      Enter Email.
                    </small>
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
                    <div className="col-3 align-self-center text-center">
                      <button type="button" className="btn btn-primary btn-sm radius-1v">
                        VERIFY
                      </button>
                    </div>
                  </div>
                  <div className="form-check mb-3 p-0">
                    <small id="emailHelp" className="form-text text-danger fw-normal">
                      Please confirm verification code.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mb-0">Password</label>
                    <div className="form-check p-0">
                      <small id="emailHelp" className="form-text text-secondary fw-normal">
                        Set a least 8 characters using a combination letters, numbers, and special characters.
                      </small>
                    </div>
                    <form>
                      <div>
                        <input type="password" className="form-control w-100 rounded-0 rounded-top border-bottom-0"
                               id="exampleInputPassword2" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control w-100 rounded-0 rounded-bottom"
                               id="exampleInputPassword3" placeholder="Retype password"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter password.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <form>
                      <div>
                        <input type="text" className="form-control rounded-0 rounded-top border-bottom-0"
                               placeholder="First name"/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control rounded-0 rounded-bottom"
                               placeholder="Last name"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter first name and last name.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Mobile Phone</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter mobile phone.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Company name</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter company name.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address 1</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter address 1.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address 2</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter address 2.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Town / City</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter town / city.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">State / Province / Region</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter state / province / region.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Zip / Postal Code</label>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter zip / postal code.
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                    <form>
                      <select id="inputState" className="form-control">
                        <option selected>Выбрать...</option>
                        <option>Sweden</option>
                        <option>Canada</option>
                        <option>Turkey</option>
                      </select>
                    </form>
                    <div className="form-check mb-3 p-0">
                      <small id="emailHelp" className="form-text text-danger fw-normal">
                        Enter country.
                      </small>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp