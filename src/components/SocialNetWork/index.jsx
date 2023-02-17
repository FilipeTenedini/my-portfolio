import { Container } from './styles';

export const SocialNetWork = ({network, margin}) => {
    return(
        <Container margin={margin}>
            {network}
        </Container>
    );
}