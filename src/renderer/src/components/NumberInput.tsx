import React from 'react'

const NumberInput: React.FC = () => {
  const [value, setValue] = React.useState('00')
  return (
    <input
      type="number"
      value={value}
      onFocus={(e) => e.target.select()}
      onChange={(e) => {
        const num = parseInt(e.target.value, 10) || 0
        if (num > 24) return
        setValue(e.target.value)
      }}
      placeholder="00"
      className="select-none text-white focus:outline-none text-6xl max-w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
  )
}

export default NumberInput
