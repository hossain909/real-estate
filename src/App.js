import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import TenantListContextProvider from './components/Context/TenantListContext';
import EstateDetails from './components/EstateDetails/EstateDetails';
import Home from './components/Home/Home';
function App() {
  return (
    <TenantListContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/estateDetails/:estateId" component={EstateDetails} />
        </Switch>
      </Router>
    </TenantListContextProvider>
  );
}

export default App;
