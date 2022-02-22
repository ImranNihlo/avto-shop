import React from 'react'
import bookmark from '../images/btn_bookmark_on.svg'
import audi from '../images/audi-q5-fyb.jpg'
import profile from '../images/img_profile.jpg'
import beginner from '../images/icon_beginner.png'
import careful from '../images/bancirclelinear_106171.png'
import Rating from './Rating'

function CardAction (props) {
  return (
    <div className="col-4 mb-4">
      <div className="card-body bg-light card">
        <div className='row text-end'>
          <p>
            Upload date: 2021.11.29
            <img src={bookmark} alt='bookmark' className='px-2 card-icon'/>
          </p>
        </div>
        <img src={audi} className="card-img-top" alt="audi"/>
        <div>
          <h5 className="card-title">CANADA & USA - 2021 - TOYOTA CAMRY - SAFITY</h5>
          <h6 className="card-subtitle mb-2 text-muted">OUT FRONT > BUMPER</h6>
        </div>
        <hr/>
        <div className='row justify-content-between m-0 align-items-center'>
          <div className='col-3'>
            <Rating />
          </div>
          <div className='col-3'>
            text text
          </div>
        </div>
        <hr/>
        <div className='row justify-content-between m-0'>
          <div className='col'>
            <img src={profile} alt='profile'/>
            <span className='card_profile'>
              By name
            </span>
          </div>
          <div className='col'>
            <img src={beginner} alt='beginner'/>
            <span className='card_profile'>
              Beginner
            </span>
          </div>
        </div>
        <div className="popup">
          <div className="row justify-content-center popup-body text-white text-center m-0">
            <button type="button" className="btn btn-primary col-7 mb-3">OPEN IN EDITOR</button>
            <button type="button" className="btn btn-danger col-7">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAction