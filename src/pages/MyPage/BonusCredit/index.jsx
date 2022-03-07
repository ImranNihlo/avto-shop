import React from 'react'
import "./bonusCredit.css"
import BonusCreditHeader from './components/BonusCreditHeader'
import BonusCreditContentHeader from './components/BonusCreditContentHeader'
import BonusCreditDivAndButton from './components/BonusCreditDivAndButton'
import BonusCreditTable from './components/BonusCreditTable'

function BonusCredit (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <BonusCreditHeader />
      <div className="col-6 border bg-light p-0 radius-1v pt-5">
        <BonusCreditContentHeader />
        <BonusCreditDivAndButton />
        <BonusCreditTable />
      </div>
    </div>
  )
}

export default BonusCredit