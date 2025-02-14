import React from 'react'
import Button from './Button'

interface NavbarProps {
  onClickButton: (type: string) => void
  page: string
}

const Navbar: React.FC<NavbarProps> = ({ page, onClickButton }) => {
  return (
    <div className="flex flex-col h-full py-5 min-w-60 bg-[rgba(24,24,24,0.5)]">
      <Button
        name="clock"
        page={page}
        content="Clock"
        onClickButton={() => {
          onClickButton('clock')
        }}
      ></Button>
      <Button
        name="alarm"
        page={page}
        content="Alarm"
        onClickButton={() => {
          onClickButton('alarm')
        }}
      ></Button>
    </div>
  )
}

export default Navbar
