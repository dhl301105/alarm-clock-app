import React from 'react'
import NumberInput from './NumberInput'
import Day from './Day'

interface CardProps {
  title: string
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="w-100 h-60 bg-[rgba(144,144,144,0.1)] p-5 rounded-lg">
      <div className="flex items-center">
        <NumberInput />
        <span className="select-none text-white text-3xl">:</span>
        <NumberInput />
      </div>
      <input className="text-white text-3xl py-5 focus:outline-none" value={title} />
      <div className="flex">
        <Day name="Su" />
        <Day name="Mo" />
        <Day name="Tu" />
        <Day name="We" />
        <Day name="Th" />
        <Day name="Fri" />
        <Day name="Sa" />
      </div>
    </div>
  )
  2
}

export default Card
