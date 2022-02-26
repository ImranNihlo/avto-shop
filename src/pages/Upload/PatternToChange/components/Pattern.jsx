import React from 'react'

function Pattern (props) {
  return (
    <div className="row justify-content-between pt-3 pb-3 border-bottom">
      <div className="col align-self-center">
        <h6 className="fw-bold m-0">
          Pattern 1.
        </h6>
      </div>
      <div className="col text-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi-caret-down-fill cursor" viewBox="0 0 16 16">
          <path
            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </div>
    </div>
  )
}

export default Pattern