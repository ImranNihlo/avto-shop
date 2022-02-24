import React from 'react'
import "./myProject.css"
import Card from '../../HomePage/components/Card'
import CardDeleted from '../../HomePage/components/CardDeleted'
import CardAction from '../../HomePage/components/CardAction'
import MyProjectHeader from './components/MyProjectHeader'

function MyProject (props) {
  return (
    <div className="row justify-content-center m-0 mb-2 pt-5">
      <MyProjectHeader />
      <div className="row justify-content-center">
        <hr className="col-8 hr-line mt-2 mb-5"/>
      </div>
      <div className="col-8 row justify-content-between">
        <Card />
        <CardDeleted />
        <CardAction />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default MyProject