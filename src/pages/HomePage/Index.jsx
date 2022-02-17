import React from 'react'
import BackGround from './BackGround'
import Content from './Content'
import ContentHeader from './ContentHeader'
import "./homePage.css"

function Index (props) {
  return (
    <div className='content-container'>
      <BackGround />
      <ContentHeader />
      <Content />
    </div>
  )
}

export default Index