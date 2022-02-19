import React from 'react'
import profile from '../HomePage/images/img_profile.jpg'
import beginner from '../HomePage/images/icon_beginner.png'
import bookmark from '../HomePage/images/btn_bookmark_on.svg'
import audi from '../HomePage/images/audi-q5-fyb.jpg'
import ProductCard from './ProductCard'

function ContentProduct (props) {
  return (
    <div className='row justify-content-center'>
      <div className='col-8'>
        <p className='text-secondary m-0'>
          CANADA & USE > 2020 > Mercedec Benz > GLC COUPE > AMG GLC 43
        </p>
        <h3 className='fw-bold m-0'>
          Out Front - Bumper
        </h3>
        <p>
          Rating
        </p>
        <div className='row justify-content-between'>
          <div className='col-2'>
            <img src={profile} alt='profile'/>
            <span className='card_profile'>
              By name
            </span>
          </div>
          <div className='col-4 row justify-content-between'>
            <div className='col text-sm-end p-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-chat-square-text text-secondary mb-1" viewBox="0 0 16 16">
                <path
                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path
                  d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <span className='card_profile'>
              60 Reviews
            </span>
            </div>
            <div className='col text-center p-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-arrow-down-circle text-secondary mb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
              <span className='card_profile'>
              158 Downloads
              </span>
            </div>
          </div>
        </div>
        <hr/>
        <ProductCard />
      </div>
    </div>
  )
}

export default ContentProduct