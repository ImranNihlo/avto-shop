import React from 'react'
import icons from '../../../images/arrow-down-circle-fill.svg'
import audi from '../../../images/audi-q5-fyb.jpg'

function Card (props) {
  return (
    <div className="col">
      <div className="card">
        <div className='row align-self-end pt-3 pb-3'>
          <p className="card-text">
            Out Front
            <img src={icons} alt='icons' className='px-2'/>
          </p>
        </div>
        <img src={audi} className="card-img-top" alt="audi"/>
        <div className="card-body">
          <h5 className="card-title">CANADA & USA - 2021 - TOYOTA CAMRY - SAFITY</h5>
          <p className="card-text">Out Front</p>
        </div>
        <div className='row justify-content-between m-0 align-items-center'>
          <div className='col-3'>
            rating
          </div>
          <div className='col-3'>
            text text
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card