import React from 'react'

interface ButtonProps {
  onClickButton: () => void
  content: string
}

const Button: React.FC<ButtonProps> = ({ onClickButton, content }) => {
  return (
    <button
      className="w-50 h-20 mx-auto rounded-2xl hover:bg-[rgba(144,144,144,0.2)] text-gray-400"
      onClick={() => {
        onClickButton()
      }}
    >
      <h1>{content}</h1>
    </button>
  )
}

export default Button
