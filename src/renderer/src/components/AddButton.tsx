import React from 'react'
import CardEditAdd from './CardEditAdd'
import CardEditCard from './CardEditCard'

interface AddButtonProps {
  handleAdd: (newCard?: Partial<(typeof cards)[0]>) => void
  handleNewId: () => number
}

const AddButton: React.FC<AddButtonProps> = ({ handleNewId, handleAdd }) => {
  const [cardEdit, setCardEdit] = React.useState(false)
  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => {
          setCardEdit(true)
        }}
        className="select-none text-white w-15 h-15 rounded-2xl hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)]"
      >
        Add
      </button>
      {cardEdit && <CardEditAdd handleAdd={handleAdd} handleNewId={handleNewId} setCardEdit={setCardEdit} />}
    </div>
  )
}

export default AddButton
