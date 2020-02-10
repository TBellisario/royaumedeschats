import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Formulaire from './Component/Formulaire/Formulaire';
import Tab from './Component/Tab/Tab';
import Article from './Component/Article/Article';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <Content />
        <Article />
        <Tab />
        
        <Formulaire />
        
      </div>
    );
  }
}



export default App;




