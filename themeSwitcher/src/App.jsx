import { useState } from "react"
import { ThemeProvider } from "./contexts/Theme";
import Btn from './components/Btn';
import Card from './components/Card'


function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <div className="h-screen flex justify-center items-center">
      <ThemeProvider value={{theme, setTheme}}>
        <div>
          <Btn />
          <Card />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
