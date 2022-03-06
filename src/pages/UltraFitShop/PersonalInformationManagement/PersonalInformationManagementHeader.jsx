import React from 'react'

function PersonalInformationManagementHeader (props) {
  return (
    <div className="col-8 mb-5 p-0 fw-bold">
      <h2 className="fw-bold">
        PERSONAL INFORMATION MANAGEMENT
      </h2>
      <hr/>
      <div className="row justify-content-between mx-0">
        <div className="col-4 border start-radius text-center height bg-light cursor text-secondary pt-2">
          Edit personal information
        </div>
        <div className="col-4 border-top border-bottom text-center height bg-light cursor text-secondary pt-2">
          Edit subscription history
        </div>
        <div className="col-4 border border-start-0 end-radius text-center
                        cursor height management-header-active pt-2">
          Withdrawal
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationManagementHeader