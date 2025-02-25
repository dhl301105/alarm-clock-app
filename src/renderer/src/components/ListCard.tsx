import React from 'react'
import Card from './Card'

interface ListCardProps {
  cards: {
    id: number
    title: string
    hour: string
    minute: string
    days: boolean[]
  }[]
  handleDeleteCard: (id: number) => void
  handleUpdateHour: (id: number, hour: string) => void
  handleUpdateMinute: (id: number, minute: string) => void
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
        .sort(
          (a, b) =>
            parseInt(a.hour) * 60 +
            parseInt(a.minute) -
            (parseInt(b.hour) * 60 + parseInt(b.minute))
        )
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
