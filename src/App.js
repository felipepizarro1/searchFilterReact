import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search"/>
      {JSONDATA.map((v,key)=> {
        return <div>{v.first_name}</div>
      }
      )}
    </div>
  );
}

export default App;
