import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import './App.css';
import NotFound from './Pages/NotFound/NotFound';
import MyFlights from './Pages/MyFlights/MyFlights';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/myFlights">
            <MyFlights></MyFlights>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;