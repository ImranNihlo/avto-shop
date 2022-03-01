import React from 'react'
import UploadHeader from '../components/UploadHeader'
import PeriodInquiry from '../SellPattern/SellPatternEarnings/components/PeriodInquiry'
import DropdownList from '../SellPattern/SellPatternCredits/components/DropdownList'
import "../upload.css"
import "../ModalsUpload/modalsUpload.css"
import EarningCategory from './components/EarningCategory'
import SponsorAdCategory from './components/SponsorAdCategory'
import PayoutCategory from './components/PayoutCategory'
import ShopCategory from './components/ShopCategory'

function TransactionHistory (props) {
  return (
    <div className="row justify-content-center pt-5">
      <UploadHeader />
      <div className="row justify-content-center col-8 p-0 mb-5">
        <h5 className="fw-bold p-0 mb-3">
          Current balance: 35,522 Profit
        </h5>
        <PeriodInquiry />
      </div>
      <DropdownList />
      <div className="row col-8 border p-0 fw-bold mt-4 mb-4 radius-1v bg-light shadow">
        <div className="row p-0 mx-0 pt-3 pb-3 bg-colors border-title">
          <div className="col-2 px-5">
            Date
          </div>
          <div className="col-4 text-center">
            Category
          </div>
          <div className="col-2 text-center">
            Deposit
          </div>
          <div className="col-2 text-center">
            Withdrawal
          </div>
          <div className="col-2 text-center">
            Balance
          </div>
        </div>
        <EarningCategory />
        <SponsorAdCategory />
        <PayoutCategory />
        <ShopCategory />
      </div>
    </div>
  )
}

export default TransactionHistory