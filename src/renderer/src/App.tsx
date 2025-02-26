import { useState } from 'react'
import Page from './components/Page'
import Navbar from './components/Navbar'

function App(): JSX.Element {
  const [page, setPage] = useState('clock')

  return (
    <div className="flex w-full min-h-full h-max">
      <Navbar
        page={page}
        onClickButton={(name) => {
          setPage(name)
        }}
      ></Navbar>

      <Page page={page}/>
    </div>
  )
}

export default App
