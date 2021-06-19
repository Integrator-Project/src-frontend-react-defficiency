import styled from 'styled-components';
import { QuestionCircle } from 'styled-icons/fa-regular';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;

    background-color: var(--secondary);

    height: 350px;
    max-height: 350px;
    
    border-radius: 10px;
    margin: 5px 5px 10px 0;

    padding: 20px 30px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-size: 20px;
`;

export const ConfigWrapper = styled.div`

`;

export const HelpIcon = styled(QuestionCircle)`
    width: 30px;
    color: var(--light-gray)
`;
