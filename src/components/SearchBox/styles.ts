import styled from 'styled-components';
import { Search } from 'styled-icons/heroicons-solid';

export const Container = styled.div`
    grid-area: SB;

    display: flex;

    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;
    padding: 0 15px;

    margin-top: 20px;
    background-color: var(--secondary);
    border-radius: 10px;

    width: 200px;
    height: 45px;
`;

export const SearchIcon = styled(Search)`
    color: var(--light-gray);
    width: 22px;
    font-weight: bold;
`;

export const Input = styled.input`
    color: var(--input);
    font-weight: bold;

    width: 135px;
    background-color: var(--secondary);
`;