import AddButton from './AddButton'
import ListCard from './ListCard'
import React, { useEffect, useState } from 'react'

const Alarm: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Alarm 1',
      hour: '00',
      minute: '00',
      days: [false, false, false, false, false, false, false],
      isRinged: false
    },
    {
      id: 2,
      title: 'Alarm 2',
      hour: '00',
      minute: '00',
      days: [false, false, false, false, false, false, false],
      isRinged: false
    }
  ])
  const handleSetDays = (id: number, indexDays: number): void => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          const newDays = [...card.days]
          newDays[indexDays] = !newDays[indexDays]
          return { ...card, days: newDays }
        }
        return card
      })
    })
  }
  const handleAddButton = (): void => {
    const newId = ((): number | undefined => {
      for (let i = 1; i <= cards.length + 1; i++) {
        if (!cards.some((card) => card.id === i)) {
          return i
        }
      }
    })()
    const newCards = [...cards]
    newCards.push({
      id: newId,
      title: `Alarm ${newId}`,
      hour: '00',
      minute: '00',
      days: [false, false, false, false, false, false, false],
      isRinged: false
    })
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
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (
            parseInt(card.hour) === time.getHours() &&
            parseInt(card.minute) === time.getMinutes() &&
            !card.isRinged
          ) {
            console.log(`Alarm ${card.id} is ringing`)
            return { ...card, isRinged: true }
          } else if (parseInt(card.minute) !== time.getMinutes()) {
            return { ...card, isRinged: false }
          }
          return card
        })
      )
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
        handleSetDays={handleSetDays}
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
