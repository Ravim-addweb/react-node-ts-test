import React from 'react'

const Button = ((props: { text: string}) => {
  const { text } = props
  return (
    <button>{text}</button>
  )
})

export default Button