import { Component } from "react";
import Wrapper from "./components/Wrapper";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Wrapper />
        </div>
      </>
    );
  }
}

export default App;
