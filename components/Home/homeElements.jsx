import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeLayout = styled.div`
    display: grid;
    grid-template-columns: 17.5rem auto;
    height: 100%;
    padding: 1rem 0;
`;

export const HomeProyectsDisplayLayout = styled.div`
    display: block;
    overflow-y: auto;
    padding: 0;

    &::-webkit-scrollbar {
        width: 5px;
        height: 80%;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--brighter);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--primary);
        border-radius: 4px;
    }

    h1 {
        position: sticky;
        top: 0;
        margin-bottom: 3rem;
        text-align: center;
        background-color: var(--background);
        color: var(--brighter);
    }
`;

export const HomeProyectsDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`;

export const HomeInfo = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    img {
        width: 90%;
        border-radius: 50%;
    }

    h1 {
        color: var(--brighter);
    }

    &::after{
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        width: 1px;
        height: 100%;
        border-radius: 50%;
        color: var(--brighter);
        background-color: var(--brighter);
    }
`;

export const HomeCVButton = styled.button`
    border-radius: 1rem;
    padding: 1rem;
    font-weight: bolder;
    color: var(--black);
    background-color: var(--primary);

    transition: all 0.4s;

    box-shadow: 0px 0px 10px 5px var(--brighter);
    -webkit-box-shadow: 0px 0px 10px 5px var(--brighter);
    -moz-box-shadow: 0px 0px 10px 5px var(--brighter);

    &:hover {
        cursor: pointer;

        background-color: var(--brighter);
        box-shadow: 0px 0px 20px 5px var(--brighter);
        -webkit-box-shadow: 0px 0px 20px 5px var(--brighter);
        -moz-box-shadow: 0px 0px 20px 5px var(--brighter);
    }
`;

export const HomeDescription = styled.p`
    color: var(--brighter);
    font-size: 1.2rem;
    text-align: center;

    span {
        color: var(--brighterSpan);
    }
`;

export const HomeProyect = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 17.5rem;
    height: 22.5rem;
    border-radius: 1rem;
    
    background-image: linear-gradient(0deg, rgba(29,22,38,1) 0%, rgba(0,0,0,0) 100%), url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
   
    h2 {
        color: var(--white);
        padding: 1.5rem;
        font-size: 1.4rem;
    }

    &:hover {
        cursor: pointer;
    }
`;
