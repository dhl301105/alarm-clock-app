import React from 'react'
import Alarm from './Alarm'
import Clock from './Clock'

interface PageProps {
  page: string
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="w-full h-full bg-[rgba(12,12,12,0.5)]">
      {page === 'alarm' && <Alarm />}
      {page === 'clock' && <Clock />}
    </div>
  )
}

export default Page
