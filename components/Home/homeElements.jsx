import styled from 'styled-components';

export const HomeLayout = styled.div`
    display: grid;
    grid-template-columns: 17.5rem auto;
    height: 100%;
`;

export const HomeInfo = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    img {
        margin: 1rem;
        border-radius: 50%;
    }

    &::after{
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        width: 1px;
        height: 100%;
        color: var(--brighter);
        background-color: var(--brighter);
    }
`;