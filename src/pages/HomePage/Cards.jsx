import React from 'react'
import audi from "./images/audi-q5-fyb.jpg";
import icons from "./images/arrow-down-circle-fill.svg"
import Card from './components/Card'

function Cards (props) {
  return (
    <div className='row col-8 cards'>
      <div className="row row-cols-1 row-cols-md-3 g-4 cards-position">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Cards