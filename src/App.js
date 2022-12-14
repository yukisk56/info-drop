import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Splash from "./pages/Splash/Splash";
import Create from "./pages/Create/Create";
import Preview from "./pages/Preview/Preview";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app" data-testid="App">
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          {/* Catch all unmatched routes */}
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
