import React from 'react'
import bmw from '../../../HomePage/images/peredniy-bamper-m3-e92-1000x750.jpg'
import Rating from '../../../HomePage/components/Rating'
import "../myProjectCompact.css"

function CardVertical (props) {
  return (
    <div className="col-8">
      <div className="row justify-content-start border bg-light radius-1v pt-3 pb-3 shadow mb-3 rel">
        <div className="col-2 align-self-center">
          <img src={bmw} alt="bmw" className="bmw-img"/>
        </div>
        <div className="col-7">
          <p className="m-0">Upload date: 2021.11.29</p>
          <h6>CANADA & USA > 2020 > BMW > 8 SERIES > CONVERTIBLE > MSPORT</h6>
          <Rating />
          <div className="font-block mt-2">
            <span className="fw-bold">
              Area
            </span>
            <div className="vr vr-line"></div>
            150.53 Sq.f (52.4sq.m)
            <span className="card-title-margin fw-bold">
              Price per Area
            </span>
            <div className="vr vr-line"></div>
            1.1 Credit (per Sq.f)
            <span className="card-title-margin fw-bold">
              Download
            </span>
            <div className="vr vr-line"></div>
            121
          </div>
        </div>
        <div className="col-3 align-self-center text-center m-0">
          <p className="m-0">
            Saved date: 2021.12.24
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardVertical