import { useState } from "react"

export default function({wordSelected}){
      /*
    변수명 secretWord 초기값 빈값 input에 값을 변경하면 , 그 변경된 값을 secretWord에 반영

    button을 클릭하면 secretWord를 함수 wordSelected로 부모에 전달
    */
    const[secretWord, setSecretWord] = useState('');
    return(
    <div>
      <input type="text" onChange={(e)=>setSecretWord(e.target.value)}/>
      <button type="button" onClick={()=>wordSelected(secretWord)}>입력</button>
    </div>
  )
}