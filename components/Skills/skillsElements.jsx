import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsLayout = styled(motion.div)`
    height: 100%;
    text-align: center;
    overflow: hidden;
    
    h1 {
        padding: 1.3rem;
        color: var(--white);

        box-shadow: 0px 0px 4px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 4px 0px var(--primary);
        -moz-box-shadow: 0px 0px 4px 0px var(--primary);
    }
`;

export const SkillsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
    overflow-y: auto;
    height: calc(85vh - 7rem);

    &::-webkit-scrollbar {
        width: 5px;
        height: 80%;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--textcolor);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--primary);
        border-radius: 4px;
    }

    @media (min-width: 1024px) {
        height: calc(95vh - 8rem);
    }
`;

export const Skill = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--textcolor);
    border-radius: 1rem;
    padding: 1rem;

    img {
        border-radius: 1rem;
    }

    h2 {
        color: var(--black);
    }
`;