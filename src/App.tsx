import './App.scss'
import AppBar from './Components/AppBar/AppBar'
import BoardBar from './Components/BoardBar/BoardBar'
import BoardContent from './Components/BoardContent/BoardContent'

export default function App() {

  return (
    <div className='container'>
      < AppBar />
      < BoardBar />
      < BoardContent />    
    </div>
  )
}