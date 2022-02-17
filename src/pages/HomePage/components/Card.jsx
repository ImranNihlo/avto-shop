import React from 'react'
import bookmark from '../images/btn_bookmark_on.svg'
import audi from '../images/audi-q5-fyb.jpg'
import profile from "../images/img_profile.jpg"
import beginner from "../images/icon_beginner.png"

function Card (props) {
  return (
    <div className="col">
      <div className="card">
        <div className='row align-self-end pt-3 pb-3'>
          <p>
            Upload date: 2021.11.29
            <img src={bookmark} alt='bookmark' className='px-2 card-icon'/>
          </p>
        </div>
        <img src={audi} className="card-img-top" alt="audi"/>
        <div className="card-body pb-0">
          <h5 className="card-title">CANADA & USA - 2021 - TOYOTA CAMRY - SAFITY</h5>
          <p className="card-text">Out Front</p>
        </div>
        <hr/>
        <div className='row justify-content-between m-0 align-items-center'>
          <div className='col-3'>
            rating
          </div>
          <div className='col-3'>
            text text
          </div>
        </div>
        <hr/>
        <div className='row justify-content-between m-0 mb-2'>
          <div className='col-5'>
            <img src={profile} alt='profile'/>
            <span className='card_profile'>
              By name
            </span>
          </div>
          <div className='col-5'>
            <img src={beginner} alt='beginner'/>
            <span className='card_profile'>
              Beginner
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card