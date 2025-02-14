import React from 'react'
import NavButton from './NavButton'

interface NavbarProps {
  onClickButton: (type: string) => void
  page: string
}

const Navbar: React.FC<NavbarProps> = ({ page, onClickButton }) => {
  return (
    <div className="flex flex-col h-full py-5 min-w-60 bg-[rgba(24,24,24,0.5)]">
      <NavButton
        name="clock"
        page={page}
        content="Clock"
        onClickButton={() => {
          onClickButton('clock')
        }}
      ></NavButton>
      <NavButton
        name="alarm"
        page={page}
        content="Alarm"
        onClickButton={() => {
          onClickButton('alarm')
        }}
      ></NavButton>
    </div>
  )
}

export default Navbar
