import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';

function App() {

  const [searchWords, setSearchWords] = useState('')
  return (
    <div className="App">
      <input type="text" placeholder="Search" onChange={(event) =>{ setSearchWords(event.target.value) }}/>
      {JSONDATA.filter((val)=> {
        if(searchWords == ""){
          return
        } else if(val.first_name.toLowerCase().includes(searchWords.toLowerCase())){
          return val

        }
      }).map((v,key)=> {
        return (
        <div className="user" key={key}>
          <p>{v.first_name}</p>
          </div>
        )
      }
      )}
    </div>
  );
}

export default App;
