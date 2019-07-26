import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'



export const useDarkMode = (value) => {
    const [darkmode, setDarkmode] = useLocalStorage("key", value);
    useEffect(()=>{
        const darkMode = document.querySelector('body');
        value ? darkMode.classList.add("dark-mode") : darkMode.classList.remove("dark-mode");

    },[value]);
    const setDarkMode = () =>{
      setDarkmode(value);
    };
    return [darkmode, setDarkmode];
};