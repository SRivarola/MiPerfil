import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { BsMoon, BsMoonFill, BsSun, BsSunFill } from "react-icons/bs";

const NavBar = () => {

    const [isDark, setIsDark] = useState(localStorage.getItem('isDark') ? JSON.parse(localStorage.getItem('isDark')) : false)

    const handleIsDark = (boolean) => {
        localStorage.setItem('isDark', JSON.stringify(boolean))
        setIsDark(boolean)
    }
    
    useEffect(() => {
        isDark  ? document.documentElement.classList.add('dark') 
                : document.documentElement.classList.remove('dark')
    }, [isDark])

  return (
    <nav className="w-screen h-[70px] bg-primary text-black shadow-xl fixed z-50 flex justify-between items-center px-10 dark:bg-secondary">
        <Link className="font-semibold text-lg text-blue" to='/'>Santiago Rivarola</Link>
        <ul className="flex gap-6 items-center">
            <li>
                <NavLink className={({ isActive }) =>  isActive ? 'text-blue font-semibold' : 'text-black dark:text-primary'} to='/about'>Sobre mí</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>  isActive ? 'text-blue font-semibold' : 'text-black dark:text-primary'} to='/portfolio'>Portfolio</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>  isActive ? 'text-blue font-semibold' : 'text-black dark:text-primary'} to='/contact'>Contacto</NavLink>
            </li>
            <li className="flex ml-2 justify-between items-center">
                <button onClick={() => handleIsDark(false)} className="p-3 w-[50%] bg-slate-700 rounded-l-[5px]">
                    {
                        !isDark ?
                        <BsSunFill color="ffeb43"/>
                        : <BsSun color='ffffff' /> 
                    }
                </button>
                <button onClick={() => handleIsDark(true)} className="p-3 w-[50%] bg-slate-200 rounded-r-[5px]">
                    {
                        isDark ?
                        <BsMoonFill color='black' />
                        : <BsMoon /> 
                    }
                </button>
            </li>
        </ul>

    </nav>
  )
}
export default NavBar