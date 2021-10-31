
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import Offering from './components/Offering/Offering';
import AddOffer from './components/AddOffer/AddOffer';

import Booking from './components/Booking/Booking';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/Header/PrivateRoute/PrivateRoute';
import Service from './components/Service/Service';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import AddServices from './components/AddServices/AddServices';
import AddService from './components/AddService/AddService';
import ManageOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFound/NotFound';
import ManageOrders from './components/ManageOrder/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/offering'>
              <Offering></Offering>
            </Route>
            <Route path="/addOffer">
              <AddOffer></AddOffer>
            </Route>

            <Route path='/aboutUs'
            >
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path='/manageOrder'
            >
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
