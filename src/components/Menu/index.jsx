import * as C from './styles'
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { menuItems } from '../../items/menuItems';
import { socialItems } from '../../items/socialItems';
import { SocialNetWork } from '../SocialNetWork';

export const Menu = ({shown, clickFn}) => {
    const [move, setMove] = useState(false);

    useEffect(()=>{
        setMove(true);
    }, [shown]);

    const closeMenu = () => {
        setMove(false);
        setTimeout( clickFn, 1000 )
    }
    
    return(
        <>
            <C.Overlay appear={move} onClick={closeMenu} />
            <C.Container appear={move} >
                <C.CloseMenu onClick={closeMenu}>
                    <IoMdClose />
                </C.CloseMenu>
                <C.Items>
                    {menuItems.map((text)=> (
                        <C.ListItem><C.Text >{text}</C.Text></C.ListItem>
                    ))}
                </C.Items>
                <C.InfoItem>
                    Developed by Filipe Tenedini with <C.ColorArea>♥</C.ColorArea>
                </C.InfoItem>
                <C.NetWork>
                {socialItems.map((item, index) => (
                    <SocialNetWork key={index} network={item} margin={'0 5px 0  5px'}/>
                ))}
                </C.NetWork>
 
            </C.Container>
        </>

    );
}   