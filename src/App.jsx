import { useState } from "react";

//this is the child
const Color = (props) => {
  return <div className={`${props.color} ${(props.currentColor === props.color) ? 'selected' : ''}`} onClick={() => props.setSelectedColor(props.color)}></div>
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
        <Color currentColor={selectedColor} color="red" setSelectedColor={setSelectedColor} />
        <Color currentColor={selectedColor} color="blue" setSelectedColor={setSelectedColor} />
        <Color currentColor={selectedColor} color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
