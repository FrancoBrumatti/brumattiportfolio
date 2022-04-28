import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-bottom: 2px solid var(--primary);
    background: radial-gradient(circle, rgba(69,39,160,0.95) 15%, rgba(46,26,107,0.9) 100%);

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const NavbarTitle = styled.a`
    color: var(--white);
    font-weight: bolder;
    margin-left: 1rem;
    padding: .8rem 1rem;
    border-radius: .5rem;

    transition: all .3s;

    &:hover {
        cursor: pointer;
        color: var(--brighter);
    }
`;

export const NavbarButtons = styled.div`
    display: flex;
    padding: 0 .5rem;
    border-radius: .5rem;
`;

export const NavbarLink = styled.div`
    position: relative;
    padding: .8rem 1rem;
    font-size: 1.3rem;
    color: var(--white);
    transition: all .4s;

    &:hover {
        cursor: pointer;
        color: var(--brighter);
    }

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        background-color: var(--navbar);
        height: 100%;
        width: 1px;
        border-radius: 50%;
    }

    &:nth-last-child(1){
        &::after{
            display: none;
        }
    }
`;