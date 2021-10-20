import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
   <Router>
     <Switch>
     <Route exact path="/" component={Layout} />
     <Route path="/profile" component={Layout} />
     </Switch>
   </Router>
    
  );
}

export default App;
