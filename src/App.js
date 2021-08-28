import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Home/Homepage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact render={(props) => <Homepage {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
