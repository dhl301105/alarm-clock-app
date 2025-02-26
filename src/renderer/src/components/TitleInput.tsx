import React from 'react'

interface TitleInputProps {
  handleTitle: (id: number, title: string) => void
  titleInput: string
  id: number
}

const TitleInput: React.FC<TitleInputProps> = ({ id, titleInput, handleTitle }) => {
  return (
    <div className='w-60'>
      <input
        className="w-60 text-white text-3xl py-5 focus:outline-none"
        onChange={(e) => {
          handleTitle(id, e.target.value)
        }}
        value={titleInput}
      />
    </div>
  )
}

export default TitleInput
