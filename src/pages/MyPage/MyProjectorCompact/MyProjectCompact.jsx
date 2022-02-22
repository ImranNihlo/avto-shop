import React from 'react'
import "./myProjectCompact.css"
import MyProjectCompactheader from './components/MyProjectCompactheader'
import CardVertical from './components/CardVertical'

function MyProjectCompact (props) {
  return (
    <div className="row justify-content-center m-0 mb-2 pt-5">
      <MyProjectCompactheader />
      <div className="row justify-content-center">
        <hr className="col-8 mt-2"/>
      </div>
      <h5 className="col-8 mb-5 p-0">
        'BMW Msport' PATTERN ASSET LIST
      </h5>
      <CardVertical />
      <CardVertical />
      <CardVertical />
    </div>
  )
}

export default MyProjectCompact;