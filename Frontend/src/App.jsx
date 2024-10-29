import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './Pages/Login'

//----------------------------------------------------------------------------
function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
