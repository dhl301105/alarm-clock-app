import { useState } from 'react'
import Page from './components/Page'
import Navbar from './components/Navbar'

function App(): JSX.Element {
  const [page, setPage] = useState('hello')

  return (
    <div className="flex w-full h-full">
      <Navbar
        onClickButton={(name) => {
          setPage(name)
        }}
      ></Navbar>

      <Page page={page} />
    </div>
  )
}

export default App
