import styled from 'styled-components';

export const Container = styled.div`
    grid-area: TC;

    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column;

        > div {
            flex-grow: 0;
            margin: 5px;
        }
    }
`;
