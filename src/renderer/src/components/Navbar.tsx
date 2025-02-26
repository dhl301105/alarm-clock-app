import React from 'react'
import NavButton from './NavButton'

interface NavbarProps {
  onClickButton: (type: string) => void
  page: string
}

const Navbar: React.FC<NavbarProps> = ({ page, onClickButton }) => {
  return (
    <div className="flex flex-col fixed top-0 left-0 h-full py-5 min-w-60 bg-[#181818]">
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
