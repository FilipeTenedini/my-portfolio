import * as C from './styles';

export const MenuItem = ({text}) => {
    return (
        <C.ListItem>  <C.Text >{text}</C.Text></C.ListItem>
    );
}