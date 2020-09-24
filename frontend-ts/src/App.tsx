import React, {useState, useEffect}from "react"
import logo from './logo.svg';
import './App.css';
import Header from "./components/index"
import DrugSearch from "./components/Foodsearch/index"
import DrugSelect from "./components/Drugselect/index"




function App() {

  let [basket, setBasket] = useState<string[]>([])
  let [menu, setMenu] = useState([])

  const updateBasket = (drugs: String) => {
    basket.push()
    setBasket(basket)
    
  }

  useEffect(()=>{
    fetch("/hello")
    .then((response)=> response.json())
    .then((response)=> console.log(response));

    // console.log("Simone Ram was here")
  })
  return (
    <div className="App">
      {menu.map(recordItem =><p>{recordItem}</p>)}

      {/* <DrugSelect name="Dune" onSubmit={updateBasket}/> */}
      {/* <header className="App-header">
        <Header name="Simone" age={19}/>
        <DrugSearch />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
