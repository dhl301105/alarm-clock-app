import AddButton from './AddButton'
import ListCard from './ListCard'
import React, { useEffect, useState } from 'react'

const Alarm: React.FC = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Alarm 1', hour: 0, minute: 0 },
    { id: 2, title: 'Alarm 2', hour: 0, minute: 0 }
  ])
  const handleAddButton = (): void => {
    const newId = ((): number | undefined => {
      for (let i = 1; i <= cards.length + 1; i++) {
        if (!cards.some((card) => card.id === i)) {
          return i
        }
      }
    })()
    const newCards = [...cards]
    newCards.push({ id: newId, title: `Alarm ${newId}`, hour: 0, minute: 0 })
    setCards(newCards)
  }
  const handleDeleteCard = (id: number): void => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }
  const handleUpdateHour = (id: number, value: number): void => {
    const hour = value
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, hour } : card)))
  }

  const handleUpdateMinute = (id: number, value: number): void => {
    const minute = value
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, minute } : card)))
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date()
      cards.forEach((card) => {
        if (card.hour === time.getHours() && card.minute === time.getMinutes()) {
          console.log(`Alarm ${card.id} is ringing`)
        }
      })
    }, 1000)
    return (): void => clearInterval(timer)
  }, [cards])
  return (
    <div className="w-full min-h-full h-max">
      <ListCard
        handleUpdateHour={handleUpdateHour}
        handleUpdateMinute={handleUpdateMinute}
        cards={cards}
        handleDeleteCard={handleDeleteCard}
      />
      <AddButton
        handleClick={() => {
          handleAddButton()
        }}
      />
    </div>
  )
}

export default Alarm
