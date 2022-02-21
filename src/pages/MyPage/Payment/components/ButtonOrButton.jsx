import React from 'react'

function ButtonOrButton (props) {
  return (
    <>
      <button type="submit" className="btn btn-primary w-100 radius-2v blue fw-bold height">Next</button>
      <div className='row justify-content-between pt-2'>
        <div className='col-5'>
          <hr/>
        </div>
        <p className='col text-secondary'>
          Or
        </p>
        <div className='col-5'>
          <hr/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100 radius-2v blue fw-bold height text-primary bg-light mb-2">
        Pay with a Card
      </button>
    </>
  )
}

export default ButtonOrButton