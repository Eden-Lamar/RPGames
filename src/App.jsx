
import { useState , useEffect} from 'react'
import Header from "./Components/Header"
import Home from "./Pages/Home"
import { ThemeContext } from './Context/ThemeContext';


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`${theme} ${theme === 'dark' ? "bg-zinc-900" : null} min-h-screen`}>
        <Header/> 
        <Home />
      </div>

    </ThemeContext.Provider>
  )
}

export default App
