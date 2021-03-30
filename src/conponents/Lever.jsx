import React from 'react'

const Lever = (props) => {
  

  return (
    <div className="lever">
      <button className="lever-button" onClick={props.spin}></button>
    </div>
  )
}

export default Lever
