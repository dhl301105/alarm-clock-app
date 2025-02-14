import React from 'react'
import Button from './Button'

interface NavbarProps {
  onClickButton: (type: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ onClickButton }) => {
  return (
    <div className="flex flex-col h-full py-5 w-80 bg-[rgba(24,24,24,0.5)]">
      <Button
        content="Clock"
        onClickButton={() => {
          onClickButton('clock')
        }}
      ></Button>
      <Button
        content="Alarm"
        onClickButton={() => {
          onClickButton('alarm')
        }}
      ></Button>
      
    </div>
  )
}

export default Navbar
