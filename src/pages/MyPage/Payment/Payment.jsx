import React from 'react'
import paypal from "./Images/3456669.png"
import korea from "./Images/1200163.png"
import turkey from "./Images/1199501.png"
import english from "./Images/1200152.png"
import "./payment.css"
import ButtonOrButton from './components/ButtonOrButton'
{/*флаги изображения скачаны из этого сайта -https://www.iconfinder.com/search?q=britain */}

function Payment (props) {
  return (
    <div className='row justify-content-center'>
      <div className='col-3 col-center mt-5 mb-5 text-center radius-1v'>
        <div className="mt-3 mb-3">
          <img src={paypal} alt="paypal" width={30} height={30}/>
        </div>
        <h2 className='fw-bold'>
          Pay with PayPal
        </h2>
        <div className="form-check mb-4">
          <small id="emailHelp" className="form-text text-black fw-bold">
            Enter your email or mobile number to get started.
          </small>
        </div>
        <div className="form-group">
          <input type="email" className="form-control w-100"
                 id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Email or mobile number"/>
        </div>
        <div className="form-check p-0 mb-4 text-start">
          <small id="emailHelp" className="form-text text-primary fw-bold">
            Forgot email?
          </small>
        </div>
        <ButtonOrButton />
        <div className="form-check mt-5 mb-2">
          <small id="emailHelp" className="form-text text-primary fw-bold">
            Cancel and return to Gmarket
          </small>
        </div>
        <div className="btn-group">
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown"
                  aria-expanded="false">
            <img src={korea} alt="korea" width={26} height={26}/>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">
              <img src={turkey} alt="turkey" width={26} height={26}/>
              <span className="country-margin">
                  Turkey
                </span>
            </a></li>
            <li><a className="dropdown-item" href="#">
              <img src={english} alt="english" width={26} height={26}/>
              <span className="country-margin">
                  English
                </span>
            </a></li>
          </ul>
          <p className="align-self-center m-0 text-secondary">
            한국어
          </p>
          <div className="vr vr-margin align-self-center"/>
          <p className="align-self-center m-0 fw-bold">
            English
          </p>
        </div>
      </div>
    </div>
  )
}

export default Payment