import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1 className="text-3xl font-medium">Hello {props.username}</h1>
      <p>i help you manage your activity :) </p>
    </>
  
  )
}

export default Header