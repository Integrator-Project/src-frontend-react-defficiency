import styled from 'styled-components';
import {DoubleArrow} from 'styled-icons/material';

export const Container = styled.div`
    
`;


export const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;

    margin-top: 20px;
`;

export const CustomDate = styled.div`
    display: flex;
    align-items: center;
    color: var(--light-gray);
    font-weight: bold;

    margin-top: 5px;
`;

export const DoubleArrowIcon = styled(DoubleArrow)`
    width: 15px;
    color: var(--light-gray);
`;