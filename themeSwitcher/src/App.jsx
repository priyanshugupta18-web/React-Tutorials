import { useState } from "react"
import { ThemeProvider } from "./contexts/Theme";
import Btn from './components/Btn';
import Card from './components/Card'


function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider value={{theme, setTheme}}>
      <Btn />
      <Card />
    </ThemeProvider>
  )
}

export default App
