import React from 'react'
import "./myHistory.css"
import MyHistoryHeader from './MyHistoryHeader'
import CardHistory from './CardHistory'

function MyHistory (props) {
  return (
    <div className="row justify-content-center m-0 mb-2 pt-5">
      <MyHistoryHeader />
      <div className="row justify-content-center">
        <hr className="col-8 mt-2"/>
      </div>
      <h5 className="col-8 mb-5 p-0 text-secondary fw-bold">
        &#10053; The history storage period is one year from  the plotting date.
      </h5>
      <CardHistory />
    </div>
  )
}

export default MyHistory