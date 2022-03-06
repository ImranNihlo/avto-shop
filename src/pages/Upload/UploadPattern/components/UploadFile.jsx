import React from 'react'
import "../uploadPattern.css"

function UploadFile (props) {
  return (
    <>
      <h6 className="fw-bold px-4 mt-4">
        Upload file
      </h6>
      <div className="row px-4">
        <div className="text-center pt-4 pb-4 border border-primary">
          <p className="text-secondary">
            Drag and Drop files or Browser
          </p>
          <form>
            <div className="form-group row justify-content-center">
              <input type="file" className="custom-file-input col-2"/>
            </div>
          </form>
        </div>
        <div className="row justify-content-between border mx-0 bg-info rounded-bottom pt-1 pb-1">
          <div className="col text-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi-paperclip cursor" viewBox="0 0 16 16">
              <path
                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
            </svg>
            Pattern.svg
          </div>
          <div className="col text-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x-circle mx-2 cursor mb-1"
                 viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadFile