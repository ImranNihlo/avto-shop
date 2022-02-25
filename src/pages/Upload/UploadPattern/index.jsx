import React from 'react'
import UploadPatternsHeader from './components/UploadPatternsHeader'
import UploadCategory from './components/UploadCategory'
import UploadSubCategory from './components/UploadSubCategory'
import PricePerArea from './components/PricePerArea'
import UploadFile from './components/UploadFile'
import UploadBottom from './components/UploadBottom'
import AddPattern from './components/AddPattern'

function UploadPattern (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <div className="col-8 p-0">
        <UploadPatternsHeader />
        <div className="col bg-light border radius-1v px-4 pt-4 mt-5 pb-4">
          <UploadCategory />
          <div className="row justify-content-center mt-5 border radius-1v mx-1 pb-5">
            <UploadSubCategory />
            <PricePerArea />
            <UploadFile />
            <UploadBottom />
          </div>
          <AddPattern />
        </div>
      </div>
    </div>
  )
}

export default UploadPattern