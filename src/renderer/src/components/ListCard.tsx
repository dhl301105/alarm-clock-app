import React from 'react'
import Card from './Card'

interface ListCardProps {
  cards: {
    id: number
    title: string
  }[]
  handleDeleteCard: (id: number) => void
}

const ListCard: React.FC<ListCardProps> = ({ handleDeleteCard, cards }) => {
  return (
    <div className="flex flex-wrap p-5 gap-5">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} title={card.title} handleDeleteCard={handleDeleteCard} />
      ))}
    </div>
  )
}

export default ListCard
