import React from 'react'
import Alarm from './Alarm'
import Clock from './Clock'
import Timer from './Timer'
import Stopwatch from './Stopwatch'

interface PageProps {
  page: string
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="flex ml-60 w-full min-h-full h-max bg-[#1F1F1F]">
      {page === 'alarm' && <Alarm />}
      {page === 'clock' && <Clock />}
      {page === 'timer' && <Timer />}
      {page === 'stopwatch' && <Stopwatch />}
    </div>
  )
}

export default Page
