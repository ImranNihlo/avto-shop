import React from 'react'

function ProfitDetailsInputs (props) {
  return (
    <div className="col px-4">
      <p className="fw-bold">
        PayPal email
      </p>
      <input type="text" className="col-4 pb-2 pt-1 border-0 rounded"/>
      <span className="mx-1">
        @
      </span>
      <input type="email" className="col-2 border-0 rounded pb-2 pt-1"/>
      <div className="btn-group col-2 mx-2 bg-dropdown rounded">
        <button type="button" className="btn text-secondary">Direct input</button>
        <button type="button" className="btn text-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false">
          <span className="visually-hidden">Переключатель выпадающего списка</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Действие</a></li>
          <li><a className="dropdown-item" href="#">Другое действие</a></li>
          <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ProfitDetailsInputs