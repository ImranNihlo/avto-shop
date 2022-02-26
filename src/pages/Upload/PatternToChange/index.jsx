import React from 'react'
import PatternToChangeHeader from './components/PatternToChangeHeader'
import UploadCategory from '../UploadPattern/components/UploadCategory'
import PricePerArea from '../UploadPattern/components/PricePerArea'
import Pattern from './components/Pattern'
import UploadFile from '../UploadPattern/components/UploadFile'
import UploadBottom from '../UploadPattern/components/UploadBottom'
import UploadFileChange from './components/UploadFileChange'
import AddPattern from '../UploadPattern/components/AddPattern'

function PatternToChange (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <div className="col-8 p-0">
        <PatternToChangeHeader />
        <div className="col bg-light border radius-1v px-4 pt-4 mt-5 pb-4">
          <UploadCategory />
          <div className="row justify-content-center mt-5 border radius-1v mx-1 pb-5">
            <Pattern />
            <PricePerArea />
            <UploadFileChange />
            <UploadBottom />
          </div>
          <div className="col-12 text-center mt-5">
            <button type="button" className="btn btn-primary col-4 radius-2v fw-bold height pb-2">
              Approval request
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatternToChange