import React from 'react'

interface DayProps {
  name: string
  handleClick: (id: number, indexDays: number) => void
  days: boolean[]
  indexDays: number
  id: number
}

const DayButton: React.FC<DayProps> = ({ id, days, indexDays, handleClick, name }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleClick()
        }}
        className={`${days[indexDays] === true ? 'bg-[rgba(144,144,144,0.1)]' : ''} select-none mx-1 text-white rounded-full w-10 h-10 hover:bg-[rgba(144,144,144,0.2)]`}
      >
        {name}
      </button>
    </div>
  )
}

export default DayButton
