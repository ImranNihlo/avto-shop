import React from 'react'
import "./upload.css"
import UploadHeader from './components/UploadHeader'
import AutoInfo from './components/AutoInfo'
import power from '../HomePage/images/power.svg'
import AutoSearch from './components/AutoSearch'
import UploadBottomRow from './components/UploadBottomRow'

function Upload (props) {
  return (
    <div className="row justify-content-center pt-5">
      <UploadHeader />
      <AutoInfo />
      <AutoSearch />
      <UploadBottomRow />
    </div>
  )
}

export default Upload;