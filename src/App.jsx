import Content from './Components/Nav.jsx'
import Body from './Components/Body.jsx'
import Gal from './Components/Gal.jsx'
import Inside from './Components/Inside.jsx'
import Note from './Components/Note.jsx'
import Rates from './Components/Rates.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-20">
        <Content />
      </div>
      <Body />
        <Gal />
        <Inside />
        <Note />
        <Rates />
        <Footer />
    </div>
    

  )
}

export default App