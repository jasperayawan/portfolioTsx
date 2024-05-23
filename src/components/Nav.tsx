import React from 'react'
import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../state/store';
import { setDarkMode } from '../state/reducers/darkmodeSlice';
import { LuSunMoon } from "react-icons/lu";

const Nav: React.FC = () => {
    const isDarkMode = useSelector((state: RootState) => state.DarkMode.darkmode);
    const dispatch = useDispatch();


  return (
    <nav className='flex flex-row justify-between items-center p-10 w-full dark:text-[#C3D2D4] dark:bg-[#1c1f21]'>
        <p className="text-[#1E1E1E] text-2xl font-Krona-One font-bold dark:text-[#C3D2D4]">Jasper.tsx</p>
        <div className="flex flex-row gap-x-6">
            <ul className="flex flex-row gap-x-10">
                <li className="font-Krona-One">About me</li>
                <li className="font-Krona-One">Work</li>
                <li className="font-Krona-One">Contact</li>
            </ul>
            <button onClick={() => dispatch(setDarkMode(!isDarkMode))}>
                {isDarkMode ? <LuSunMoon /> : <FaMoon />}
            </button>
        </div>
    </nav>
  )
}

export default Nav
