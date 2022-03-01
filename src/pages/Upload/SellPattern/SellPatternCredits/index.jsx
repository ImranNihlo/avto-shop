import React from 'react'
import UploadHeader from '../../components/UploadHeader'
import DropdownList from './components/DropdownList'
import "../../upload.css"
import "../../ModalsUpload/modalsUpload.css"
import ApprovedCredit from './components/ApprovedCredit'
import ReviewCredit from './components/ReviewCredit'
import RejectedCredit from './components/RejectedCredit'

function SellPatternCredits (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <UploadHeader />
      <DropdownList />
      <div className="row justify-content-center col-8 p-0 border fw-bold bg-light radius-1v mt-3 shadow">
        <div className="row p-0 bg-colors border-title pt-3 pb-3">
          <div className="col-1">

          </div>
          <div className="col-5 text-center">
            Product
          </div>
          <div className="col-2 text-center">
            Upload date
          </div>
          <div className="col-2 text-center">
            Pattern credit
          </div>
          <div className="col-2 text-center">
            Status
          </div>
        </div>
        <ApprovedCredit />
        <ReviewCredit />
        <RejectedCredit />
      </div>
    </div>
  )
}

export default SellPatternCredits