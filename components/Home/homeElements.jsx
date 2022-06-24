import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeLayout = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    height: 100%;

    @media (min-width: 1024px) {
        grid-template-rows: auto;
        grid-template-columns: 17.5rem auto;
        height: calc(100vh - 5rem);
        padding: 1rem 0;
    }
`;

export const HomeProyectsDisplayLayout = styled(motion.div)`
    display: block;
    padding: 0;
    max-height: 60rem;
    overflow-y: auto;

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
        z-index: 99999;
        position: sticky;
        top: 0;
        text-align: center;
        background-color: var(--background);
        color: var(--brighter);

        box-shadow: 0px 0px 4px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 4px 0px var(--primary);
        -moz-box-shadow: 0px 0px 4px 0px var(--primary);
    }
`;

export const HomeProyectsDisplay = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;
    justify-content: center;
    height: 100%;
`;

export const HomeInfo = styled(motion.div)`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin: 1rem;
        width: 144px;
        border-radius: 50%;
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

    @media (min-width: 768px) {
        flex-direction: row;

        img {
            width: 256px;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: column;

        &::after {
            bottom: 0;
            height: 100%;
            width: 1px;
        }
    }
`;

export const HomeInfoText = styled.div`
    display: block;
    text-align: center;

    h1 {
        color: var(--brighter);
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
`;

export const HomeInfoCVButton = styled.button`
    border-radius: 1rem;
    margin-block: 1.5rem;
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
    font-size: 1rem;
    text-align: center;
    margin-inline: 1rem;

    span {
        color: var(--brighterSpan);
    }
`;

export const HomeProyect = styled(motion.a)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 12.5rem;
    height: 17.5rem;
    border-radius: 1rem;
    text-decoration: none;
    
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

    @media (min-width: 768px) {
        width: 17.5rem;
        height: 22.5rem;
    }
`;
