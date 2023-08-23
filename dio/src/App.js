
//import Button from './components/button/index'

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <h1>Hello DIO </h1>
      {arr.map((item) => {
        <p>
          {item} * 5 = {item * 5}
        </p>
      })}
    </div>
  );
};

export default App; 

/*import React, { useState } from "react";

class App = ( ) =>  {
  const [usuarios, ] = useState(["Pablo", "José", "Manoel"])

  render() {
    const { usuarios } = this.state;
    return (
      <div className="App">
        <h1>Hello DIO</h1>
        {
          usuarios.map((item) => (
          <p>{item}</p>
          ))}
      </div>
    );
  }
} */