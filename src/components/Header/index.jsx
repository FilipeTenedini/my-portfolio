import * as C from './styles';
import { RiMenuLine } from 'react-icons/ri'

export const Header = ({clickFn}) => {
    return (
        <C.Header>
            <C.Container>
                <C.Name>
                    Filipe Tenedini
                    <C.Bar className='bar'/>
                </C.Name>
                <C.MenuSymbol>
                    <RiMenuLine onClick={clickFn} />                    
                </C.MenuSymbol>
            </C.Container>
        </C.Header>
    ); 
}