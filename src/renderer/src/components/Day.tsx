import React from 'react'

interface DayProps {
  name: string
  handleClick: () => void
  days: boolean[]
  indexDays: number
}

const Day: React.FC<DayProps> = ({ days, indexDays, handleClick, name }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleClick()
        }}
        className={`${days[indexDays] === true ? 'bg-[rgba(144,144,144,0.1)]' : ''} select-none text-white rounded-full p-3 hover:bg-[rgba(144,144,144,0.2)]`}
      >
        {name}
      </button>
    </div>
  )
}

export default Day
