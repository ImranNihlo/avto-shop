import React from 'react'
import "./upload.css"

function SellPattern (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <div className="col-8 p-0">
        <h2 className="fw-bold">
          SELL PATTERN
        </h2>
        <hr/>
        <div className="bg-light mt-4 radius-1v pt-5 pb-4 px-4 shadow">
          <h5 className="fw-bold mb-3">
            Upload application
          </h5>
          <p>
            If you patterns for specific car models, and you own all the rights, you can register to become a PLOFIX
            partner and start earning money with the simple upload process. <br/>
            You stay in control of your patterns once they are approved to be merchandised on PLOFIX, and you will be
            able set the fee for each pattern. Once you start generating income, you will be able to withdraw your
            earnings through your personal PayPal account.<br/>
            Our customers (installers) from all over the world are looking for accurate and precise patterns to
            download and plot using our editor program and a film plotting machine.<br/>
            Click "UPLOAD" to start offering them patterns and generating income.
          </p>
          <div className="text-center">
            <button type="button" className="btn btn-primary btn-lg col-5 radius-2v mt-4 mb-2">START</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellPattern