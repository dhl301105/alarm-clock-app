import React from 'react'
import Card from './Card'

interface ListCardProps {
  cards: {
    id: number
    title: string
    hour: string
    minute: string
    days: boolean[]
    toggle: boolean
  }[]
  handleDeleteCard: (id: number) => void
  handleUpdateHour: (id: number, hour: string) => void
  handleUpdateMinute: (id: number, minute: string) => void
  handleSetDays: (id: number, indexDays: number) => void
  handleToggle: (id: number) => void
  handleTitle: (id: number, title: string) => void
  handleSetCard: (id: number) => void
}

const ListCard: React.FC<ListCardProps> = ({
  handleSetCard,
  handleTitle,
  handleToggle,
  handleUpdateHour,
  handleUpdateMinute,
  handleDeleteCard,
  handleSetDays,
  cards
}) => {
  return (
    <div className="flex flex-wrap p-5 gap-5 h-min">
      {cards
        .sort(
          (a, b) =>
            parseInt(a.hour) * 60 +
            parseInt(a.minute) -
            (parseInt(b.hour) * 60 + parseInt(b.minute))
        )
        .map((card) => (
          <Card
            handleSetCard={handleSetCard}
            handleToggle={handleToggle}
            handleUpdateHour={handleUpdateHour}
            handleUpdateMinute={handleUpdateMinute}
            card={card}
            key={card.id}
            handleTitle={handleTitle}
            handleDeleteCard={handleDeleteCard}
            handleSetDays={handleSetDays}
          />
        ))}
    </div>
  )
}

export default ListCard
