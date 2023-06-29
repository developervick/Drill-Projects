import React, { useState } from 'react'
import Search from './components/search'
import ListItem from './components/Listitem'



function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div className='flex flex-col items-center'>
        <Search></Search>
        <ListItem></ListItem>
      </div>
    </React.Fragment>
  )
}

export default App
