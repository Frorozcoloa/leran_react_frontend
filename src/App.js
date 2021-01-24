import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/footer'
import About from './components/About'
import {BrowserRouter,Switch, Route, Redirect, withRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Header/>
      <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Redirect to="/home" />
      </Switch>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
