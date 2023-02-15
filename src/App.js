import { useState } from "react";
import * as C from "./App.styles";
import { Header } from './components/Header';
import { Menu } from './components/Menu';

const App = () => {
const [shownMenu, setShownMenu] = useState(false);

  const toggleMenu = () => {
    setShownMenu(!shownMenu)    
  }

  return (
    <>
      <Header clickFn={toggleMenu}/>
      {shownMenu &&
        <Menu 
          shown={shownMenu}
          clickFn={toggleMenu}
        />
      }
    </>

  );
}

export default App;
