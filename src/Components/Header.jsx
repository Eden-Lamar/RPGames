import {useContext} from 'react'
import { HiOutlineMagnifyingGlass, HiMoon, HiSun  } from "react-icons/hi2";
import logo from '../assets/image/logo.png';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  // const [toggle, setToggle] = useState(true);
  const {theme, setTheme} = useContext(ThemeContext);

  // useEffect(() => {
  //   console.log("Theme: " + theme)
  // }, [theme]);

  return (
  <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={60} height={60}/>

      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input type="text" placeholder="Search Games..." className="bg-transparent outline-none px-2 w-full"/>
      </div>

      <div onClick={()=> theme ==="light" ? (setTheme("dark"), localStorage.setItem("theme", "dark")): (setTheme('light'), localStorage.setItem("theme", "light"))} className='cursor-pointer'>
        {
        theme=== "light" ? <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full'/>
         : 
        <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full'/>
        }
      </div>

  </div>
  )
}

export default Header