import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: calc(100% / 3);

    align-items: center;
    justify-content: center;
    background-color: var(--secondary);

    border-radius: 10px;
    margin: 5px;
`;

export const Title = styled.div`
    font-size: 30px;
`;

interface AmountProps {
    improving: boolean;
}

export const Amount = styled.div<AmountProps>`
    color: var(${props => props.improving ? '--improving':'--getting-worse'});
    margin-top: 5px;

    font-size: 28px;
`;
