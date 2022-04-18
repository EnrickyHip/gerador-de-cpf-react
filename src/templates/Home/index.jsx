import './style.css';

import { Component } from 'react';
import { HomeMain } from '../../components/HomeMain';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default class Home extends Component {

  render() {

    return (
      <div className="app">

        <Header />

        <HomeMain />

         <Footer />     

      </div>
    )
  }

}
