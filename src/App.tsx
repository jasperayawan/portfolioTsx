import { useSelector } from 'react-redux'
import './App.css'
import Home from './page/Home'
import { RootState } from './state/store'

function App() {
  const isDarkMode = useSelector((state: RootState) => state.DarkMode.darkmode)

  return (
    <div className={`flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Home />
    </div>
  )
}

export default App
