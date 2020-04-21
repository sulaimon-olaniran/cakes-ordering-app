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
import Products from './components/products/Products';
import AboutPage from './components/aboutpage/AboutPage';
import FormikOrderPage from './components/orderpage/OrderPage';
import FormikReadyMadeOrder from './components/orderpage/readyMadeCake/ReadyMadeForm';
import TestFormPage from './TestFormPage';

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
          <Route exact path='/products' component={Products} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/order' component={FormikOrderPage} />
          <Route exact path='/buycake' component={FormikReadyMadeOrder} />

          <Footer />
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;
