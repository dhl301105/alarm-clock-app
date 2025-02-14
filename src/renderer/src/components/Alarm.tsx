import AddButton from './AddButton'
import ListCard from './ListCard'
import React, { useState } from 'react'

const Alarm: React.FC = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Alarm 1' },
    { id: 2, title: 'Alarm 2' }
  ])
  const handleAddButton = (): void => {
    const newCards = [...cards]
    newCards.push({ id: newCards.length + 1, title: `Alarm ${newCards.length + 1}` })
    setCards(newCards)
  }
  const handleDeleteCard = (id: number): void => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }
  return (
    <div className="w-full min-h-full h-max">
      <ListCard cards={cards} handleDeleteCard={handleDeleteCard} />
      <AddButton
        handleClick={() => {
          handleAddButton()
        }}
      />
    </div>
  )
}

export default Alarm
