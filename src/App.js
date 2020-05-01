import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import BurgerContent from './components/navbar/burgerNav/BurgerContent';
import AppContextProvider from './components/contexts/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cakes from './components/cakes/Cakes';
import CupCakes from './components/cakes/CupCakes';
import FormikOrderPage from './components/orderpage/OrderPage';
import FormikReadyMadeOrder from './components/orderpage/readyMadeCake/ReadyMadeForm';
import FormikPaymentPage from './components/payment/PaymentPage';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Router>
          
          <BurgerContent />
          <Navbar />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/cakes' component={Cakes} />
          <Route exact path='/cupcakes' component={CupCakes} />
          <Route exact path='/order' component={FormikOrderPage} />
          <Route exact path='/buycake' component={FormikReadyMadeOrder} />
          <Route exact path='/payment' component={FormikPaymentPage } />
          <Footer />
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;
