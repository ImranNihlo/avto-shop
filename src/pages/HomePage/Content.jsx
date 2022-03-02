import React from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'

function Content (props) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center row-position'>
        <div className='col-8'>
          <div className='row justify-content-between'>
            <div className='col title-left'>
              <h2>Total 14</h2>
            </div>
            <div className="dropdown col dropdown-right text-end">
              <a className="btn btn-secondary btn-title dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                 data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-between'>
        <Sidebar />
        <div className="col-8 row justify-content-between cards">
          <Cards />
        </div>
        <div className='col-2'>

        </div>
      </div>
    </div>
  )
}

export default Content;