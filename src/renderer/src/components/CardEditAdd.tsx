import React, { useEffect, useState } from 'react'

interface CardEditAddProps {
  setCardEdit: (value: boolean) => void
}

const CardEditAdd: React.FC<CardEditAddProps> = ({ setCardEdit }) => {
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
      <div className="relative mx-auto w-80 h-120 bg-[#1F1F1F] p-5 rounded-lg"></div>
    </div>
  )
}

export default CardEditAdd
