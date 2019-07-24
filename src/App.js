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
var style1 = {
  width: "100%",
  height: "650px",
  // backgroundImage: `url(${Background}) `,
   
};
const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="App">
      <div className="expedia" >
        <img src="https://www.expediagroup.com/wp-content/uploads/2018/03/Expedia-Group-Logo_E-Horizontal-Logo-Sticky.png" width="10%"></img>
        
      </div>
        <div class="front">
        {/* <img src="https://littleletterslinked.com/wp-content/uploads/2019/07/0ec319c03a204b10baa583faaf1145de157d9b7c-1.jpg.webp" alt="logo" style={style1}></img>  */}
        <div class="flex-container">
        <button id="btn">Inspire Me</button>
        <b>OR</b>
        <button id="btn">Kidnap Me</button>
        </div>
      </div>
      <Countries />
    </div>
  );
}

export default App;
