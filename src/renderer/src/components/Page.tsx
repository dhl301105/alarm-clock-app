import React from 'react'
import Alarm from './Alarm'
import Clock from './Clock'

interface PageProps {
  page: string
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="flex ml-60 w-full min-h-full h-max bg-[#1F1F1F]">
      {page === 'alarm' && <Alarm />}
      {page === 'clock' && <Clock />}
    </div>
  )
}

export default Page
