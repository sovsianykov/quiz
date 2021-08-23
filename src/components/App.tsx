import React, {FunctionComponent } from 'react';
import Header from "./Header/Header";
import Routing from "../Routing/Routing";




const App:FunctionComponent = () => {

  return (
    <div className="App">
        <Header/>
        <Routing/>
    </div>
  );
}

export default App;
