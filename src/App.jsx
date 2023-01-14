import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import {Header} from "./Header";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header/>
        <Footer/>
    </div>
  )
}

export default App;
