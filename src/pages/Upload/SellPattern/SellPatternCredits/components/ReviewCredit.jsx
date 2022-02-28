import React from 'react'
import bmw from '../../../../HomePage/images/peredniy-bamper-m3-e92-1000x750.jpg'

function ReviewCredit (props) {
  return (
    <div className="row p-0 border-top pt-2 pb-2">
      <div className="col-2">
        <img src={bmw} alt="bmw"/>
      </div>
      <div className="col-4 align-self-center p-0">
        CANADA & USA > 2020 > Mercedes BENZ > GLC COUPE > AMG GLC 43
      </div>
      <div className="col-2 text-center align-self-center">
        2012.12.01
      </div>
      <div className="col-2 text-center align-self-center">
        20 Credit
      </div>
      <div className="col-2 text-center align-self-center">
        In review
      </div>
    </div>
  )
}

export default ReviewCredit