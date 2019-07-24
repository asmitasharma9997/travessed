import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://littleletterslinked.com/wp-content/uploads/2019/07/0ec319c03a204b10baa583faaf1145de157d9b7c-1.jpg.webp" alt="logo"  />
        <button>INSPIRE ME</button>
        <button>KIDNAP ME</button>
        <Countries />
      </header>
    </div>
  );
}

export default App;
