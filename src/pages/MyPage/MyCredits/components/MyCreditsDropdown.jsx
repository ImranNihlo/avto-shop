import React from 'react'

function MyCreditsDropdown (props) {
  return (
    <div className="row justify-content-end col-8 p-0 mt-5 mb-4">
      <div className="btn-group col-3 p-0 border">
        <button type="button" className="btn btn-light">Credits Charged (Pattern)</button>
        <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Переключатель выпадающего списка</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">All</a></li>
          <li><a className="dropdown-item" href="#">Approved</a></li>
          <li><a className="dropdown-item" href="#">In review</a></li>
          <li><a className="dropdown-item" href="#">Rejected</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MyCreditsDropdown