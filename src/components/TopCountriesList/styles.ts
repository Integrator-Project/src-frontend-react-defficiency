import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: calc(100% / 3 );
    
    background-color: var(--secondary);

    height: 350px;
    max-height: 350px;

    border-radius: 10px;
    margin: 5px 0 10px 5px;

    padding: 20px 30px;
`;


export const Header = styled.div`
    height: 30px;

    display: flex;
    align-items: center;
`;

export const Title = styled.div`

`;

export const List = styled.div`

`;
