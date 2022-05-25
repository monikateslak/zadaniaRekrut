import './App.css'
import Navi from './Navi'
import MainSection from './MainSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './List'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = () => <div>User</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Category></Category>
        <Navi></Navi>
        <MainSection></MainSection>
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
