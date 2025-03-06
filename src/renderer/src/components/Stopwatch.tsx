import React, { useState, useEffect } from 'react'
import NumberInput from './NumberInput'
import Colon from './Colon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button'
import { faBookmark, faPlay, faRepeat, faStop } from '@fortawesome/free-solid-svg-icons'

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0
  })
  const [isRun, setIsRun] = useState(false)
  const [history, setHistory] = useState<{ hour: number; minute: number; second: number }[]>([])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRun) {
      interval = setInterval(() => {
        setTime((prevTimer) => {
          let { hour, minute, second } = prevTimer

          second += 1

          if (second === 60) {
            minute += 1
            second = 0
          }
          if (minute === 60) {
            hour += 1
            minute = 0
          }

          return { hour, minute, second }
        })
      }, 1000)
    }

    return (): void => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRun])

  const handleAddHistory = (time: { hour: number; minute: number; second: number }): void => {
    setHistory((prevHistory) => [time, ...prevHistory])
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-full w-full">
      <div className="flex">
        <NumberInput
          name="hour"
          id={0}
          value={time.hour.toString()}
          handleChange={(_id, hour): void => {
            setTime((prevTimer) => ({ ...prevTimer, hour: parseInt(hour) }))
          }}
        ></NumberInput>
        <Colon></Colon>
        <NumberInput
          name="minute"
          id={1}
          value={time.minute.toString()}
          handleChange={(_id, minute): void => {
            setTime((prevTimer) => ({ ...prevTimer, minute: parseInt(minute) }))
          }}
        ></NumberInput>
        <Colon></Colon>
        <NumberInput
          name="second"
          id={2}
          value={time.second.toString()}
          handleChange={(_id, second): void => {
            setTime((prevTimer) => ({ ...prevTimer, second: parseInt(second) }))
          }}
        ></NumberInput>
      </div>

      <div className="flex">
        <Button
          handleClick={() => {
            setIsRun(!isRun)
          }}
          className="mt-10 mr-10 hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)] text-white px-10 py-4 rounded-[5px]"
        >
          {!isRun ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faStop} />}
        </Button>
        <Button
          handleClick={() => {
            handleAddHistory(time)
          }}
          className="mt-10 mr-10 hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)] text-white px-10 py-4 rounded-[5px]"
        >
          <FontAwesomeIcon icon={faBookmark} />
        </Button>
        <Button
          handleClick={() => {
            setTime({ hour: 0, minute: 0, second: 0 })
            setIsRun(false)
          }}
          className="mt-10 bg-[rgba(144,144,144,0.1)] text-white px-10 py-4 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)]"
        >
          <FontAwesomeIcon icon={faRepeat} />
        </Button>
      </div>
      <div className="mt-10 p-10 h-50 w-full flex justify-center overflow-auto">
        <table className="">
          {history.map((time, index) => (
            <tr key={index}>
              <td className="text-white py-3 text-3xl">
                {time.hour}:{time.minute}:{time.second}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default Stopwatch
