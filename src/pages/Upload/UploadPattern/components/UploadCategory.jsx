import React from 'react'

function UploadCategory (props) {
  return (
    <>
      <div className="row justify-content-between border-bottom pb-3">
        <div className="col">
          <h6 className="col m-0 align-self-center fw-bold">
            Category
          </h6>
          <div className="form-check p-0">
            <small id="emailHelp" className="form-text text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-snow2 mb-1"
                   viewBox="0 0 16 16">
                <path
                  d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/>
              </svg>
              <span className="mx-1">
                  Please select all the required fields
              </span>
            </small>
          </div>
        </div>
        <div className="col text-end align-self-center">
          <button type="button" className="btn text-warning fw-bold radius-1v">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle mb-1 mx-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Register new car
          </button>
        </div>
      </div>
      <div className="row justify-content-between border-bottom pt-4 pb-4">
        <div className="col-4 mb-3">
          <p className="fw-bold m-0 mb-1">
            Country
          </p>
          <div className="dropdown border w-100 btn">
            <label data-bs-toggle="dropdown" className="row justify-content-between mx-1">
              <button className="col bg-light border-0 text-start">
                Canada & USA
              </button>
              <button className="dropdown-toggle col-1 border-0 bg-light">
              </button>
            </label>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Действие</a></li>
              <li><a className="dropdown-item" href="#">Другое действие</a></li>
              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4 mb-3">
          <p className="fw-bold m-0 mb-1">
            Year
          </p>
          <div className="dropdown border w-100 btn">
            <label data-bs-toggle="dropdown" className="row justify-content-between mx-1">
              <button className="col bg-light border-0 text-start">
                2020
              </button>
              <button className="dropdown-toggle col-1 border-0 bg-light">
              </button>
            </label>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Действие</a></li>
              <li><a className="dropdown-item" href="#">Другое действие</a></li>
              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4 mb-3">
          <p className="fw-bold m-0 mb-1">
            Brand
          </p>
          <div className="dropdown border w-100 btn">
            <label data-bs-toggle="dropdown" className="row justify-content-between mx-1">
              <button className="col bg-light border-0 text-start">
                GENESIS
              </button>
              <button className="dropdown-toggle col-1 border-0 bg-light">
              </button>
            </label>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Действие</a></li>
              <li><a className="dropdown-item" href="#">Другое действие</a></li>
              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4 mb-3">
          <p className="fw-bold m-0 mb-1">
            Model
          </p>
          <div className="dropdown border w-100 btn">
            <label data-bs-toggle="dropdown" className="row justify-content-between mx-1">
              <button className="col bg-light border-0 text-start">
                G70
              </button>
              <button className="dropdown-toggle col-1 border-0 bg-light">
              </button>
            </label>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Действие</a></li>
              <li><a className="dropdown-item" href="#">Другое действие</a></li>
              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4 mb-3">
          <p className="fw-bold m-0 mb-1">
            Sub Model
          </p>
          <div className="dropdown border w-100 btn">
            <label data-bs-toggle="dropdown" className="row justify-content-between mx-1">
              <button className="col bg-light border-0 text-start">
                Advanced
              </button>
              <button className="dropdown-toggle col-1 border-0 bg-light">
              </button>
            </label>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Действие</a></li>
              <li><a className="dropdown-item" href="#">Другое действие</a></li>
              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </div>
        </div>
        <div className="col-4 mb-3">
          <p className="fw-bold m-0 mb-1">
            Series
          </p>
          <div className="dropdown border w-100 btn">
            <label data-bs-toggle="dropdown" className="row justify-content-between mx-1">
              <button className="col bg-light border-0 text-start">
                Select Series
              </button>
              <button className="dropdown-toggle col-1 border-0 bg-light">
              </button>
            </label>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Действие</a></li>
              <li><a className="dropdown-item" href="#">Другое действие</a></li>
              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadCategory