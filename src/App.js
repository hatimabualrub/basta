import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazon</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign in</a>
            </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact/>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
