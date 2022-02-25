import React from 'react'

function CheckboxSubCategory (props) {
  return (
    <div className="row px-4">
      <div className="col-12 border pt-3 pb-3 rounded-bottom">
        <div className="form-check form-check-inline">
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Bumper</label>
          </div>
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Trunk</label>
          </div>
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1"/>
            <label className="form-check-label" htmlFor="inlineCheckbox3">Roof</label>
          </div>
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2"/>
            <label className="form-check-label" htmlFor="inlineCheckbox4">Rear Fender</label>
          </div>
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1"/>
            <label className="form-check-label" htmlFor="inlineCheckbox5">Tail Lamp</label>
          </div>
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option2"/>
            <label className="form-check-label" htmlFor="inlineCheckbox6">Bikini</label>
          </div>
        </div>
        <div className="form-check form-check-inline">
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1"/>
            <label className="form-check-label" htmlFor="inlineCheckbox7">Wrapped</label>
          </div>
          <div className="form-check form-check-inline px-4">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2"/>
            <label className="form-check-label" htmlFor="inlineCheckbox8">Sensors</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckboxSubCategory