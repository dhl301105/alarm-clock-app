import React from 'react'
import Alarm from './Alarm'

interface PageProps {
  page: string
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="w-full h-full bg-[rgba(12,12,12,0.5)]">
      {page === 'alarm' && (
        <div>
          <Alarm />
        </div>
      )}
    </div>
  )
}

export default Page
