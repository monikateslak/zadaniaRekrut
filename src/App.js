import './App.css'
import './GetData'
import Navi from './Navi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = () => <div>User</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi></Navi>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path='/user' element={<User></User>}></Route>
            </Routes>
          </Router>
        </main>
      </header>
    </div>
  )
}

export default App
