import React from 'react'
import "./myPage.css"
import Cards from '../HomePage/Cards'

function MyPage (props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center m-0 mb-2 pt-5">
        <div className='col-8 row justify-content-between'>
          <div className="col-2">
            <h2 className="padding-title">BOOKMARK</h2>
          </div>
          <div className="col-10">
            <form className="row justify-content-end">
                <p className="col-2 period-top">
                  Period inquiry
                </p>
                  <div className="col-3 bg-white height radius-1v">
                      <input type="date" name="calendar" className="rounded border-0"/>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                           className="bi bi-calendar-date text-black mb-1" viewBox="0 0 16 16">
                        <path
                          d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                        <path
                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg>
                  </div>
                  <p className="col-1 period-top period-width">
                    ~
                  </p>
                  <div className="col-3 bg-white height radius-1v">
                    <input type="date" name="calendar" className="rounded border-0"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-calendar-date text-black mb-1" viewBox="0 0 16 16">
                      <path
                        d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    </svg>
                  </div>
                  <button type="button" className="btn btn-primary btn-sm fw-bold col-2 height width-button">
                    INQUIRY
                  </button>
              </form>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <hr className="col-8 hr-line"/>
      </div>
      <div className="row justify-content-center">
          <Cards />
      </div>
    </div>
  )
}

export default MyPage;