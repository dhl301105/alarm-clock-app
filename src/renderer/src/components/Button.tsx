import React from 'react'

interface ButtonProps {
  handleClick: () => void
  className?: string
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, handleClick, className }) => {
  return (
    <button
      onClick={() => {
        handleClick()
      }}
      className={className}
    >
      {children}
    </button>
  )
}

export default Button
