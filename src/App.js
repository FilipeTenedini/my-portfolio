import { useState } from "react";
import * as C from "./App.styles";
import { Header } from './components/Header';
import { Menu } from './components/Menu';

const App = () => {
const [shownMenu, setShownMenu] = useState(false);

  const openMenu = () => {
    setShownMenu(!shownMenu);
  }

  return (
    <>
      <Header clickFn={openMenu}/>
      {shownMenu &&
        <Menu 
          shown={shownMenu}
        />
      }
    </>

  );
}

export default App;
