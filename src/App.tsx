import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Content from './components/content/content'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import 'lord-icon-element'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Content />
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
