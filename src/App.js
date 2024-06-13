import { useState } from 'react';
import './App.css';
import Gameboard from './Gameboard';
import WordSelect from './WordSelect';

function App() {
  const[secretword, setSecretWord] = useState('');
  const[isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>
      <div>
        {/* && - 앞이 false이면 뒤에값도 false인지 확인 */}
        { isShown ?
          <Gameboard secretword={secretword} maxError={6} isShown={secretword}/>
          :
          /* 자식 컴포넌트 WordSelect가 전달해준 인수를 매개변수 val로 받아서 그 값을 secretword 반영, isShown의 값을 true */
          <WordSelect wordSelected={(val)=>{
            setSecretWord(val);
            setIsShown(true);
          }}/>

        }
      </div>
    </div>
  );
}



export default App;
