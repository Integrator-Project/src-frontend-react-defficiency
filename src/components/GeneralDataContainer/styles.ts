import styled from 'styled-components';

export const Container = styled.div`
    grid-area: GD;

    display: flex;
    justify-content: stretch;

    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;

        > div {
            flex-grow: 0;
            margin: 5px;
            height: 150px;
        }
    }
`;
