import React, { useEffect, useState } from 'react'
import NumberInput from './NumberInput'
import Colon from './Colon'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faPlay, faRepeat, faStop } from '@fortawesome/free-solid-svg-icons'

const Timer: React.FC = () => {
  const [timer, setTime] = useState({ hour: 0, minute: 0, second: 0 })
  const [isRun, setIsRun] = useState(false)
  const [bookmarks, setBookmarks] = useState([
    { id: 1, hour: 0, minute: 5, second: 0 },
    { id: 2, hour: 0, minute: 10, second: 0 },
    { id: 2, hour: 0, minute: 15, second: 0 }
  ])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRun) {
      interval = setInterval(() => {
        setTime((prevTimer) => {
          let { hour, minute, second } = prevTimer

          if (second > 0) {
            second -= 1
          } else if (minute > 0) {
            minute -= 1
            second = 59
          } else if (hour > 0) {
            hour -= 1
            minute = 59
            second = 59
          } else {
            clearInterval(interval!)
            setIsRun(false)
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

  const handleUpdateBookmarkHour = (id: number, hour: string): void => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, hour: parseInt(hour) } : bookmark
      )
    )
  }

  const handleUpdateBookmarkMinute = (id: number, minute: string): void => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, minute: parseInt(minute) } : bookmark
      )
    )
  }

  const handleUpdateBookmarkSecond = (id: number, second: string): void => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, second: parseInt(second) } : bookmark
      )
    )
  }

  const handleNewId = (): number => {
    for (let i = 1; i <= bookmarks.length + 1; i++) {
      if (!bookmarks.some((card) => card.id === i)) {
        return i
      }
    }
    return bookmarks.length + 1
  }

  const handleAddBookmark = (value): void => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, { ...value, id: handleNewId() }])
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-full w-full">
      <div className="flex">
        <NumberInput
          name="hour"
          id={0}
          value={timer.hour.toString()}
          handleChange={(_id, hour): void => {
            setTime((prevTimer) => ({ ...prevTimer, hour: parseInt(hour) }))
          }}
        ></NumberInput>
        <Colon></Colon>
        <NumberInput
          name="minute"
          id={1}
          value={timer.minute.toString()}
          handleChange={(_id, minute): void => {
            setTime((prevTimer) => ({ ...prevTimer, minute: parseInt(minute) }))
          }}
        ></NumberInput>
        <Colon></Colon>
        <NumberInput
          name="second"
          id={2}
          value={timer.second.toString()}
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
            handleAddBookmark(timer)
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

      <div className="flex flex-col mt-10 overflow-auto h-1/3 w-full items-center">
        {bookmarks.map((bookmark) => {
          return (
            <div key={bookmark.id} className="flex">
              <Button
                handleClick={() => {
                  setTime(bookmark)
                  setIsRun(false)
                }}
                className="mt-10 flex bg-[rgba(144,144,144,0.1)] text-white px-30 py-4 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)]"
              >
                <NumberInput
                  name="hour"
                  id={0}
                  value={bookmark.hour.toString()}
                  handleChange={(_id, hour): void => {
                    handleUpdateBookmarkHour(bookmark.id, hour)
                  }}
                ></NumberInput>
                <Colon></Colon>
                <NumberInput
                  name="minute"
                  id={1}
                  value={bookmark.minute.toString()}
                  handleChange={(_id, minute): void => {
                    handleUpdateBookmarkMinute(bookmark.id, minute)
                  }}
                ></NumberInput>
                <Colon></Colon>
                <NumberInput
                  name="second"
                  id={2}
                  value={bookmark.second.toString()}
                  handleChange={(_id, second): void => {
                    handleUpdateBookmarkSecond(bookmark.id, second)
                  }}
                ></NumberInput>
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timer
