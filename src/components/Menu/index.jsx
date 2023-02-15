import * as C from './styles'
import { items } from './items';
import { MenuItem } from '../MenuItem';

export const Menu = ({shown}) => {
    return(
        <>
            {/* <C.Overlay /> */}
            <C.Container appear={shown} >
                <C.Items>
                {items.map((item)=>(
                    <MenuItem 
                        key={item}
                        text={item}
                    />
                ))}
                </C.Items>
            </C.Container>
        </>

    );
}