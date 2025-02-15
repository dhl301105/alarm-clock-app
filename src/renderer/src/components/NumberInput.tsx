import React from 'react'

interface NumberInputProps {
  value: number
  id: number
  handleChange: (id: number, value: number) => void
  name: string
}

const NumberInput: React.FC<NumberInputProps> = ({ name, id, value, handleChange }) => {
  return (
    <input
      type="number"
      maxLength={2}
      value={value}
      onFocus={(e) => e.target.select()}
      onChange={(e) => {
        const num = parseInt(e.target.value, 10)
        if (name === 'hour' && num > 24) return
        else if (name === 'minute' && num > 60) return
        handleChange(id, num)
      }}
      placeholder="00"
      className="select-none text-white focus:outline-none text-6xl max-w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
  )
}

export default NumberInput
