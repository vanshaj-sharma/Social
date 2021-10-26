import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
    </Switch>
  );
}

export default App;
