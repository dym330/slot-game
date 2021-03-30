import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="stopBtn" onClick={props.stop}></button>
    </div>
  )
}

export default Button
