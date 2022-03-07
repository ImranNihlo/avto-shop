import React from 'react'
import "./myCredits.css"
import PeriodInquiry from '../../Upload/SellPattern/SellPatternEarnings/components/PeriodInquiry'
import MyCreditsDropdown from './components/MyCreditsDropdown'
import CreditHistoryTable from './components/CreditHistoryTable'

function MyCredits (props) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-8 mb-5 p-0 fw-bold">
        <h2 className="fw-bold">
          CREDIT HISTORY
        </h2>
        <hr/>
      </div>
      <div className="row justify-content-center col-8 p-0">
        <h5 className="fw-bold p-0 mb-3">
          MY CREDIT: <span className="text-primary">7,695</span> Credit
        </h5>
        <PeriodInquiry />
      </div>
      <MyCreditsDropdown />
      <CreditHistoryTable />
    </div>
  )
}

export default MyCredits