import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div class="page-container">
      <NavBar />
      <div class="content-wrap">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/404">
            <Error />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
