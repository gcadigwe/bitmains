import LoginForm from "../src/components/pages/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
