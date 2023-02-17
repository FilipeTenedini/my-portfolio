import * as C from './styles';
import { RiMenuLine } from 'react-icons/ri'

export const Header = ({clickFn}) => {
    return (
        <C.Header>
            <C.Name>
                filipe<span>Tenedini</span>
                <C.Bar className='bar'/>
            </C.Name>
            <C.MenuSymbol>
                <RiMenuLine onClick={clickFn} />                    
            </C.MenuSymbol>
        </C.Header>
    ); 
}