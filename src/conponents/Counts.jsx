import React from 'react'
import Count from './Count'

const Counts = (props) => {
  return (
    <div className="counts">
      <Count title={"credit"} count={props.credit}/>
      <Count title={"payment"} count={props.payment}/>
    </div>
  )
}

export default Counts
