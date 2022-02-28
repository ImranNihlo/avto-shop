import React from 'react'

function DropdownList (props) {
  return (
    <div className="row justify-content-end col-8 p-0">
      <div className="btn-group col-2 p-0">
        <button type="button" className="btn btn-light">All</button>
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

export default DropdownList