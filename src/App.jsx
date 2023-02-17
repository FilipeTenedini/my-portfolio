import * as C from "./App.styles";
import { useState } from "react";
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { socialItems } from "./items/socialItems";
import { SocialNetWork } from "./components/SocialNetWork";

const App = () => {
const [shownMenu, setShownMenu] = useState(false);

  const toggleMenu = () => {
    setShownMenu(!shownMenu)    
  }
  
  return (
  <>
    <C.GlobalStyle />
    <C.Container>
        <Header clickFn={toggleMenu}/>
        {shownMenu && <Menu shown={shownMenu} clickFn={toggleMenu} />}
        <C.SocialArea>
            <C.Social>
                {socialItems.map((item, index)=> <SocialNetWork key={index} network={item} margin={"0 0 25px 0"}/>)}
            </C.Social>
            <C.Line />
        </C.SocialArea>
    </C.Container>
  </>
  );
}

export default App;
