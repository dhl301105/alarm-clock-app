import React from 'react'
import CardEditAdd from './CardEditAdd'

interface AddButtonProps {
  handleClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ handleClick }) => {
  const [cardEdit, setCardEdit] = React.useState(false)
  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => {
          handleClick()
          setCardEdit(true)
        }}
        className="select-none text-white w-15 h-15 rounded-2xl hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)]"
      >
        Add
      </button>
      {cardEdit && <CardEditAdd setCardEdit={setCardEdit} />}
    </div>
  )
}

export default AddButton
