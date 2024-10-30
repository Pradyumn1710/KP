import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './Pages/Login'
import Homepage from './Pages/Homepage'

//----------------------------------------------------------------------------
function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/Login' element={<Login></Login>} />
            <Route path='/' element={<Homepage></Homepage>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
