import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { BsMoon, BsMoonFill, BsSun, BsSunFill } from "react-icons/bs"
import { BiMenuAltRight, BiX } from "react-icons/bi"

const NavBar = () => {

    const [isDark, setIsDark] = useState(localStorage.getItem('isDark') ? JSON.parse(localStorage.getItem('isDark')) : false)
    const [menu, setMenu] = useState(false)

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
        <Link className="font-semibold text-lg text-blue" onClick={() => setMenu(false)} to='/'>Santiago Rivarola</Link>
        <ul className="hidden sm:flex gap-6 items-center">
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
        <ul className="flex sm:hidden gap-3">
            <li className="flex ml-2 justify-between items-center">
                <button onClick={() => handleIsDark(false)} className="p-2 w-[50%] bg-slate-700 rounded-l-[5px]">
                    {
                        !isDark ?
                        <BsSunFill color="ffeb43"/>
                        : <BsSun color='ffffff' /> 
                    }
                </button>
                <button onClick={() => handleIsDark(true)} className="p-2 w-[50%] bg-slate-200 rounded-r-[5px]">
                    {
                        isDark ?
                        <BsMoonFill color='black' />
                        : <BsMoon /> 
                    }
                </button>
            </li>
            <li className="text-black dark:text-white flex items-center text-xl">
                {
                    !menu ? <BiMenuAltRight onClick={() => setMenu(true)}/>
                    : <BiX onClick={() => setMenu(false)}/>
                }
            </li>
            {
                menu &&
                <ul className="sm:hidden absolute w-screen flex flex-col justify-center items-center top-[70px] left-0 gap-5 pt-3 text-black dark:text-white bg-primary dark:bg-secondary">
                    <li className="text-center" onClick={() => setMenu(false)}><NavLink className={({ isActive }) =>  isActive ? 'text-blue font-semibold' : 'text-black dark:text-primary'} to='/about'>Sobre mí</NavLink></li>
                    <li className="text-center" onClick={() => setMenu(false)}><NavLink className={({ isActive }) =>  isActive ? 'text-blue font-semibold' : 'text-black dark:text-primary'} to='/portfolio'>Portfolio</NavLink></li>
                    <li className="text-center" onClick={() => setMenu(false)}><NavLink className={({ isActive }) =>  isActive ? 'text-blue font-semibold' : 'text-black dark:text-primary'} to='/contact'>Contacto</NavLink></li>
                </ul>
            }
        </ul>            
    </nav>
  )
}
export default NavBar