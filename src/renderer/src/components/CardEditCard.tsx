import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import NumberInputCardEdit from './NumberInputCardEdit'
import Colon from './Colon'
import TitleInput from './TitleInput'
import DayButton from './DayButton'

interface CardEditProps {
  handleDeleteCard?: (id: number) => void
  setCardEdit: (cardEdit: boolean) => void
  card: {
    id: number
    title: string
    hour: string
    minute: string
    days: boolean[]
    toggle: boolean
  }
  handleUpdateHour: (id: number, hour: string) => void
  handleUpdateMinute: (id: number, minute: string) => void
  handleSetCard: (id: number, updatedCard: Partial<typeof card>) => void
}

const CardEditCard: React.FC<CardEditProps> = ({
  setCardEdit,
  card,
  handleDeleteCard,
  handleUpdateHour,
  handleUpdateMinute,
  handleSetCard
}) => {
  const [newCard, setNewCard] = React.useState({ ...card })

  const handleTitle = (id: number, title: string): void => {
    setNewCard((prevCard) => ({
      ...prevCard,
      title: title
    }))
  }

  const handleUpdateNewHour = (id: number, hour: string): void => {
    setNewCard((prevCard) => ({
      ...prevCard,
      hour: hour
    }))
  }

  const handleUpdateNewMinute = (id: number, minute: string): void => {
    setNewCard((prevCard) => ({
      ...prevCard,
      minute: minute
    }))
  }

  const handleSetNewDays = (id: number, index: number): void => {
    setNewCard((prevCard) => {
      const newDays = [...prevCard.days]
      newDays[index] = !newDays[index]
      return {
        ...prevCard,
        days: newDays
      }
    })
  }

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
        {handleDeleteCard && (
          <button
            onClick={() => {
              handleDeleteCard(card.id)
            }}
            className="select-none text-1xl font-extrabold p-3 rounded-2xl hover:bg-[rgba(144,144,144,0.2)] absolute top-2 right-2 text-gray-400"
          >
            <FontAwesomeIcon icon={faTrash} className="text-2xl text-red-500" />
          </button>
        )}

        <div className="text-gray-400 text-2xl">Edit alarm</div>

        <div className="flex items-center w-min mx-auto mt-5">
          <NumberInputCardEdit
            name="hour"
            value={newCard.hour}
            id={0}
            handleChange={handleUpdateNewHour}
          />
          <Colon />
          <NumberInputCardEdit
            name="Minute"
            value={newCard.minute}
            id={card.id}
            handleChange={handleUpdateNewMinute}
          />
        </div>

        <div className="flex justify-center mt-5 px-10">
          {/* <FontAwesomeIcon className="m-auto text-white text-2xl" icon={faPenToSquare} /> */}
          <TitleInput handleTitle={handleTitle} titleInput={newCard.title} id={0} />
        </div>

        <div className="flex">
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={1}
            handleClick={() => {
              handleSetNewDays(0, 1)
            }}
            name="Mo"
          />
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={2}
            handleClick={() => {
              handleSetNewDays(0, 2)
            }}
            name="Tu"
          />
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={3}
            handleClick={() => {
              handleSetNewDays(0, 3)
            }}
            name="We"
          />
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={4}
            handleClick={() => {
              handleSetNewDays(0, 4)
            }}
            name="Th"
          />
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={5}
            handleClick={() => {
              handleSetNewDays(0, 5)
            }}
            name="Fri"
          />
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={6}
            handleClick={() => {
              handleSetNewDays(0, 6)
            }}
            name="Sa"
          />
          <DayButton
            id={0}
            days={newCard.days}
            indexDays={0}
            handleClick={() => {
              handleSetNewDays(0, 0)
            }}
            name="Su"
          />
        </div>

        <div className="absolute flex justify-center w-70 mb-5 bottom-0">
          <button
            onClick={() => {
              handleSetCard(card.id, newCard)
              setCardEdit(false)
            }}
            className="mr-5 hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)] text-white px-5 py-2 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)]"
          >
            Save
          </button>
          <button
            onClick={() => {
              setCardEdit(false)
            }}
            className=" hover:bg-[rgba(144,144,144,0.2)] bg-[rgba(144,144,144,0.1)] text-white px-5 py-2 rounded-[5px] hover:bg-[rgba(144,144,144,0.2)]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardEditCard
