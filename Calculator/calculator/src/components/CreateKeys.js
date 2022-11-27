import {calculatorButtons} from './calculator-base-button-data'

const CreateKeys = ({deleteAll, deleteLast, calculate, updateCalc, memory, toggleSign}) => {
    const displayButtons = calculatorButtons.map((item, i) => 
    <button key = {item.value} 
      id = {item.type} 
      onClick = {() => {
        if (item.className === "ac"){
          return deleteAll();
        }
        else if (item.className === "c"){
          return deleteLast();
        }
        else if (item.className === "equal"){
          return calculate();
        }
        else if (item.className === "ms"){
            return memory("save");
        }
        else if (item.className === "mc"){
            return memory("clear");
        }
        else if (item.className === "mr"){
            return memory("recall");
        }
        else if (item.className === "m-plus"){
            return memory("add");
        }
        else if (item.className === "m-minus"){
            return memory("subtract");
        }
        else if (item.className === "sign"){
            return toggleSign();
        }
        else {
          return (updateCalc(item.value.toString()));
        }
      }
    } > {item.text} </button>);
    return displayButtons;
  }

  export {CreateKeys};