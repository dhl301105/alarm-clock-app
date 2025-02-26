import React from 'react'

interface NumberInputCardEditProps {
  value: string
  id: number
  handleChange: (id: number, value: string) => void
  name: string
}

const NumberInputCardEdit: React.FC<NumberInputCardEditProps> = ({ name, id, value, handleChange }) => {
  return (
    <input
      value={parseInt(value) < 10 ? `0${value}` : value}
      onFocus={(e) => e.target.select()}
      onChange={(e) => {
        const inputValue = e.target.value
        if (!/^\d*$/.test(inputValue)) return
        let num = parseInt(inputValue, 10) | 0
        if (name === 'hour' && num > 24) return
        else if (name === 'minute' && num > 60) return
        if (num > 9) num = parseInt(num.toString().replace(/^0+/, ''), 10)
        handleChange(id, num.toString())
      }}
      placeholder="00"
      className="select-none text-white focus:outline-none text-6xl max-w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
  )
}

export default NumberInputCardEdit
