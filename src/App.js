import LoginForm from "../src/components/pages/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  );
}

export default App;
