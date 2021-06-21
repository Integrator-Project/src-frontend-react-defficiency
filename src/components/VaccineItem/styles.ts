import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin:  0 5px 10px 0;

    height: 35px;
    padding: 0 5px;

    cursor: pointer;

    border-radius: 4px;
    background: transparent;
    transition: background .2s;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const Identification = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 20px;
        margin: 0 10px;
    }

    > span {
        color: var(--light-gray);
    }
`;

export const Producer = styled.div`
    display: flex;
    align-items: center;
    color: var(--light-gray);
`;