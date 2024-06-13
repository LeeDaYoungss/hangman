import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

/* 방법1 이름을 직접 넣어서
function Gameboard = ()=>{
  return (
    <div className="App">
      <h2>Gameboard</h2>
    </div>
  );
}
*/

// 방법2 익명함수를 만들어서
const Gameboard = ({secretword, maxError})=>{
  const[guessedLetters, setGuessedLetters] = useState([]);
  const[errorCount, setErrorCount] = useState(0);
  const[reset, setReset] = useState(false);

  const guessedLetterHandler = (value)=>{      
    let val = value.toLowerCase();
    setGuessedLetters(prev=>[...prev, val]);
    
    // 틀렸을 때만 실행
    // react indexOf(a) - indexOf로 2번째에 있다는걸 안다
    if(secretword.indexOf(val) === -1){
      setErrorCount(errorCount+1);
    }
  }

  return (
    // isShown이 있으면 빈값, 없으면 hidden
    <div>
      <p>남은 횟수: {maxError - errorCount}</p>
      <LetterGrid secretword={secretword} guessedLetters={guessedLetters}/>
      <ButtonGrid reset={reset} onclick={guessedLetterHandler} isShown={errorCount < maxError }/>
      {errorCount === maxError && <button onClick={()=>{
        setErrorCount(0);
        setGuessedLetters([]);
        setReset(true);
        if(reset){
          setReset(false);
        }
      }}>리셋</button>}
    </div>
  );
}

export default Gameboard;
