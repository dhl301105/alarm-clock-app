import React from 'react'
import Card from './Card'

interface ListCardProps {
  cards: {
    id: number
    title: string
    hour: number
    minute: number
    days: boolean[]
  }[]
  handleDeleteCard: (id: number) => void
  handleUpdateHour: (id: number, hour: number) => void
  handleUpdateMinute: (id: number, minute: number) => void
  handleSetDays: (id: number, indexDays: number) => void
}

const ListCard: React.FC<ListCardProps> = ({
  handleUpdateHour,
  handleUpdateMinute,
  handleDeleteCard,
  handleSetDays,
  cards
}) => {
  return (
    <div className="flex flex-wrap p-5 gap-5">
      {cards
        .sort((a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute))
        .map((card) => (
          <Card
            handleUpdateHour={handleUpdateHour}
            handleUpdateMinute={handleUpdateMinute}
            hour={card.hour}
            minute={card.minute}
            key={card.id}
            id={card.id}
            title={card.title}
            handleDeleteCard={handleDeleteCard}
            handleSetDays={handleSetDays}
            days={card.days}
          />
        ))}
    </div>
  )
}

export default ListCard
