import React from 'react'
import bmw from '../../HomePage/images/peredniy-bamper-m3-e92-1000x750.jpg'
import Rating from '../../HomePage/components/Rating'

function CardHistory (props) {
  return (
    <div className="col-8">
      <div className="row justify-content-start border bg-light radius-1v pt-3 pb-3 shadow mb-3">
        <div className="col-2 align-self-center">
          <img src={bmw} alt="bmw" className="bmw-img"/>
        </div>
        <div className="col-7">
          <p className="m-0">Plotted date: 2021.11.29</p>
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
          <p className="m-0 text-warning fw-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-pen write"
                 viewBox="0 0 16 16">
              <path
                d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
            </svg>
            Write a review
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardHistory