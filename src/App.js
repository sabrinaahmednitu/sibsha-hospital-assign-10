import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/serviceDetails/ServiceDetails';
import Login from './Login/Login'
import Notfound from './Pages/Notfound/Notfound'
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Hooks/PrivateRoute';
import Doctors from './Pages/Home/Doctors/Doctors';
import Footer from './Pages/Home/Footer/Footer';



function App() {
  return (
     <div className="App">
      <AuthProvider>
       <BrowserRouter>
        <Header />
         
         <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route exact path="/home">
             <Home></Home>
          </Route>
          <PrivateRoute exact path="/doctor">
                    {/* <Doctors /> */}
                    <Doctors></Doctors>
          </PrivateRoute>
         
          <Route exact path="/about">
             <About></About>
          </Route>
          <Route exact path="/contact">
             <Contact></Contact>
          </Route>
          <PrivateRoute exact path="/services/:serviceId">
             <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
          <Notfound></Notfound>
          </Route>
         </Switch>
         <Footer></Footer>
       </BrowserRouter>
       </AuthProvider> 
    </div>
   
  );
}

export default App;
