import { useState } from "react";

//this is the child
const Color = (props) => {
  console.log(props.selectedColor);
  return <div className={props.color} onClick={() => props.setSelectedColor(props.color)}></div>
}

//this is the parent
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
