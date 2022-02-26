import React from 'react'

function UploadFileChange (props) {
  return (
    <>
      <h6 className="fw-bold px-4 mt-4">
        Upload file
      </h6>
      <div className="px-4">
        <div className="text-start border bg-info rounded px-3 pt-1 pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi-paperclip cursor" viewBox="0 0 16 16">
            <path
              d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
          </svg>
          Pattern.svg
        </div>
      </div>
    </>
  )
}

export default UploadFileChange