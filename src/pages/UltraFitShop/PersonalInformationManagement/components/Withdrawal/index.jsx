import React from 'react'
import ModalWithdrawal from './ModalWithdrawal'

function Withdrawal (props) {
  return (
    <div className="col-8 border radius-1v shadow bg-light pt-5 pb-5 px-4">
      <h5 className="fw-bold">
        Delete account
      </h5>
      <span className="font-size-14">
        Please reed this carefully. Deleting your account is permanent and data loss is irretrievable.<br/>
        You're about to submit a request to delete your personal PLOFIX account, which provides access to various
        patterns. If you delete your account, you will no longer have access to those products and services,
        all your account data and assets will be lost, and you will no longer be able to log into to restore
        your account or the data, you stored with PLOFIX. All of your data and assets will automatically be
        scheduler for deletion from PLOFIX's servers.<br/>
        Additionally, PLOFIX may not be able to provide you with payments you might be expecting, such as
        reimbursement for a subscription plan or payment for assets you've sold on PLOFIX.
      </span>
      <h6 className="fw-bold mt-4 m-0">
        Loss of data and assets
      </h6>
      <p className="text-secondary font-size-14">
        Here are consequences of deleting your PLOFIX account:
      </p>
      <p className="font-size-14 m-0">
        - You will lose access to PLOFIX services, such as 'Edit & Plot' or 'Upload' and pattern database;
      </p>
      <p className="font-size-14 m-0">
        - All your saved projects will be deleted, and unused credit packs will be forfeited;
      </p>
      <p className="font-size-14 m-0">
        - All data stored in PLOFIX will be permanently lost;
      </p>
      <p className="font-size-14 m-0">
        - You won't be able to use your email to sign in to PLOFIX
      </p>
      <h6 className="fw-bold mt-4 m-0">
        Payou request
      </h6>
      <p className="font-size-14">
        - If you earnings make up $30 and above, you may click here to request a payout before deleting
        your account.
      </p>
      <button type="button" className="btn btn-outline-primary fw-bold">Withdrawal request</button>
      <div className="text-center mt-5">
        <input className="form-check-input mx-1" type="checkbox" value="" id="withdrawalCheck"/>
        <label className="form-check-label font-size-14" htmlFor="withdrawalCheck">
          I have reed and agree to the terms listed above.
        </label>
      </div>
      <div className="text-center mt-5">
        <button type="button" className="btn btn-primary col-5 radius-2v fw-bold height">
          WITHDRAWAL
        </button>
      </div>
    </div>
  )
}

export default Withdrawal