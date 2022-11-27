import {useState} from "react";
import {CreateKeys} from "./CreateKeys"

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [mem, setMemory] = useState("");
  const ops = ['/', '*', '+', '-', '.'];

  function safeEval(str) {
    return new Function('return ' + str)(); 
  }

  const calculate = () => {
    const num = safeEval(calc).toString()

    if (num === "0"){
      setCalc("");
    }
    else{
      setCalc(num);
    }
  }

  const deleteLast = () => {
    if (calc === ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const deleteAll = () => {
    setCalc('');
    setResult('')
  }

  const updateCalc = (value) => {
    if((ops.includes(value) && calc ==='') || (ops.includes(value) && ops.includes(calc.slice(-1)))){
        return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(safeEval(calc + value).toString());
    }
  }

  const memory = (op) => {
    if (op === "save"){
      setMemory(calc);

    }
    else if (op === "clear"){
      setMemory("");
    }
    else if (op === "recall"){
      setCalc(mem);
    }
    else if (op === "add"){
      setMemory(safeEval(mem+ "+" +calc).toString());
    }
    else if (op === "subtract"){
      setMemory(safeEval(mem+ "-" + calc).toString());
    }

    console.log(mem)
  }

  const toggleSign = () => {
    if (calc.charAt(0) === "-"){
      const positive = calc.slice(1)
      setCalc(positive);
    }
    else {
      setCalc("-" + calc);
    }
  }

  return (
    <div className="App">
      <div className="calculator">
      <h1>REACT calculator</h1>
        <div className="display">
          {result ? <span>({result})</span> : ''} {calc || 0}
        </div>
        <div className="input-buttons">
          <CreateKeys deleteAll= {deleteAll} deleteLast = {deleteLast} calculate = {calculate} updateCalc = {updateCalc} memory = {memory} toggleSign = {toggleSign}/>
        </div>
      </div>
      <footer>
        Ceilidh Ashcroft - 2022
      </footer>
    </div>

  );
}

export default App;
