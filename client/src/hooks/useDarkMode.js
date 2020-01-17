import React, {useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage";


export const useDark = () => {
 const [value, setValue] = useLocalStorage("dark");

 useEffect(() => {
  if(value === true){
   document.body.classList.add("dark");
  }
  else {
   return document.body.classList.remove("dark");
  }
 }, [value])



 return [value, setValue];
};
