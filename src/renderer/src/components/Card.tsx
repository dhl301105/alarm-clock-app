import React from 'react'
import NumberInput from './NumberInput'
import DayButton from './DayButton'
import CardEditCard from './CardEditCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Colon from './Colon'
import TitleInput from './TitleInput'

interface CardProps {
  handleDeleteCard: (id: number) => void
  handleUpdateHour: (id: number, hour: string) => void
  handleUpdateMinute: (id: number, minute: string) => void
  handleSetDays: (id: number, indexDays: number) => void
  handleToggle: (id: number) => void
  card: {
    id: number
    title: string
    hour: string
    minute: string
    days: boolean[]
    toggle: boolean
    isRinged: boolean
  }
  handleTitle: (id: number, title: string) => void
  handleSetCard: (
    id: number,
    updatedCard: {
      id: number
      title: string
      hour: string
      minute: string
      days: boolean[]
      toggle: boolean
      isRinged: boolean
    }
  ) => void
}

const Card: React.FC<CardProps> = ({
  handleSetCard,
  handleTitle,
  card,
  handleToggle,
  handleUpdateHour,
  handleUpdateMinute,
  handleDeleteCard,
  handleSetDays
}) => {
  const [cardEdit, setCardEdit] = React.useState(false)

  return (
    <div
      className="relative w-100 h-min hover:bg-[rgba(144,144,144,0.25)] bg-[rgba(144,144,144,0.1)] p-5 rounded-lg"
      tabIndex={0}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setCardEdit(true)
        }
      }}
    >
      {cardEdit && (
        <CardEditCard
          setCardEdit={setCardEdit}
          card={card}
          handleDeleteCard={handleDeleteCard}
          handleSetCard={handleSetCard}
        />
      )}
      <button
        onClick={() => {
          handleDeleteCard(card.id)
        }}
        className="select-none text-1xl font-extrabold p-3 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)] absolute top-2 right-2 text-gray-400"
      >
        <FontAwesomeIcon icon={faTrash} className="text-2xl text-red-500" />
      </button>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={card.toggle}
          className="sr-only peer"
          onChange={(e) => {
            if (e.target.checked) {
              handleToggle(card.id)
            }
          }}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      </label>

      <div className="flex items-center w-min">
        <NumberInput name="hour" value={card.hour} id={card.id} handleChange={handleUpdateHour} />
        <Colon />
        <NumberInput
          name="minute"
          value={card.minute}
          id={card.id}
          handleChange={handleUpdateMinute}
        />
      </div>

      <TitleInput id={card.id} handleTitle={handleTitle} titleInput={card.title} />

      <div className="flex">
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={1}
          handleClick={() => {
            handleSetDays(card.id, 1)
          }}
          name="Mo"
        />
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={2}
          handleClick={() => {
            handleSetDays(card.id, 2)
          }}
          name="Tu"
        />
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={3}
          handleClick={() => {
            handleSetDays(card.id, 3)
          }}
          name="We"
        />
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={4}
          handleClick={() => {
            handleSetDays(card.id, 4)
          }}
          name="Th"
        />
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={5}
          handleClick={() => {
            handleSetDays(card.id, 5)
          }}
          name="Fri"
        />
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={6}
          handleClick={() => {
            handleSetDays(card.id, 6)
          }}
          name="Sa"
        />
        <DayButton
          id={card.id}
          days={card.days}
          indexDays={0}
          handleClick={() => {
            handleSetDays(card.id, 0)
          }}
          name="Su"
        />
      </div>
    </div>
  )
}

export default Card
