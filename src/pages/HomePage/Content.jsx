import React from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'

function Content (props) {
  return (
    <div className='container-fluid justify-content-between'>
      <div className='row justify-content-center'>
        <div className='col-8 title-position'>
          <div className='row justify-content-between'>
            <div className='col-2'>
              <h2>Total 14</h2>
            </div>
            <div className="dropdown col-3">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
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
       <Cards />
       <div className='col-2'>

       </div>
     </div>
    </div>
  )
}

export default Content;