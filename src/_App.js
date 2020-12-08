import React,{useState} from "react";
// import logo from "./logo.svg";
import "./App.css";



const App: React.FC = () => {
  const [names,setNames] = useState<string>('นัดสุดหล่อ')
  const [grade,setGrade] = useState('')

  const submitGrade = () => {
    setNames('นัดสุดหล่อมากๆๆๆๆๆ')
  }
  const nameOfgrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    // setGrade('5555')
  }

  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <form >
      <div>
        <label>ชื่อ</label>
        <input type="text" name="names" />
        <label>เกรด</label>
        {/* <input type="text" name="gpax" value={grade} onChange={(e:any,value:any) =>nameOfgrade(value)}/> */}
        <input type="text" name="gpax"  onChange={nameOfgrade}/>
      </div>
      <button type="button" onClick={submitGrade}>submit</button>
    </form>
   
  );
};

export default App;
