import AddButton from './AddButton'
import ListCard from './ListCard'
import React, { useEffect, useState } from 'react'

const Alarm: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Alarm 1',
      hour: '0',
      minute: '0',
      days: [false, false, false, false, false, false, false],
      isRinged: false,
      toggle: false
    },
    {
      id: 2,
      title: 'Alarm 2',
      hour: '0',
      minute: '0',
      days: [false, false, false, false, false, false, false],
      toggle: false,
      isRinged: false
    }
  ])
  const handleTitle = (id: number, title: string): void => {
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, title } : card)))
  }
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
    const newId = ((): number => {
      for (let i = 1; i <= cards.length + 1; i++) {
        if (!cards.some((card) => card.id === i)) {
          return i
        }
      }
      return cards.length + 1
    })()
    const newCards = [...cards]
    newCards.push({
      id: newId,
      title: `Alarm ${newId}`,
      hour: '0',
      minute: '0',
      days: [false, false, false, false, false, false, false],
      isRinged: false,
      toggle: true
    })
    setCards(newCards)
  }

  const handleToggle = (id: number): void => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, toggle: !card.toggle } : card))
    )
  }

  const handleDeleteCard = (id: number): void => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }

  const handleUpdateHour = (id: number, value: string): void => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, hour: value } : card))
    )
  }

  const handleUpdateMinute = (id: number, value: string): void => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, minute: value } : card))
    )
  }

  const handleSetCard = (id: number, updatedCard: Partial<(typeof cards)[0]>): void => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, ...updatedCard } : card))
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date()
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (
            parseInt(card.hour) === time.getHours() &&
            parseInt(card.minute) === time.getMinutes() &&
            card.days[time.getDay()] &&
            !card.isRinged
          ) {
            console.log(`Alarm ${card.id} is ringing`)
            const audio = new Audio(
              '/home/dhl301105/Documents/electron_projects/Project3/electron-app/out/main/ringing-sound.mp3'
            )
            audio.play()
            return { ...card, isRinged: true }
          } else if (parseInt(card.minute) !== time.getMinutes()) {
            return { ...card, isRinged: false }
          }
          return card
        })
      })
    }, 1000)
    return (): void => clearInterval(timer)
  }, [cards])

  return (
    <div className="w-full min-h-full h-max">
      <ListCard
        handleSetCard={handleSetCard}
        handleTitle={handleTitle}
        handleToggle={handleToggle}
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
