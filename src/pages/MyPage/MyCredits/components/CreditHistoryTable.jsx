import React from 'react'

function CreditHistoryTable (props) {
  return (
    <div className="row col-8 border p-0 fw-bold mb-4 radius-1v bg-light shadow">
      <div className="row p-0 mx-0 pt-4 pb-4 mx-0 bg-colors border-title font-size-14">
        <div className="col-1 text-center">
          Date
        </div>
        <div className="col-3 p-0 text-center">
          Activity
        </div>
        <div className="col-2 p-0 text-center">
          Product code
        </div>
        <div className="col-1 p-0 text-center">
          Deposit
        </div>
        <div className="col-2 p-0 text-center">
          Withdrawal
        </div>
        <div className="col-1 p-0 text-center">
          Balance
        </div>
        <div className="col-2 p-0">

        </div>
      </div>
      <div className="row p-0 mx-0 pt-4 pb-4 mx-0 font-size-14 border-top">
        <div className="col-1 text-center">
          2021.08.20
        </div>
        <div className="col-3 p-0 text-center">
          Product purchase
        </div>
        <div className="col-2 p-0 text-center">
          IGF20698
        </div>
        <div className="col-1 p-0 text-center">

        </div>
        <div className="col-2 p-0 text-center text-danger">
          1,520 Credit
        </div>
        <div className="col-1 p-0 text-center">
          4,750 Credit
        </div>
        <div className="col-2 p-0 text-center">

        </div>
      </div>
      <div className="row p-0 mx-0 pt-4 pb-4 mx-0 font-size-14 border-top">
        <div className="col-1 text-center">
          2021.07.10
        </div>
        <div className="col-3 p-0 text-center">
          Pattern download
        </div>
        <div className="col-2 p-0 text-center">
          SPPF6417
        </div>
        <div className="col-1 p-0 text-center">

        </div>
        <div className="col-2 p-0 text-center text-danger">
          1,320 Credit
        </div>
        <div className="col-1 p-0 text-center">
          6,270 Credit
        </div>
        <div className="col-2 p-0 text-center">

        </div>
      </div>
      <div className="row p-0 mx-0 pt-4 pb-4 mx-0 font-size-14 border-top">
        <div className="col-1 text-center">
          2021.07.09
        </div>
        <div className="col-3 p-0 text-center">
          Credit charge
        </div>
        <div className="col-2 p-0 text-center">

        </div>
        <div className="col-1 p-0 text-center text-info">
          105 Credit
        </div>
        <div className="col-2 p-0 text-center text-danger">

        </div>
        <div className="col-1 p-0 text-center">
          7,590 Credit
        </div>
        <div className="col-2 p-0 text-center text-warning">
          <u>
            CREDITS REFUND
          </u>
        </div>
      </div>
      <div className="row p-0 mx-0 pt-4 pb-4 mx-0 font-size-14 border-top">
        <div className="col-1 text-center">
          2021.07.08
        </div>
        <div className="col-3 p-0 text-center">
          Credit charge
        </div>
        <div className="col-2 p-0 text-center">

        </div>
        <div className="col-1 p-0 text-center text-info">
          105 Credit
        </div>
        <div className="col-2 p-0 text-center text-danger">

        </div>
        <div className="col-1 p-0 text-center">
          7,695 Credit
        </div>
        <div className="col-2 p-0 text-center text-warning">
          <u>
            CREDITS REFUND
          </u>
        </div>
      </div>
    </div>
  )
}

export default CreditHistoryTable