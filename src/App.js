import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Contact from './components/Contact'
import SpeiseKarte from './components/SpeiseKarte'
import Öffnungszeiten from './components/Öffnungszeiten'
import Gallery from './components/Gallery'
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App" >
        <section >
          <div>
            <Nav />
          </div>
          <div >
            <Switch>
              <Route exact path='/SpeiseKarte'>
                <SpeiseKarte />
              </Route>
              <Route path='/Contact'>
                <Contact />
              </Route>
              <Route path='/Öffnungszeiten'>
                <Öffnungszeiten />
              </Route>
              <Route path='/Gallery'>
                <Gallery />
              </Route>
            </Switch>
          </div>
        </section>
      </div >
    );

  }
}

export default App;
