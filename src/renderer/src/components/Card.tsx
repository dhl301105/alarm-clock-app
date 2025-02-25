import React from 'react'
import NumberInput from './NumberInput'
import DayButton from './DayButton'

interface CardProps {
  title: string
  handleDeleteCard: (id: number) => void
  id: number
  hour: string
  minute: string
  handleUpdateHour: (id: number, hour: string) => void
  handleUpdateMinute: (id: number, minute: string) => void
  handleSetDays: (id: number, indexDays: number) => void
  days: boolean[]
}

const Card: React.FC<CardProps> = ({
  handleUpdateHour,
  handleUpdateMinute,
  hour,
  minute,
  handleDeleteCard,
  title,
  id,
  handleSetDays,
  days
}) => {
  const [titleInput, setTitleInput] = React.useState(title)

  return (
    <div className="relative w-100 h-60 bg-[rgba(144,144,144,0.1)] p-5 rounded-lg">
      <button
        onClick={() => {
          handleDeleteCard(id)
        }}
        className="select-none text-1xl font-extrabold px-2 rounded-2xl hover:bg-[rgba(144,144,144,0.2)] absolute top-2 right-2 text-gray-400"
      >
        Delete
      </button>
      <div className="flex items-center">
        <NumberInput name="hour" value={hour} id={id} handleChange={handleUpdateHour} />
        <span className="select-none text-white text-3xl">:</span>
        <NumberInput name="minute" value={minute} id={id} handleChange={handleUpdateMinute} />
      </div>
      <input
        className="text-white text-3xl py-5 focus:outline-none"
        onChange={(e) => {
          setTitleInput(e.target.value)
        }}
        value={titleInput}
      />
      <div className="flex">
        <DayButton
          id={id}
          days={days}
          indexDays={1}
          handleClick={() => {
            handleSetDays(id, 1)
          }}
          name="Mo"
        />
        <DayButton
          id={id}
          days={days}
          indexDays={2}
          handleClick={() => {
            handleSetDays(id, 2)
          }}
          name="Tu"
        />
        <DayButton
          id={id}
          days={days}
          indexDays={3}
          handleClick={() => {
            handleSetDays(id, 3)
          }}
          name="We"
        />
        <DayButton
          id={id}
          days={days}
          indexDays={4}
          handleClick={() => {
            handleSetDays(id, 4)
          }}
          name="Th"
        />
        <DayButton
          id={id}
          days={days}
          indexDays={5}
          handleClick={() => {
            handleSetDays(id, 5)
          }}
          name="Fri"
        />
        <DayButton
          id={id}
          days={days}
          indexDays={6}
          handleClick={() => {
            handleSetDays(id, 6)
          }}
          name="Sa"
        />
        <DayButton
          id={id}
          days={days}
          indexDays={0}
          handleClick={() => {
            handleSetDays(id, 0)
          }}
          name="Su"
        />
      </div>
    </div>
  )
  2
}

export default Card
