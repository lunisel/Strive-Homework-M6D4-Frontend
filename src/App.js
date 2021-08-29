import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Home/Homepage";
import Navbar from "./Components/Navbar";
import TeaDetails from "./Components/ProductPage/TeaDetails";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact render={(props) => <Homepage {...props} />} />
        <Route path="/search" render={(props) => <Search {...props} />} />
        <Route path="/tea/:id" component={TeaDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
