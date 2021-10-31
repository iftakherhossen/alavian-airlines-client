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
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import RecentFlight from './Pages/Home/Recent Flights/RecentFlight';

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
          <Route path="/recentFlights/:ticketId">
            <RecentFlight></RecentFlight>
          </Route>
          <PrivateRoute path="/myFlights">
            <MyFlights></MyFlights>
          </PrivateRoute>
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