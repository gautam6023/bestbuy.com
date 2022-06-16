import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <Link to='/prod'>product</Link>
        <Link to= '/cart'>Cart</Link>
    </div>
  )
}
