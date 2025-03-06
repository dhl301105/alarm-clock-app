import React, { useEffect, useState } from 'react'
import NumberInput from './NumberInput'
import Colon from './Colon'
import TitleInput from './TitleInput'
import DayButton from './DayButton'
import Button from './Button'

interface CardEditAddProps {
  setCardEdit: (value: boolean) => void
  handleNewId: () => number
  handleAdd: (newCard: {
    id: number
    title: string
    hour: string
    minute: string
    days: boolean[]
    toggle: boolean
    isRinged: boolean
  }) => void
}

const CardEditAdd: React.FC<CardEditAddProps> = ({ handleNewId, setCardEdit, handleAdd }) => {
  useEffect(() => {
    // Hàm xử lý sự kiện gõ phím
    const handleKeyDown = (event): void => {
      if (event.key === 'Escape') {
        setCardEdit(false)
      }
    }

    // Đăng ký sự kiện keydown cho toàn bộ window
    window.addEventListener('keydown', handleKeyDown)

    // Hủy bỏ sự kiện khi component unmount
    return (): void => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, []) // [] để chỉ chạy một lần khi component mount

  const id = handleNewId()

  const [cardDefault, setCardDefault] = useState({
    id: id,
    title: `Alarm ${id}`,
    hour: '0',
    minute: '0',
    days: [false, false, false, false, false, false, false],
    toggle: true,
    isRinged: false
  })

  const handleUpdateNewHour = (id: number, hour: string): void => {
    setCardDefault((prevCard) => ({
      ...prevCard,
      hour: hour
    }))
  }

  const handleUpdateNewMinute = (id: number, minute: string): void => {
    setCardDefault((prevCard) => ({
      ...prevCard,
      minute: minute
    }))
  }

  const handleTitle = (id: number, title: string): void => {
    setCardDefault((prevCard) => ({
      ...prevCard,
      title: title
    }))
  }

  const handleSetNewDays = (id: number, index: number): void => {
    setCardDefault((prevCard) => {
      const newDays = [...prevCard.days]
      newDays[index] = !newDays[index]
      return {
        ...prevCard,
        days: newDays
      }
    })
  }

  return (
    <div
      className="fixed z-50 flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"
      tabIndex={0}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setCardEdit(false)
        }
      }}
    >
      <div className="relative mx-auto w-100 h-120 bg-[#1F1F1F] p-5 rounded-lg">
        <div className="text-gray-400 text-2xl">Edit alarm</div>

        <div className="flex items-center w-min mx-auto mt-5">
          <NumberInput
            name="hour"
            value={cardDefault.hour}
            id={cardDefault.id}
            handleChange={handleUpdateNewHour}
          />
          <Colon />
          <NumberInput
            name="Minute"
            value={cardDefault.minute}
            id={cardDefault.id}
            handleChange={handleUpdateNewMinute}
          />
        </div>

        <div className="flex mt-5 ml-5">
          {/* <FontAwesomeIcon className="m-auto text-white text-2xl" icon={faPenToSquare} /> */}
          <TitleInput handleTitle={handleTitle} titleInput={cardDefault.title} id={0} />
        </div>

        <div className="flex justify-center">
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={1}
            handleClick={() => {
              handleSetNewDays(0, 1)
            }}
            name="Mo"
          />
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={2}
            handleClick={() => {
              handleSetNewDays(0, 2)
            }}
            name="Tu"
          />
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={3}
            handleClick={() => {
              handleSetNewDays(0, 3)
            }}
            name="We"
          />
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={4}
            handleClick={() => {
              handleSetNewDays(0, 4)
            }}
            name="Th"
          />
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={5}
            handleClick={() => {
              handleSetNewDays(0, 5)
            }}
            name="Fri"
          />
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={6}
            handleClick={() => {
              handleSetNewDays(0, 6)
            }}
            name="Sa"
          />
          <DayButton
            id={0}
            days={cardDefault.days}
            indexDays={0}
            handleClick={() => {
              handleSetNewDays(0, 0)
            }}
            name="Su"
          />
        </div>


        <Button
          handleClick={() => {
            handleAdd(cardDefault)
            setCardEdit(false)
          }}
          className="absolute bottom-5 left-10 hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)] text-white px-10 py-4 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)]"
        >
          Save
        </Button>
        <Button
          handleClick={() => {
            setCardEdit(false)
          }}
          className="absolute bottom-5 right-10 hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)] text-white px-10 py-4 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)]"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default CardEditAdd
