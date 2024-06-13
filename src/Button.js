import { useState } from "react"

export default function({value, onclick, reset}){
  const[isClicked, setIsClicked] = useState(false);
  let className = 'button';
  
  if(isClicked){
    className += ' guessed';
  }
  if(reset){
    className += ' button';
  }
  function clickHandler() {
    setIsClicked(true);
    onclick(value);
  }
  return(
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}