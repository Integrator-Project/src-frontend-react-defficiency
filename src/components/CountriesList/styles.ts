import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    flex-basis: calc(100% / 3 );
    
    background-color: var(--secondary);

    height: 380px;
    max-height: 380px;

    border-radius: 10px;
    margin: 5px 0 10px 5px;

    padding: 20px 30px;
`;


export const Header = styled.div`
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 20px;
`;

export const List = styled.div`
    height: 100%;
    max-height: 100vh;
    margin: 10px 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Button = styled.div`
    display: flex;
    cursor: pointer;

    align-self: center;
    justify-self: flex-end;
`;