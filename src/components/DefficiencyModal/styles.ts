import styled from 'styled-components';

export const Container = styled.div`
    max-height: 230px;
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
