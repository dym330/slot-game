import React from 'react'
import Button from './Button'

const Buttons = (props) => {
  return (
    <div className="buttons">
      <Button stop={props.stop1}/>
      <Button stop={props.stop2}/>
      <Button stop={props.stop3}/>
    </div>
  )
}

export default Buttons
