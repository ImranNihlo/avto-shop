import React from 'react'
import PersonalInformationManagementHeader from './PersonalInformationManagementHeader'
import "../../Upload/ModalsUpload/modalsUpload.css"
import "../../Auth/signUp.css"
import "./personalInformationManagement.css"
import Withdrawal from './components/Withdrawal'

function PersonalInformationManagement (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <PersonalInformationManagementHeader />
      <Withdrawal />
    </div>
  )
}

export default PersonalInformationManagement