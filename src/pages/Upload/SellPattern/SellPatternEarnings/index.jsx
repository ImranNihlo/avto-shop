import React from 'react'
import UploadHeader from '../../components/UploadHeader'
import "../../upload.css"
import "../../ModalsUpload/modalsUpload.css"
import PeriodInquiry from './components/PeriodInquiry'
import SellPatternEarningsCard from './components/SellPatternEarningsCard'

function SellPatternEarnings (props) {
  return (
    <div className="row justify-content-center pt-5">
      <UploadHeader />
      <div className="row justify-content-between col-8 bg-light border radius-1v shadow mb-5">
        <div className="col row justify-content-between">
          <div className="col pt-4 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi-upload cursor" viewBox="0 0 16 16">
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path
                d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
            <p className="fw-bold m-0">
              Uploads
            </p>
          </div>
          <div className="col text-end text-primary fw-bold border-end align-self-center pt-3 pb-3">
            6
          </div>
        </div>
        <div className="col row justify-content-between">
          <div className="col pt-4 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi-download cursor" viewBox="0 0 16 16">
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            <p className="fw-bold m-0">
              Downloads
            </p>
          </div>
          <div className="col text-end text-primary fw-bold border-end align-self-center pt-3 pb-3">
            42
          </div>
        </div>
        <div className="col row justify-content-between">
          <div className="col pt-4 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi-terminal-plus cursor" viewBox="0 0 16 16">
              <path
                d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z"/>
              <path
                d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
            </svg>
            <p className="fw-bold m-0">
              Earnings
            </p>
            <div className="col font-size-12 text-secondary align-self-center cursor">
              Payout request >
            </div>
          </div>
          <div className="col text-end text-primary fw-bold align-self-center pt-3 pb-3">
            35,522USD
          </div>
        </div>
      </div>
      <div className="row justify-content-center col-8 p-0">
        <h4 className="fw-bold p-0 mb-3">
          PERIOD INQUIRY
        </h4>
        <PeriodInquiry />
      </div>
      <div className="row col-8 border p-0 fw-bold mt-4 mb-4 radius-1v bg-light shadow">
        <div className="row p-0 mx-0 pt-3 pb-3 mx-0 bg-colors border-title">
          <div className="col-2 px-5">
            Date
          </div>
          <div className="col-4 text-center">
            Pattern asset
          </div>
          <div className="col-2 text-center">
            Nickname
          </div>
          <div className="col-2 text-center">
            Plotted area
          </div>
          <div className="col-2 text-center">
            Earnings
          </div>
        </div>
        <SellPatternEarningsCard />
        <SellPatternEarningsCard />
        <SellPatternEarningsCard />
      </div>
    </div>
  )
}

export default SellPatternEarnings
