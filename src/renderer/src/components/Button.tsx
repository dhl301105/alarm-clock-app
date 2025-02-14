import React from 'react'

interface ButtonProps {
  onClickButton: () => void
  content: string
  page: string
  name: string
}

const Button: React.FC<ButtonProps> = ({ onClickButton, name, content, page }) => {
  return (
    <button
      className={`${
        page === name ? 'bg-[rgba(144,144,144,0.1)]' : ''
      } select-none w-50 h-20 mx-auto mb-5 rounded-2xl hover:bg-[rgba(144,144,144,0.2)] text-gray-400`}
      onClick={() => {
        onClickButton()
      }}
    >
      <h1>{content}</h1>
    </button>
  )
}

export default Button
