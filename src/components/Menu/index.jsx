import * as C from './styles'
import { items } from './items';
import { MenuItem } from '../MenuItem';
import { InfoItem } from '../InfoItem';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';

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
                {items.map((item)=>(
                    <MenuItem 
                        key={item}
                        text={item}
                    />
                ))}
                </C.Items>
                <InfoItem />
            </C.Container>
        </>

    );
}   