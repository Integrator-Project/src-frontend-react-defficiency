import styled from 'styled-components';
import { QuestionCircle } from 'styled-icons/fa-regular';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: calc(100% / 3 * 2 + 10px);

    background-color: var(--secondary);

    height: 380px;
    max-height: 380px;
    
    border-radius: 10px;
    margin: 5px 5px 5px 0;

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

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    > div {
        display: flex;
        flex-direction: column;
    }

    > div h3 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 0px;
    }

    > div span {
        width: 100%;
        display: flex;
        justify-content: center;

        font-size: 70px;
    }
`;

export const HelpIcon = styled(QuestionCircle)`
    width: 25px;
    color: var(--light-gray)
`;