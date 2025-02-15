import React from 'react'
import Alarm from './Alarm'
import Clock from './Clock'

interface PageProps {
  page: string
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="flex ml-60 w-full min-h-full h-max bg-[rgba(12,12,12,0.8)] ">
      {page === 'alarm' && <Alarm />}
      {page === 'clock' && <Clock />}
    </div>
  )
}

export default Page
