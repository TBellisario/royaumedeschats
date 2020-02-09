import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Formulaire from './Component/Formulaire/Formulaire';
import Tab from './Component/Tab/Tab';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Tab />
        <Formulaire />
        
      </div>
    );
  }
}

export default App;