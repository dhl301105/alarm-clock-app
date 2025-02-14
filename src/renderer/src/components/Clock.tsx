import React, { useState, useEffect } from 'react'

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return (): void => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-5xl text-gray-400">{time.toLocaleTimeString()}</div>
    </div>
  )
}

export default Clock
