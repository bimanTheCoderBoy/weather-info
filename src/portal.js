import React from 'react'
import { ReactDOM } from 'react'
import "./style.css"

const Portal =React.forwardRef((props,ref) => {
  return (
    <div  ref={ref} className='error'>
      <h3>City not Found</h3>
    </div>
  )
})

export default Portal
