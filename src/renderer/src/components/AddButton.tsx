import React from 'react'

interface AddButtonProps {
  handleClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ handleClick }) => {
  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => {
          handleClick()
        }}
        className="select-none text-white w-15 h-15 rounded-2xl hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)]"
      >
        Add
      </button>
    </div>
  )
}

export default AddButton
