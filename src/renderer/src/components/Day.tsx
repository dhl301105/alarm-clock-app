import React from 'react'

interface DayProps {
  name: string
}

const Day: React.FC<DayProps> = ({ name }) => {
  return (
    <div>
      <span className='select-none text-white rounded-full p-3 hover:bg-[rgba(144,144,144,0.2)]'>{name}</span>
    </div>
  )
}

export default Day
