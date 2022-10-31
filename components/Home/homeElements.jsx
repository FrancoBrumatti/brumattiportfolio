import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeLayout = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    height: 100%;

    @media (min-width: 1024px) {
        grid-template-rows: auto;
        grid-template-columns: 17.5rem auto;
        height: calc(100vh - 10rem);
        padding: 1rem 0;
    }
`;

export const HomeProyectsDisplayLayout = styled(motion.div)`
    display: block;
    margin: 0 2rem;
    max-height: 60rem;
    overflow-y: auto;
    background-color: rgba(0,0,0,.1);

    &::-webkit-scrollbar {
        width: 5px;
        height: 80%;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--textcolor);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--secondary);
        border-radius: 4px;
    }

    h1 {
        z-index: 99999;
        position: sticky;
        top: -1px;
        text-align: center;
        background-color: var(--background);
        color: var(--textcolor);
        border-bottom: 1px solid var(--primary);
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
    padding: 1rem;

    img {
        border-radius: 50%;
        width: 100%;
    }

    &::after{
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 1px;
        border-radius: 50%;
        color: var(--textcolor);
        background-color: var(--textcolor);
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (min-width: 1024px) {
        flex-direction: column;
        padding: 0;

        &::after {
            right: 0;
            height: 100%;
            width: 1px;
        }
    }
`;

export const HomeInfoText = styled.div`
    display: block;
    flex: 1;
    text-align: center;

    h1 {
        color: var(--textcolor);
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
`;

export const HomeInfoCVButton = styled.a`
    border-radius: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    text-decoration: none;
    font-weight: bolder;
    color: var(--white);
    background-color: var(--primary);

    transition: all 0.4s;

    box-shadow: 0px 0px 10px 5px var(--textcolor);
    -webkit-box-shadow: 0px 0px 10px 5px var(--textcolor);
    -moz-box-shadow: 0px 0px 10px 5px var(--textcolor);

    &:hover {
        cursor: pointer;

        background-color: var(--secondary);
        box-shadow: 0px 0px 20px 5px var(--textcolor);
        -webkit-box-shadow: 0px 0px 20px 5px var(--textcolor);
        -moz-box-shadow: 0px 0px 20px 5px var(--textcolor);
    }
`;

export const HomeDescription = styled.p`
    color: var(--textcolor);
    font-size: 1rem;
    text-align: center;
    margin-inline: 1rem;

    span {
        color: var(--textcolorSpan);
    }
`;

export const HomeProyect = styled(motion.a)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 12.5rem;
    height: 17.5rem;
    text-decoration: none;

    img {
        border-radius: 1rem;
    }
   
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
