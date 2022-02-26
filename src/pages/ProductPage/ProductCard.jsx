import React from 'react'
import bookmark from '../HomePage/images/btn_bookmark_on.svg'
import audi from '../HomePage/images/audi-q5-fyb.jpg'

function ProductCard (props) {
  return (
    <div className='row justify-content-between m-0'>
      <div className='col-7 bg-light border card-radius'>
        <div className='text-sm-end pt-3 pb-5'>
          <p>
            Upload date: 2021.11.29
            <img src={bookmark} alt='bookmark' className='px-2 cart-icon'/>
          </p>
        </div>
        <img src={audi} className="card-img-top" alt="audi"/>
      </div>
      <div className='col-5 border bg-light card-right p-0 card-radius'>
        <p className='pt-3 pb-3 m-0 fw-bold px-4'>
          Description
        </p>
        <ul className="list-group">
          <li className="list-group-item border-0">
            &#67871; All the Lorem Ipsum generators on the internet tend to
            All the Lorem Ipsum generators on the internet tend to
            All the Lorem Ipsum
          </li>
          <li className="list-group-item border-0">
            &#67871; With PDC sensor
          </li>
          <li className="list-group-item border-0">
            &#67871; Morbi leo risus
          </li>
          <li className="list-group-item border-0">
            &#67871; 150.53.Sq.f(52.4)
          </li>
        </ul>
        <hr/>
        <h4 className='text-center title-text'>
          20 Credit
        </h4>
        <hr className='mb-0'/>
        <p className='pt-3 pb-2 m-0 fw-bold px-4'>
          Tag
        </p>
        <div className='row justify-content-start tags'>
          <div className='col-3 p-0 tags-div text-center rounded'>
            mercedes
          </div>
          <div className='col-1 p-0 tags-div text-center rounded'>
            gic
          </div>
          <div className='col-1 p-0 tags-div text-center rounded'>
            amg
          </div>
          <div className='col-2 p-0 tags-div text-center rounded'>
            bumper
          </div>
          <div className='col-2 p-0 tags-div text-center rounded'>
            gic43
          </div>
        </div>
        <hr className='mt-5'/>
        <div className='row justify-content-center'>
          <button type="button" className="btn btn-primary btn-lg col-10 card-btn fw-bold mb-3">
            OPEN IN EDITOR
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard