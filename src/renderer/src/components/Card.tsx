import React from 'react'
import NumberInput from './NumberInput'
import Day from './Day'

interface CardProps {
  title: string
  handleDeleteCard: (id: number) => void
  id: number
}

const Card: React.FC<CardProps> = ({ handleDeleteCard, title, id }) => {
  const [days, setDays] = React.useState([false, false, false, false, false, false, false])
  const [titleInput, setTitleInput] = React.useState(title)
  const handleSetDays = (index: number): void => {
    const newDays = [...days]
    newDays[index] = !newDays[index]
    setDays(newDays)
  }
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
        <NumberInput />
        <span className="select-none text-white text-3xl">:</span>
        <NumberInput />
      </div>
      <input
        className="text-white text-3xl py-5 focus:outline-none"
        onChange={(e) => {
          setTitleInput(e.target.value)
        }}
        value={titleInput}
      />
      <div className="flex">
        <Day
          days={days}
          indexDays={0}
          handleClick={() => {
            handleSetDays(0)
          }}
          name="Su"
        />
        <Day
          days={days}
          indexDays={1}
          handleClick={() => {
            handleSetDays(1)
          }}
          name="Mo"
        />
        <Day
          days={days}
          indexDays={2}
          handleClick={() => {
            handleSetDays(2)
          }}
          name="Tu"
        />
        <Day
          days={days}
          indexDays={3}
          handleClick={() => {
            handleSetDays(3)
          }}
          name="We"
        />
        <Day
          days={days}
          indexDays={4}
          handleClick={() => {
            handleSetDays(4)
          }}
          name="Th"
        />
        <Day
          days={days}
          indexDays={5}
          handleClick={() => {
            handleSetDays(5)
          }}
          name="Fri"
        />
        <Day
          days={days}
          indexDays={6}
          handleClick={() => {
            handleSetDays(6)
          }}
          name="Sa"
        />
      </div>
    </div>
  )
  2
}

export default Card
