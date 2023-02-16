import * as C from './styles';
import { SocialNetWork } from '../SocialNetWork';
import { socialItems } from '../../items/socialItems';

export const Social = () => {
    return(
        <C.Container>
            <C.Social>
                {socialItems.map((item)=> <SocialNetWork network={item} />)}
            </C.Social>
            <C.Line />

        </C.Container>
    )
}
