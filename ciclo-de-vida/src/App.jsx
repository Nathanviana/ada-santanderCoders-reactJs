import React from "react";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  componentDidMount() {
    console.log("O componente foi montado!");
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? "Remover contador" : "Mostrar contador"}
        </button>

        {/* forma 01 */}
        {/* {this.state.showCounter ? <Counter /> : null} */}

        {/* forma 02 */}
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
