import React from 'react'
import "./myHistory.css"
import MyHistoryHeader from './components/MyHistoryHeader'
import CardHistory from './components/CardHistory'
import ModalHistory from './components/ModalHistory'

function MyHistory (props) {
  return (
    <div className="row justify-content-center m-0 mb-2 pt-5">
      <MyHistoryHeader />
      <div className="row justify-content-center p-0">
        <hr className="col-8 mt-2"/>
      </div>
      <h5 className="col-8 mb-5 p-0 text-secondary">
        &#10053; The history storage period is one year from  the plotting date.
      </h5>
      <CardHistory />
      <CardHistory />
      <CardHistory />
      <ModalHistory />
    </div>
  )
}

export default MyHistory