import * as C from "./App.styles";
import { useState } from "react";
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Social } from './components/Social';

const App = () => {
const [shownMenu, setShownMenu] = useState(false);

  const toggleMenu = () => {
    setShownMenu(!shownMenu)    
  }

  return (
    <>
      <C.GlobalStyle />
      <Header clickFn={toggleMenu}/>
      {shownMenu &&
        <Menu 
          shown={shownMenu}
          clickFn={toggleMenu}
        />
      }
      <Social />
    </>

  );
}

export default App;
