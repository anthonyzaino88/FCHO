import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import Projects from './pages/Projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Projects' component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
