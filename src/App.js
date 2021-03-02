import LoginForm from "../src/components/pages/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/route";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Plan from "./components/pages/Plan";
import SignUpForm from "./components/pages/SignUpForm";

function App() {
  return (
    <div>
      
      <Switch>
         <Route exact path={ROUTES.HOME} component={Home} />
         <Route path={ROUTES.ABOUT} component={About} />
         <Route path={ROUTES.PLAN} component={Plan} />   
          <Route path={ROUTES.LOGIN} component={LoginForm} />
          <Route path={ROUTES.SIGNUP} component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default App;

