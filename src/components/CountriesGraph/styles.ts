import styled from 'styled-components';

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

export const MonthIntervalSelect = styled.select`
    width: 150px;
    border: none;
    padding: 0;
    border: 0;
    background-color: var(--secondary);
    line-height: inherit;

    > option {
        outline: none;
        border: 0;
        background-color: var(--primary);
    }
`;