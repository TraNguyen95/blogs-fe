// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import './assets/styles/app.css'
import './assets/styles/app.scss'
// import { addBird, incrementBird } from './store/birds/birds'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/TestComponent'

// interface Bird {
//   name: string
//   views: number
// }
// interface State {
//   birds: Bird[]
// }
function App() {
  // const birds: Bird[] = useSelector((state: State) => state.birds)
  // const [birdName, setBird] = useState('')
  // const dispatch = useDispatch()

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // eslint-disable-next-line no-debugger
  //   debugger
  //   e.preventDefault()
  //   dispatch(addBird(birdName))
  //   setBird('')
  // }
  return (
    <div className='wrapper'>
      {/* <h1>Bird List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Add Bird</p>
          <input type='text' onChange={(e) => setBird(e.target.value)} value={birdName} />
        </label>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <ul>
        {birds?.map((bird: Bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
              <button onClick={() => dispatch(incrementBird(bird.name))}>
                <span role='img' aria-label='add'>
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul> */}
      <Routes>
        <Route path='test' element={<Test />} />
      </Routes>
    </div>
  )
}
export default App
