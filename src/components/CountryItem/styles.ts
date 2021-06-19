import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 5px 15px 5px;
`;

export const Identification = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 10px;
    }

    > span {
        color: var(--light-gray);
    }
`;

export const Results = styled.div`
    display: flex;
    align-items: center;

    > span {
        color: var(--light-gray);
        margin-left: 10px;
    }
`;

