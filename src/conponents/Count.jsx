import React from 'react'

const Count = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div className="count">{props.count}</div>
    </div>
  )
}

export default Count
