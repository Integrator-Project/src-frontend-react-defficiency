import styled from 'styled-components';

// AI - Application Info
// SB - Search Bar
// GD - General Data
// TC - Top Countries

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 350px auto auto;
    grid-template-rows: 110px 135px auto;

    grid-template-areas: 
        'AI AI AI'
        'GD GD GD' 
        'TC TC TC';

    margin: auto;
    padding: 0 20px;

    max-width: 1200px;
    height: 100%;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;
