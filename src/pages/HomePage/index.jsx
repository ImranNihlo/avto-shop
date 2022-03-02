import React from 'react'
import BackGround from './BackGround'
import Content from './Content'
import ContentHeader from './ContentHeader'
import "./homePage.css"

function HomePage (props) {
  return (
    <div className="row">
      <BackGround />
      <ContentHeader />
      <Content />
    </div>
  )
}

export default HomePage